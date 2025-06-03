
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
  ChevronRight
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
      case 'high': return 'bg-red-600';
      case 'medium': return 'bg-yellow-600';
      case 'low': return 'bg-green-600';
      default: return 'bg-gray-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'compliance': return <AlertTriangle className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg w-full max-w-7xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <FileText className="h-6 w-6 text-blue-400" />
            <div>
              <h2 className="text-xl font-semibold text-white">{fileName}</h2>
              <p className="text-sm text-gray-400">
                {pendingSuggestions.length} pending suggestions • {approvedSuggestions.length} approved
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setViewMode(viewMode === 'side-by-side' ? 'suggestions-only' : 'side-by-side')}
              className="border-gray-600"
            >
              {viewMode === 'side-by-side' ? 'Suggestions Only' : 'Side by Side'}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onApproveAll}
              disabled={pendingSuggestions.length === 0}
              className="border-green-600 text-green-400"
            >
              Approve All
            </Button>
            <Button
              size="sm"
              onClick={onDownloadRevised}
              disabled={approvedSuggestions.length === 0}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Revised
            </Button>
            <Button variant="outline" size="sm" onClick={onClose} className="border-gray-600">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* File Content */}
          {viewMode === 'side-by-side' && (
            <div className="w-1/2 border-r border-gray-700 flex flex-col">
              <div className="p-4 border-b border-gray-700">
                <h3 className="font-semibold text-white">Original Specification</h3>
              </div>
              <div className="flex-1 p-4 overflow-auto">
                <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
                  {fileContent || "File content will be displayed here..."}
                </pre>
              </div>
            </div>
          )}

          {/* Suggestions Panel */}
          <div className={`${viewMode === 'side-by-side' ? 'w-1/2' : 'w-full'} flex flex-col`}>
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-semibold text-white">AI Suggestions</h3>
            </div>
            <div className="flex-1 overflow-auto">
              <div className="space-y-4 p-4">
                {suggestions.map((suggestion) => (
                  <Card 
                    key={suggestion.id} 
                    className={`bg-gray-800/50 border-gray-700 cursor-pointer transition-colors ${
                      selectedSuggestion === suggestion.id ? 'border-blue-500' : ''
                    }`}
                    onClick={() => setSelectedSuggestion(suggestion.id)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {getTypeIcon(suggestion.type)}
                          <div>
                            <CardTitle className="text-sm text-white">{suggestion.title}</CardTitle>
                            <p className="text-xs text-gray-400 mt-1">{suggestion.category}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getPriorityColor(suggestion.priority)}>
                            {suggestion.priority}
                          </Badge>
                          <Badge 
                            variant="outline" 
                            className={
                              suggestion.status === 'approved' ? 'border-green-500 text-green-400' :
                              suggestion.status === 'rejected' ? 'border-red-500 text-red-400' :
                              'border-yellow-500 text-yellow-400'
                            }
                          >
                            {suggestion.status}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-300 mb-3">{suggestion.description}</p>
                      
                      {suggestion.originalText && (
                        <div className="mb-3">
                          <p className="text-xs text-gray-400 mb-1">Original:</p>
                          <div className="bg-red-900/20 border border-red-700/50 rounded p-2">
                            <code className="text-xs text-red-300">{suggestion.originalText}</code>
                          </div>
                        </div>
                      )}
                      
                      <div className="mb-4">
                        <p className="text-xs text-gray-400 mb-1">Suggested:</p>
                        <div className="bg-green-900/20 border border-green-700/50 rounded p-2">
                          <code className="text-xs text-green-300">{suggestion.suggestedText}</code>
                        </div>
                      </div>

                      {suggestion.status === 'pending' && (
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              onApproveSuggestion(suggestion.id);
                            }}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <Check className="h-3 w-3 mr-1" />
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              onRejectSuggestion(suggestion.id);
                            }}
                            className="border-red-600 text-red-400 hover:bg-red-600/20"
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
                    <FileText className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400">No suggestions available</p>
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
