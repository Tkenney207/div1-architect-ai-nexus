
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { FileText, Upload, Download, Check, AlertTriangle, Brain, Shield, Zap } from "lucide-react";
import { useSpecificationProcessor } from "@/hooks/useSpecificationProcessor";

export const DocumentProcessor = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const { 
    uploadSpecification, 
    processDocument, 
    downloadMasterSpec, 
    validateCompliance,
    uploadedFiles,
    processingStatus,
    complianceResults,
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

  return (
    <div className="space-y-8">
      {/* Master Specification Download */}
      <Card className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-3">
            <FileText className="h-6 w-6 text-purple-400" />
            <span>AI-Generated Master Specification</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-gray-300 mb-6">
              Download our AI-synthesized CSI MasterFormat specification guide, 
              compiled from industry-leading master specifications.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">49</div>
                <div className="text-gray-400">CSI Divisions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">2,500+</div>
                <div className="text-gray-400">Sections</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">100%</div>
                <div className="text-gray-400">Compliant</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">Latest</div>
                <div className="text-gray-400">Standards</div>
              </div>
            </div>
            
            {/* Lead Capture Form */}
            <div className="bg-gray-800/50 rounded-lg p-6 max-w-md mx-auto">
              <h4 className="text-lg font-semibold text-white mb-4">Get Your Free Master Spec</h4>
              <div className="space-y-4">
                <Input placeholder="Full Name" className="bg-gray-900 border-gray-600 text-white" />
                <Input placeholder="Email Address" type="email" className="bg-gray-900 border-gray-600 text-white" />
                <Input placeholder="Phone Number" className="bg-gray-900 border-gray-600 text-white" />
                <Input placeholder="Company" className="bg-gray-900 border-gray-600 text-white" />
                <Input placeholder="Job Title" className="bg-gray-900 border-gray-600 text-white" />
                <Button 
                  onClick={downloadMasterSpec}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Master Specification
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Document Upload Interface */}
      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-3">
            <Upload className="h-6 w-6 text-blue-400" />
            <span>Specification Review & Enhancement</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div 
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive 
                ? 'border-blue-500 bg-blue-900/20' 
                : 'border-gray-600 hover:border-gray-500'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-300 mb-4">
              Drop your specification files here or click to upload
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Supports Word documents, PDFs, and text files
            </p>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".doc,.docx,.pdf,.txt"
              onChange={(e) => handleFileUpload(e.target.files)}
              className="hidden"
            />
            <Button 
              onClick={() => fileInputRef.current?.click()}
              variant="outline"
              className="border-blue-500 text-blue-400 hover:bg-blue-600"
            >
              Select Files
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Uploaded Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {uploadedFiles.map((file) => (
                <div key={file.id} className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-8 w-8 text-blue-400" />
                    <div>
                      <p className="text-white font-medium">{file.name}</p>
                      <p className="text-sm text-gray-400">
                        {file.size} • Uploaded {new Date(file.uploadDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge 
                      variant={file.status === 'processed' ? 'default' : 'outline'}
                      className={file.status === 'processed' ? 'bg-green-600' : 'border-yellow-500 text-yellow-400'}
                    >
                      {file.status}
                    </Badge>
                    <Button 
                      size="sm"
                      onClick={() => processDocument(file.id)}
                      disabled={file.status === 'processing' || isLoading}
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      {file.status === 'processing' ? 'Processing...' : 'Review'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* AI Processing Features */}
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-purple-900/30 to-purple-800/30 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-3">
              <Brain className="h-5 w-5 text-purple-400" />
              <span>AI Analysis</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">CSI Format Validation</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">Content Synthesis</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">Gap Analysis</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">Language Standardization</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-900/30 to-green-800/30 border-green-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-3">
              <Shield className="h-5 w-5 text-green-400" />
              <span>Compliance Check</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">ASTM Standards</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">LEED Requirements</span>
              </div>
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-4 w-4 text-yellow-400" />
                <span className="text-sm text-gray-300">ICC Code Updates</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">ADA Compliance</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 border-blue-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-3">
              <Zap className="h-5 w-5 text-blue-400" />
              <span>Enhancement</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">Performance Specs</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">Product Updates</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">Cost Optimization</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-4 w-4 text-green-400" />
                <span className="text-sm text-gray-300">Sustainability Metrics</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Compliance Results */}
      {complianceResults.length > 0 && (
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Compliance Analysis Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {complianceResults.map((result, index) => (
                <div key={index} className="p-4 bg-gray-900 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-white">{result.section}</h4>
                    <Badge 
                      variant={result.status === 'compliant' ? 'default' : 'destructive'}
                      className={result.status === 'compliant' ? 'bg-green-600' : 'bg-red-600'}
                    >
                      {result.status}
                    </Badge>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">{result.description}</p>
                  {result.recommendations && (
                    <div className="text-sm text-blue-400">
                      Recommendation: {result.recommendations}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
