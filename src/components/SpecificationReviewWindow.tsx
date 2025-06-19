
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  FileText, 
  Check, 
  X, 
  AlertTriangle,
  Download,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff
} from "lucide-react";

interface SuggestionItem {
  id: string;
  type: 'update' | 'addition' | 'removal' | 'compliance';
  category: string;
  title: string;
  description: string;
  originalText?: string;
  suggestedText: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending' | 'approved' | 'rejected';
  lineNumber?: number;
}

interface SpecificationReviewWindowProps {
  fileName: string;
  fileContent: string;
  suggestions: SuggestionItem[];
  onClose: () => void;
  onApproveSuggestion: (suggestionId: string) => void;
  onRejectSuggestion: (suggestionId: string) => void;
  onApproveAll: () => void;
  onDownloadRevised: () => void;
}

export const SpecificationReviewWindow: React.FC<SpecificationReviewWindowProps> = ({
  fileName,
  fileContent,
  suggestions,
  onClose,
  onApproveSuggestion,
  onRejectSuggestion,
  onApproveAll,
  onDownloadRevised
}) => {
  const [selectedSuggestion, setSelectedSuggestion] = useState<string | null>(null);
  const [currentContent, setCurrentContent] = useState<string>(fileContent);
  const [highlightedLines, setHighlightedLines] = useState<Set<number>>(new Set());

  const pendingSuggestions = suggestions.filter(s => s.status === 'pending');
  const approvedSuggestions = suggestions.filter(s => s.status === 'approved');

  // Update highlighted lines when a suggestion is selected
  useEffect(() => {
    if (selectedSuggestion) {
      const suggestion = suggestions.find(s => s.id === selectedSuggestion);
      if (suggestion?.lineNumber) {
        setHighlightedLines(new Set([suggestion.lineNumber]));
      }
    } else {
      setHighlightedLines(new Set());
    }
  }, [selectedSuggestion, suggestions]);

  // Generate mock file content with proper formatting
  const getMockFileContent = () => {
    return `SECTION 01 10 00 - SUMMARY

PART 1 - GENERAL

1.1 RELATED DOCUMENTS
A. Drawings and general provisions of the Contract, including General and Supplementary 
   Conditions and Division 01 Specification Sections, apply to this Section.

1.2 SUMMARY
A. Section includes administrative and procedural requirements for the following:
   1. Project description.
   2. Work covered by Contract Documents.
   3. Phased construction.
   4. Owner-furnished products.
   5. Owner-performed work.
   6. Coordination with existing construction.
   7. Work restrictions.
   8. Specification and Drawing conventions.

1.3 PROJECT DESCRIPTION
A. Project consists of construction of new 3-story office building with basement parking garage.
B. Building area: Approximately 45,000 sq ft (4,181 sq m).
C. Building height: 42 feet (12.8 m) above grade.
D. Construction type: Type II, non-combustible construction per IBC 2018, Section 705.8.

1.4 WORK COVERED BY CONTRACT DOCUMENTS
A. Architectural, structural, mechanical, electrical, and plumbing work.
B. Site work including grading, utilities, and landscaping.
C. Armstrong Mineral Fiber Ceiling Tiles, Model 1234.

1.5 MATERIALS AND EQUIPMENT
A. Insulation shall have R-30 minimum thermal resistance.
B. Materials shall comply with ASTM E84-20 flame spread requirements.
C. All materials shall meet applicable building codes and standards.

PART 2 - PRODUCTS

2.1 PERFORMANCE REQUIREMENTS
A. Comply with applicable codes and standards.
B. Provide materials meeting specified performance criteria.

2.2 MATERIALS
A. All materials shall be new and in accordance with Contract Documents.
B. Materials shall contain recycled content where specified.

PART 3 - EXECUTION

3.1 GENERAL
A. Perform work in accordance with manufacturer's instructions.
B. Coordinate work with other trades.

END OF SECTION`;
  };

  const handleApproveSuggestion = (suggestionId: string) => {
    const suggestion = suggestions.find(s => s.id === suggestionId);
    if (suggestion && suggestion.originalText && suggestion.lineNumber) {
      // Apply the change to the current content
      const lines = currentContent.split('\n');
      const lineIndex = suggestion.lineNumber - 1;
      
      if (lineIndex >= 0 && lineIndex < lines.length) {
        lines[lineIndex] = lines[lineIndex].replace(suggestion.originalText, suggestion.suggestedText);
        setCurrentContent(lines.join('\n'));
      }
    }
    onApproveSuggestion(suggestionId);
  };

  const handleRejectSuggestion = (suggestionId: string) => {
    onRejectSuggestion(suggestionId);
  };

  const renderContentWithHighlights = () => {
    const lines = (currentContent || getMockFileContent()).split('\n');
    
    return lines.map((line, index) => {
      const lineNumber = index + 1;
      const isHighlighted = highlightedLines.has(lineNumber);
      const suggestion = suggestions.find(s => s.lineNumber === lineNumber && s.id === selectedSuggestion);
      
      return (
        <div 
          key={index} 
          className={`flex ${isHighlighted ? 'bg-yellow-100 border-l-4 border-yellow-500' : ''}`}
        >
          <div className="text-xs text-gray-400 mr-4 w-8 text-right select-none">
            {lineNumber}
          </div>
          <div className="flex-1 font-mono text-sm leading-relaxed whitespace-pre-wrap">
            {suggestion && suggestion.originalText ? (
              <span>
                {line.replace(suggestion.originalText, '')}
                <span className="bg-red-200 text-red-800 px-1 rounded">
                  {suggestion.originalText}
                </span>
                {suggestion.status === 'approved' && (
                  <span className="bg-green-200 text-green-800 px-1 rounded ml-1">
                    {suggestion.suggestedText}
                  </span>
                )}
              </span>
            ) : (
              line
            )}
          </div>
        </div>
      );
    });
  };
  
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#B04A4A';
      case 'medium': return '#E98B2A';
      case 'low': return '#7C9C95';
      default: return '#7C9C95';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'compliance': return <AlertTriangle className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="rounded-lg w-full max-w-[95vw] h-[90vh] flex flex-col shadow-2xl" style={{ backgroundColor: '#F7F3ED' }}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b-2" style={{ borderColor: '#D9D6D0', backgroundColor: '#FFFFFF' }}>
          <div className="flex items-center space-x-4">
            <FileText className="h-6 w-6" style={{ color: '#E98B2A' }} />
            <div>
              <h2 className="text-xl font-semibold" style={{ color: '#1A2B49' }}>{fileName}</h2>
              <p className="text-sm" style={{ color: '#7C9C95' }}>
                {pendingSuggestions.length} pending suggestions • {approvedSuggestions.length} approved
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              size="sm"
              onClick={onApproveAll}
              disabled={pendingSuggestions.length === 0}
              className="text-white"
              style={{ backgroundColor: '#7C9C95' }}
            >
              <Check className="h-4 w-4 mr-2" />
              Approve All
            </Button>
            <Button
              size="sm"
              onClick={onDownloadRevised}
              disabled={approvedSuggestions.length === 0}
              className="text-white"
              style={{ backgroundColor: '#E98B2A' }}
            >
              <Download className="h-4 w-4 mr-2" />
              Download Revised
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={onClose} 
              className="border-2 bg-white"
              style={{ borderColor: '#B04A4A', color: '#B04A4A' }}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Document Viewer - 70% width */}
          <div className="flex-1 border-r-2 flex flex-col" style={{ borderColor: '#D9D6D0', width: '70%' }}>
            <div className="p-4 border-b" style={{ borderColor: '#D9D6D0', backgroundColor: '#FFFFFF' }}>
              <h3 className="font-semibold" style={{ color: '#1A2B49' }}>Original Specification</h3>
            </div>
            <div className="flex-1 overflow-auto bg-white m-4 rounded shadow-sm border p-6" style={{ borderColor: '#D9D6D0' }}>
              <div className="space-y-1">
                {renderContentWithHighlights()}
              </div>
            </div>
          </div>

          {/* Review Panel - 30% width */}
          <div className="flex flex-col" style={{ width: '30%' }}>
            <div className="p-3 border-b" style={{ borderColor: '#D9D6D0', backgroundColor: '#FFFFFF' }}>
              <h3 className="font-semibold text-sm" style={{ color: '#1A2B49' }}>Review & Comments</h3>
            </div>
            <div className="flex-1 overflow-auto p-3">
              <div className="space-y-2">
                {suggestions.map((suggestion) => (
                  <Card 
                    key={suggestion.id} 
                    className={`border-l-4 transition-all duration-200 cursor-pointer ${
                      selectedSuggestion === suggestion.id ? 'shadow-md ring-2 ring-blue-300' : 'shadow-sm'
                    }`}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderColor: '#D9D6D0',
                      borderLeftColor: getPriorityColor(suggestion.priority),
                      borderLeftWidth: '4px'
                    }}
                    onClick={() => setSelectedSuggestion(suggestion.id === selectedSuggestion ? null : suggestion.id)}
                  >
                    <CardHeader className="pb-2 p-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-2">
                          <div className="mt-1">
                            {getTypeIcon(suggestion.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-xs font-medium leading-tight" style={{ color: '#1A2B49' }}>
                              {suggestion.title}
                            </CardTitle>
                            <p className="text-xs mt-1" style={{ color: '#7C9C95' }}>
                              Line {suggestion.lineNumber || 'N/A'}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-1">
                          <Badge 
                            className="text-xs px-1 py-0 text-white"
                            style={{ backgroundColor: getPriorityColor(suggestion.priority) }}
                          >
                            {suggestion.priority}
                          </Badge>
                          <Badge 
                            variant="outline" 
                            className="text-xs px-1 py-0"
                            style={{
                              borderColor: 
                                suggestion.status === 'approved' ? '#7C9C95' :
                                suggestion.status === 'rejected' ? '#B04A4A' :
                                '#E98B2A',
                              color:
                                suggestion.status === 'approved' ? '#7C9C95' :
                                suggestion.status === 'rejected' ? '#B04A4A' :
                                '#E98B2A'
                            }}
                          >
                            {suggestion.status}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-3 pt-0">
                      <p className="text-xs mb-3 leading-relaxed" style={{ color: '#1A2B49' }}>
                        {suggestion.description}
                      </p>
                      
                      {suggestion.originalText && (
                        <div className="mb-3">
                          <p className="text-xs font-medium mb-1" style={{ color: '#7C9C95' }}>Original:</p>
                          <div className="p-2 rounded text-xs bg-red-50 border-l-2 border-red-300">
                            <code className="text-red-700">
                              {suggestion.originalText}
                            </code>
                          </div>
                        </div>
                      )}
                      
                      <div className="mb-3">
                        <p className="text-xs font-medium mb-1" style={{ color: '#7C9C95' }}>Suggested:</p>
                        <div className="p-2 rounded text-xs bg-green-50 border-l-2 border-green-300">
                          <code className="text-green-700">
                            {suggestion.suggestedText}
                          </code>
                        </div>
                      </div>

                      {suggestion.status === 'pending' && (
                        <div className="flex space-x-2 pt-2">
                          <Button
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleApproveSuggestion(suggestion.id);
                            }}
                            className="text-white text-xs px-3 py-1 h-6"
                            style={{ backgroundColor: '#7C9C95' }}
                          >
                            <Check className="h-3 w-3 mr-1" />
                            Accept
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleRejectSuggestion(suggestion.id);
                            }}
                            className="text-xs px-3 py-1 h-6"
                            style={{ 
                              borderColor: '#B04A4A', 
                              color: '#B04A4A',
                              backgroundColor: '#FFFFFF'
                            }}
                          >
                            <X className="h-3 w-3 mr-1" />
                            Reject
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
                
                {suggestions.length === 0 && (
                  <div className="text-center py-8">
                    <FileText className="h-8 w-8 mx-auto mb-2" style={{ color: '#D9D6D0' }} />
                    <p className="text-sm" style={{ color: '#7C9C95' }}>No suggestions available</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
