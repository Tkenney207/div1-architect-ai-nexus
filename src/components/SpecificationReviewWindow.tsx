
import React, { useState } from 'react';
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
  const [viewMode, setViewMode] = useState<'side-by-side' | 'suggestions-only'>('side-by-side');

  const pendingSuggestions = suggestions.filter(s => s.status === 'pending');
  const approvedSuggestions = suggestions.filter(s => s.status === 'approved');
  
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
      <div className="rounded-lg w-full max-w-7xl h-[90vh] flex flex-col shadow-2xl" style={{ backgroundColor: '#F7F3ED' }}>
        {/* Header - Word-like ribbon */}
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
              variant="outline"
              size="sm"
              onClick={() => setViewMode(viewMode === 'side-by-side' ? 'suggestions-only' : 'side-by-side')}
              className="border-2 bg-white"
              style={{ borderColor: '#D9D6D0', color: '#1A2B49' }}
            >
              {viewMode === 'side-by-side' ? (
                <>
                  <EyeOff className="h-4 w-4 mr-2" />
                  Suggestions Only
                </>
              ) : (
                <>
                  <Eye className="h-4 w-4 mr-2" />
                  Side by Side
                </>
              )}
            </Button>
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
          {/* File Content - Word-like document view */}
          {viewMode === 'side-by-side' && (
            <div className="w-1/2 border-r-2 flex flex-col" style={{ borderColor: '#D9D6D0' }}>
              <div className="p-4 border-b" style={{ borderColor: '#D9D6D0', backgroundColor: '#FFFFFF' }}>
                <h3 className="font-semibold" style={{ color: '#1A2B49' }}>Original Specification</h3>
              </div>
              <div className="flex-1 p-6 overflow-auto bg-white m-4 rounded shadow-sm border" style={{ borderColor: '#D9D6D0' }}>
                <div className="max-w-none">
                  <pre className="text-sm whitespace-pre-wrap font-mono leading-relaxed" style={{ color: '#1A2B49' }}>
                    {fileContent || "File content will be displayed here..."}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {/* Suggestions Panel - Word-like review pane */}
          <div className={`${viewMode === 'side-by-side' ? 'w-1/2' : 'w-full'} flex flex-col`}>
            <div className="p-4 border-b" style={{ borderColor: '#D9D6D0', backgroundColor: '#FFFFFF' }}>
              <h3 className="font-semibold" style={{ color: '#1A2B49' }}>Review & Comments</h3>
            </div>
            <div className="flex-1 overflow-auto p-4">
              <div className="space-y-4">
                {suggestions.map((suggestion) => (
                  <Card 
                    key={suggestion.id} 
                    className={`border-l-4 transition-all duration-200 cursor-pointer ${
                      selectedSuggestion === suggestion.id ? 'shadow-md' : 'shadow-sm'
                    }`}
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderColor: '#D9D6D0',
                      borderLeftColor: getPriorityColor(suggestion.priority),
                      borderLeftWidth: '4px'
                    }}
                    onClick={() => setSelectedSuggestion(suggestion.id)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className="mt-1">
                            {getTypeIcon(suggestion.type)}
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-sm font-medium" style={{ color: '#1A2B49' }}>
                              {suggestion.title}
                            </CardTitle>
                            <p className="text-xs mt-1" style={{ color: '#7C9C95' }}>
                              {suggestion.category} • Line {suggestion.lineNumber || 'N/A'}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            className="text-xs px-2 py-1 text-white"
                            style={{ backgroundColor: getPriorityColor(suggestion.priority) }}
                          >
                            {suggestion.priority}
                          </Badge>
                          <Badge 
                            variant="outline" 
                            className="text-xs px-2 py-1"
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
                    <CardContent>
                      <p className="text-sm mb-4 leading-relaxed" style={{ color: '#1A2B49' }}>
                        {suggestion.description}
                      </p>
                      
                      {suggestion.originalText && (
                        <div className="mb-4">
                          <p className="text-xs font-medium mb-2" style={{ color: '#7C9C95' }}>Original Text:</p>
                          <div className="p-3 rounded border-l-3" style={{ backgroundColor: '#FEF2F2', borderLeftColor: '#B04A4A' }}>
                            <code className="text-xs leading-relaxed" style={{ color: '#B04A4A' }}>
                              {suggestion.originalText}
                            </code>
                          </div>
                        </div>
                      )}
                      
                      <div className="mb-4">
                        <p className="text-xs font-medium mb-2" style={{ color: '#7C9C95' }}>Suggested Change:</p>
                        <div className="p-3 rounded border-l-3" style={{ backgroundColor: '#F0F9FF', borderLeftColor: '#7C9C95' }}>
                          <code className="text-xs leading-relaxed" style={{ color: '#7C9C95' }}>
                            {suggestion.suggestedText}
                          </code>
                        </div>
                      </div>

                      {suggestion.status === 'pending' && (
                        <div className="flex space-x-3 pt-2">
                          <Button
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              onApproveSuggestion(suggestion.id);
                            }}
                            className="text-white text-xs px-4"
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
                              onRejectSuggestion(suggestion.id);
                            }}
                            className="text-xs px-4"
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
                  <div className="text-center py-12">
                    <FileText className="h-12 w-12 mx-auto mb-4" style={{ color: '#D9D6D0' }} />
                    <p style={{ color: '#7C9C95' }}>No suggestions available</p>
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
