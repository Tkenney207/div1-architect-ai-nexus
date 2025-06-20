import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, CheckCircle, Download, X, Zap, AlertTriangle } from "lucide-react";
import { useSpecificationReview } from "@/hooks/useSpecificationReview";

export const DocumentProcessor = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const {
    suggestions,
    setSuggestions,
    generateSuggestions,
    approveSuggestion,
    rejectSuggestion,
    approveAllSuggestions,
    downloadRevisedSpecification
  } = useSpecificationReview();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const processDocuments = async () => {
    if (uploadedFiles.length === 0) return;
    
    setIsProcessing(true);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Generate suggestions for the first file (in real implementation, this would process all files)
    const fileName = uploadedFiles[0].name;
    // For demo purposes, using placeholder content
    const fileContent = `Sample specification content for ${fileName}`;
    const newSuggestions = generateSuggestions(fileName, fileContent);
    setSuggestions(newSuggestions);
    
    setIsProcessing(false);
    setShowSuggestions(true);
  };

  const handleDownloadRevised = () => {
    const approvedSuggestions = suggestions.filter(s => s.status === 'approved');
    if (approvedSuggestions.length > 0 && uploadedFiles.length > 0) {
      downloadRevisedSpecification(uploadedFiles[0].name, approvedSuggestions);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'compliance': return <AlertTriangle className="h-4 w-4" />;
      case 'update': return <Zap className="h-4 w-4" />;
      case 'addition': return <FileText className="h-4 w-4" />;
      case 'removal': return <X className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Upload Section */}
      <Card className="bg-slate-800/50 border border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <Upload className="h-5 w-5 text-blue-400" />
            <span>Upload Specifications</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-2 border-dashed border-slate-600 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
            <input
              type="file"
              multiple
              accept=".pdf,.doc,.docx,.txt"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <Upload className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-300 mb-2">Drop files here or click to browse</p>
              <p className="text-sm text-slate-500">Supports PDF, DOC, DOCX, TXT files</p>
            </label>
          </div>
          
          {uploadedFiles.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-white font-medium">Uploaded Files:</h4>
              {uploadedFiles.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/50 rounded p-3">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-4 w-4 text-blue-400" />
                    <span className="text-slate-300">{file.name}</span>
                    <Badge variant="secondary">{(file.size / 1024 / 1024).toFixed(2)} MB</Badge>
                  </div>
                  <Button
                    onClick={() => removeFile(index)}
                    variant="ghost"
                    size="sm"
                    className="text-slate-400 hover:text-red-400"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
          
          {uploadedFiles.length > 0 && (
            <Button
              onClick={processDocuments}
              disabled={isProcessing}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              {isProcessing ? 'Processing Documents...' : 'Analyze & Review Specifications'}
            </Button>
          )}
        </CardContent>
      </Card>

      {/* Processing Animation */}
      {isProcessing && (
        <Card className="bg-slate-800/50 border border-slate-700">
          <CardContent className="py-8">
            <div className="text-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto"></div>
              <div className="space-y-2">
                <p className="text-white font-medium">AI Processing in Progress</p>
                <div className="text-sm text-slate-400 space-y-1">
                  <p>✓ Extracting document structure and content</p>
                  <p>✓ Analyzing specifications against standards</p>
                  <p>⏳ Identifying compliance issues and improvements</p>
                  <p>⏳ Generating optimization suggestions</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Suggestions Section */}
      {showSuggestions && suggestions.length > 0 && (
        <Card className="bg-slate-800/50 border border-slate-700">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-white">AI Analysis Results</CardTitle>
            <div className="flex space-x-2">
              <Button
                onClick={approveAllSuggestions}
                size="sm"
                className="bg-green-600 hover:bg-green-700"
              >
                Approve All
              </Button>
              <Button
                onClick={handleDownloadRevised}
                size="sm"
                variant="outline"
                className="border-slate-600 text-slate-300"
                disabled={!suggestions.some(s => s.status === 'approved')}
              >
                <Download className="h-4 w-4 mr-2" />
                Download Revised
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {suggestions.map((suggestion) => (
                <div
                  key={suggestion.id}
                  className={`border rounded-lg p-4 transition-all ${
                    suggestion.status === 'approved' ? 'border-green-500 bg-green-500/10' :
                    suggestion.status === 'rejected' ? 'border-red-500 bg-red-500/10' :
                    'border-slate-600 bg-slate-700/30'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      {getTypeIcon(suggestion.type)}
                      <div>
                        <h4 className="font-medium text-white">{suggestion.title}</h4>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge className={getPriorityColor(suggestion.priority)}>
                            {suggestion.priority}
                          </Badge>
                          <Badge variant="outline" className="text-slate-400 border-slate-600">
                            {suggestion.category}
                          </Badge>
                          {suggestion.lineNumber && (
                            <Badge variant="outline" className="text-slate-400 border-slate-600">
                              Line {suggestion.lineNumber}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {suggestion.status === 'pending' && (
                      <div className="flex space-x-2">
                        <Button
                          onClick={() => approveSuggestion(suggestion.id)}
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                        <Button
                          onClick={() => rejectSuggestion(suggestion.id)}
                          size="sm"
                          variant="outline"
                          className="border-red-500 text-red-400 hover:bg-red-500/10"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-slate-300 mb-3">{suggestion.description}</p>
                  
                  {suggestion.originalText && (
                    <div className="bg-slate-800 rounded p-3 mb-3">
                      <p className="text-sm text-slate-400 mb-1">Original:</p>
                      <p className="text-slate-300 font-mono text-sm">{suggestion.originalText}</p>
                    </div>
                  )}
                  
                  <div className="bg-slate-800 rounded p-3">
                    <p className="text-sm text-slate-400 mb-1">Suggested:</p>
                    <p className="text-slate-300 font-mono text-sm">{suggestion.suggestedText}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
