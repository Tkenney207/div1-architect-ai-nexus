
import React, { useState, useEffect, useCallback } from 'react';
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
import { useSpecificationReview } from "@/hooks/useSpecificationReview";

interface SpecificationReviewWindowProps {
  fileName: string;
  fileContent: string;
  onClose: () => void;
}

export const SpecificationReviewWindow: React.FC<SpecificationReviewWindowProps> = ({
  fileName,
  fileContent,
  onClose
}) => {
  const [selectedSuggestion, setSelectedSuggestion] = useState<string | null>(null);
  const [highlightedLines, setHighlightedLines] = useState<Set<number>>(new Set());
  const [initialized, setInitialized] = useState(false);

  const {
    suggestions,
    setSuggestions,
    generateSuggestions,
    approveSuggestion,
    rejectSuggestion,
    approveAllSuggestions,
    downloadRevisedSpecification,
    setFileContent
  } = useSpecificationReview();

  // Memoize the initialization logic to prevent infinite loops
  const initializeSuggestions = useCallback(() => {
    console.log('=== INITIALIZING SUGGESTIONS ===');
    console.log('SpecificationReviewWindow initializing for file:', fileName);
    console.log('File content received:', {
      type: typeof fileContent,
      length: fileContent?.length || 0,
      isString: typeof fileContent === 'string',
      preview: fileContent?.substring(0, 100) || 'No content'
    });
    
    if (fileContent && typeof fileContent === 'string' && fileContent.trim().length > 0 && !initialized) {
      console.log('Setting file content and generating suggestions...');
      setFileContent(fileContent);
      const generatedSuggestions = generateSuggestions(fileName, fileContent);
      setSuggestions(generatedSuggestions);
      setInitialized(true);
      console.log('Generated suggestions:', generatedSuggestions);
    } else if (!fileContent || typeof fileContent !== 'string' || fileContent.trim().length === 0) {
      console.warn('No valid file content provided to SpecificationReviewWindow');
    }
  }, [fileName, fileContent, generateSuggestions, setSuggestions, setFileContent, initialized]);

  // Initialize suggestions only once when component mounts with valid content
  useEffect(() => {
    if (!initialized) {
      initializeSuggestions();
    }
  }, [initializeSuggestions, initialized]);

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

  const handleApproveSuggestion = (suggestionId: string) => {
    approveSuggestion(suggestionId);
  };

  const handleRejectSuggestion = (suggestionId: string) => {
    rejectSuggestion(suggestionId);
  };

  const handleApproveAll = () => {
    approveAllSuggestions();
  };

  const handleDownloadRevised = () => {
    downloadRevisedSpecification(fileName, approvedSuggestions);
  };

  const renderContentWithHighlights = () => {
    console.log('=== RENDERING CONTENT DEBUG ===');
    console.log('fileContent type:', typeof fileContent);
    console.log('fileContent length:', fileContent?.length);
    console.log('fileContent first 200 chars:', fileContent?.substring(0, 200));
    
    // Check if content exists and is valid
    if (!fileContent) {
      console.log('No fileContent provided');
      return (
        <div className="text-center py-8">
          <FileText className="h-8 w-8 mx-auto mb-2" style={{ color: '#D9D6D0' }} />
          <p className="text-sm" style={{ color: '#7C9C95' }}>
            No document content available - fileContent is null/undefined
          </p>
        </div>
      );
    }

    if (typeof fileContent !== 'string') {
      console.log('fileContent is not a string, it is:', typeof fileContent);
      return (
        <div className="text-center py-8">
          <FileText className="h-8 w-8 mx-auto mb-2" style={{ color: '#D9D6D0' }} />
          <p className="text-sm" style={{ color: '#7C9C95' }}>
            Invalid content type: {typeof fileContent}
          </p>
        </div>
      );
    }

    const trimmedContent = fileContent.trim();
    if (trimmedContent.length === 0) {
      console.log('fileContent is empty after trimming');
      return (
        <div className="text-center py-8">
          <FileText className="h-8 w-8 mx-auto mb-2" style={{ color: '#D9D6D0' }} />
          <p className="text-sm" style={{ color: '#7C9C95' }}>
            Document appears to be empty
          </p>
        </div>
      );
    }

    // Split content into lines
    const lines = trimmedContent.split(/\r?\n/);
    console.log('Content split into', lines.length, 'lines');
    console.log('First 5 lines:', lines.slice(0, 5));
    
    return (
      <div className="space-y-0 leading-relaxed">
        {lines.map((line, index) => {
          const lineNumber = index + 1;
          const isHighlighted = highlightedLines.has(lineNumber);
          
          // Check if this line has any suggestions
          const lineSuggestions = suggestions.filter(s => s.lineNumber === lineNumber);
          
          // Use the actual line content or a space for empty lines to maintain formatting
          let displayContent: React.ReactNode = line.length > 0 ? line : '\u00A0'; // Non-breaking space for empty lines
          
          // Apply highlighting for suggestions
          if (lineSuggestions.length > 0) {
            lineSuggestions.forEach(sug => {
              if (sug.originalText && line.includes(sug.originalText)) {
                const parts = line.split(sug.originalText);
                displayContent = (
                  <>
                    {parts[0]}
                    {sug.status === 'approved' ? (
                      <span className="bg-green-200 text-green-800 px-1 rounded font-medium">
                        {sug.suggestedText}
                      </span>
                    ) : sug.status === 'rejected' ? (
                      <span className="bg-red-200 text-red-800 px-1 rounded line-through">
                        {sug.originalText}
                      </span>
                    ) : (
                      <span className="bg-yellow-200 text-yellow-800 px-1 rounded cursor-pointer hover:bg-yellow-300" 
                            onClick={() => setSelectedSuggestion(sug.id)}>
                        {sug.originalText}
                      </span>
                    )}
                    {parts.slice(1).join(sug.originalText)}
                  </>
                );
              }
            });
          }
          
          return (
            <div 
              key={index} 
              className={`flex py-1 px-2 ${isHighlighted ? 'bg-blue-50 border-l-4 border-blue-500' : ''} hover:bg-gray-50 transition-colors`}
            >
              <div className="text-xs text-gray-400 mr-4 w-12 text-right select-none flex-shrink-0 pt-1">
                {lineNumber}
              </div>
              <div className="flex-1 whitespace-pre-wrap break-words text-sm" style={{ fontFamily: 'monospace' }}>
                {displayContent}
              </div>
            </div>
          );
        })}
      </div>
    );
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

  // Calculate actual file stats
  const getFileStats = () => {
    if (!fileContent || typeof fileContent !== 'string') {
      return { lines: 0, size: '0KB', words: 0 };
    }
    const lines = fileContent.split(/\r?\n/).length;
    const words = fileContent.split(/\s+/).filter(word => word.length > 0).length;
    const sizeKB = Math.max(1, Math.round(fileContent.length / 1024));
    return { lines, size: `${sizeKB}KB`, words };
  };

  const fileStats = getFileStats();

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
              onClick={() => approveAllSuggestions()}
              disabled={pendingSuggestions.length === 0}
              className="text-white"
              style={{ backgroundColor: '#7C9C95' }}
            >
              <Check className="h-4 w-4 mr-2" />
              Approve All
            </Button>
            <Button
              size="sm"
              onClick={() => downloadRevisedSpecification(fileName, approvedSuggestions)}
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
          {/* Document Viewer - 75% width for larger display */}
          <div className="flex-1 border-r-2 flex flex-col" style={{ borderColor: '#D9D6D0', width: '75%' }}>
            <div className="p-4 border-b" style={{ borderColor: '#D9D6D0', backgroundColor: '#FFFFFF' }}>
              <h3 className="font-semibold" style={{ color: '#1A2B49' }}>Original Specification</h3>
              <p className="text-sm mt-1" style={{ color: '#7C9C95' }}>
                {fileStats.lines} lines, {fileStats.words} words, {fileStats.size}
              </p>
            </div>
            <div className="flex-1 overflow-auto bg-white m-4 rounded shadow-sm border" style={{ borderColor: '#D9D6D0' }}>
              <div className="p-4">
                {renderContentWithHighlights()}
              </div>
            </div>
          </div>

          {/* Review Panel - 25% width for slimmer display */}
          <div className="flex flex-col" style={{ width: '25%' }}>
            <div className="p-3 border-b" style={{ borderColor: '#D9D6D0', backgroundColor: '#FFFFFF' }}>
              <h3 className="font-semibold text-sm" style={{ color: '#1A2B49' }}>AI Suggestions</h3>
            </div>
            <div className="flex-1 overflow-auto p-2">
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
                    <CardHeader className="pb-2 p-2">
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
                    <CardContent className="p-2 pt-0">
                      <p className="text-xs mb-2 leading-relaxed" style={{ color: '#1A2B49' }}>
                        {suggestion.description}
                      </p>
                      
                      {suggestion.originalText && (
                        <div className="mb-2">
                          <p className="text-xs font-medium mb-1" style={{ color: '#7C9C95' }}>Original:</p>
                          <div className="p-1 rounded text-xs bg-red-50 border-l-2 border-red-300">
                            <code className="text-red-700 text-xs">
                              {suggestion.originalText}
                            </code>
                          </div>
                        </div>
                      )}
                      
                      <div className="mb-2">
                        <p className="text-xs font-medium mb-1" style={{ color: '#7C9C95' }}>Suggested:</p>
                        <div className="p-1 rounded text-xs bg-green-50 border-l-2 border-green-300">
                          <code className="text-green-700 text-xs">
                            {suggestion.suggestedText}
                          </code>
                        </div>
                      </div>

                      {suggestion.status === 'pending' && (
                        <div className="flex space-x-1 pt-1">
                          <Button
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              approveSuggestion(suggestion.id);
                            }}
                            className="text-white text-xs px-2 py-1 h-6"
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
                              rejectSuggestion(suggestion.id);
                            }}
                            className="text-xs px-2 py-1 h-6"
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
