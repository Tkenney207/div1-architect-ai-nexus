
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Upload, FileText, AlertCircle, CheckCircle, Lightbulb, Download } from "lucide-react";
import { useSpecificationProcessor } from "@/hooks/useSpecificationProcessor";

interface Division1ReviewProps {
  onBack: () => void;
}

export const Division1Review: React.FC<Division1ReviewProps> = ({ onBack }) => {
  const [dragActive, setDragActive] = useState(false);
  const {
    uploadSpecification,
    uploadedFiles,
    processingStatus,
    isLoading
  } = useSpecificationProcessor();

  const handleFileUpload = (files: FileList | null) => {
    if (files && files.length > 0) {
      Array.from(files).forEach(file => {
        uploadSpecification(file);
      });
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const getSuggestionIcon = (type: 'warning' | 'improvement' | 'suggestion') => {
    switch (type) {
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-orange-500" />;
      case 'improvement':
        return <Lightbulb className="h-4 w-4 text-blue-500" />;
      default:
        return <CheckCircle className="h-4 w-4 text-green-500" />;
    }
  };

  const getPriorityBadge = (priority: 'high' | 'medium' | 'low') => {
    switch (priority) {
      case 'high':
        return <Badge className="bg-red-600">High Priority</Badge>;
      case 'medium':
        return <Badge className="bg-yellow-600">Medium Priority</Badge>;
      default:
        return <Badge variant="secondary">Low Priority</Badge>;
    }
  };

  const getComplianceStatus = (status: 'compliant' | 'non-compliant' | 'needs-review') => {
    switch (status) {
      case 'compliant':
        return <Badge className="bg-green-600">Compliant</Badge>;
      case 'non-compliant':
        return <Badge className="bg-red-600">Non-Compliant</Badge>;
      default:
        return <Badge className="bg-yellow-600">Needs Review</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="hover:opacity-70"
          style={{ color: '#7C9C95' }}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Modules
        </Button>
        <div>
          <h2 className="text-4xl font-bold" style={{ color: '#1A2B49' }}>Division 01 Review & Enhancement</h2>
          <p className="text-xl" style={{ color: '#7C9C95' }}>Upload your specification for AI-powered analysis</p>
        </div>
      </div>

      {/* Upload Section */}
      <Card className="bg-white border" style={{ borderColor: '#F7F3ED' }}>
        <CardHeader>
          <CardTitle style={{ color: '#1A2B49' }} className="flex items-center space-x-2">
            <Upload className="h-6 w-6" style={{ color: '#E98B2A' }} />
            <span>Upload Division 01 Specification</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div 
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive 
                ? 'border-opacity-70' 
                : 'hover:border-opacity-70'
            }`}
            style={{ borderColor: dragActive ? '#E98B2A' : '#7C9C95' }}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept=".pdf,.docx,.doc,.txt"
              onChange={(e) => handleFileUpload(e.target.files)}
              className="hidden"
              id="file-upload"
              multiple
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="space-y-4">
                <div className="rounded-full p-4 w-fit mx-auto" style={{ backgroundColor: '#E98B2A', opacity: 0.2 }}>
                  <FileText className="h-8 w-8" style={{ color: '#E98B2A' }} />
                </div>
                <div>
                  <p className="text-lg mb-2" style={{ color: '#1A2B49' }}>
                    Drag and drop your file here, or click to browse
                  </p>
                  <p className="text-sm" style={{ color: '#7C9C95' }}>
                    Supports PDF, DOCX, DOC, and TXT files
                  </p>
                </div>
              </div>
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Processing Status */}
      {processingStatus && (
        <Card className="bg-white border" style={{ borderColor: '#E98B2A' }}>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="animate-spin h-6 w-6 border-2 border-t-transparent rounded-full" style={{ borderColor: '#E98B2A' }}></div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium" style={{ color: '#1A2B49' }}>{processingStatus.stage}</span>
                  <span style={{ color: '#E98B2A' }}>{processingStatus.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full transition-all duration-300" 
                    style={{ 
                      width: `${processingStatus.progress}%`,
                      backgroundColor: '#E98B2A'
                    }}
                  ></div>
                </div>
                <p className="text-sm mt-2" style={{ color: '#7C9C95' }}>{processingStatus.message}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Uploaded Files with Analysis */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-6">
          {uploadedFiles.map((file) => (
            <Card key={file.id} className="bg-white border" style={{ borderColor: '#F7F3ED' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-8 w-8" style={{ color: '#E98B2A' }} />
                    <div>
                      <p className="font-medium" style={{ color: '#1A2B49' }}>{file.name}</p>
                      <p className="text-sm" style={{ color: '#7C9C95' }}>
                        {file.size} • Uploaded {new Date(file.uploadDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <Badge 
                    variant={file.status === 'processed' ? 'default' : 'outline'}
                    className={file.status === 'processed' ? 'bg-green-600' : 
                      file.status === 'processing' ? 'bg-blue-600' : 'border-yellow-500 text-yellow-600'}
                  >
                    {file.status === 'processing' ? 'Analyzing...' : file.status}
                  </Badge>
                </div>
                
                {/* Show analysis results if file is processed */}
                {file.status === 'processed' && file.analysisResults && (
                  <div className="space-y-6 mt-6 pt-6 border-t" style={{ borderColor: '#F7F3ED' }}>
                    {/* Overall Score */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold" style={{ color: '#E98B2A' }}>
                          {file.analysisResults.overview.overallCompliance}%
                        </div>
                        <div style={{ color: '#7C9C95' }}>Overall Compliance</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold" style={{ color: '#1A2B49' }}>
                          {file.analysisResults.overview.criticalIssues}
                        </div>
                        <div style={{ color: '#7C9C95' }}>Critical Issues</div>
                      </div>
                    </div>

                    {/* Code Compliance */}
                    {file.analysisResults.codeCompliance.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3" style={{ color: '#1A2B49' }}>Code Compliance</h4>
                        <div className="space-y-3">
                          {file.analysisResults.codeCompliance.slice(0, 3).map((compliance, index) => (
                            <div key={index} className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#F7F3ED' }}>
                              <div>
                                <p className="font-medium" style={{ color: '#1A2B49' }}>{compliance.code}</p>
                                <p className="text-sm" style={{ color: '#7C9C95' }}>{compliance.description}</p>
                              </div>
                              {getComplianceStatus(compliance.status)}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex space-x-4 justify-center pt-4">
                      <Button className="text-white" style={{ backgroundColor: '#E98B2A' }}>
                        <Download className="h-4 w-4 mr-2" />
                        Download Enhanced Version
                      </Button>
                      <Button variant="outline" style={{ borderColor: '#7C9C95', color: '#7C9C95' }}>
                        View Full Analysis
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
