
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, CheckCircle, Clock, Loader2, AlertCircle, FileCheck } from "lucide-react";
import { useSpecificationProcessor } from '@/hooks/useSpecificationProcessor';

export const DocumentProcessor = () => {
  const { documents, uploadDocument, generateMasterSpecification } = useSpecificationProcessor();
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileUpload = (files: FileList | null) => {
    if (files && files.length > 0) {
      Array.from(files).forEach(file => {
        uploadDocument(file);
      });
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processed':
        return <CheckCircle className="h-5 w-5 text-green-400" />;
      case 'processing':
        return <Loader2 className="h-5 w-5 text-blue-400 animate-spin" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-400" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processed':
        return 'bg-green-600';
      case 'processing':
        return 'bg-blue-600';
      case 'error':
        return 'bg-red-600';
      default:
        return 'border-gray-500 text-gray-300';
    }
  };

  return (
    <div className="space-y-8">
      {/* Document Upload Interface */}
      <Card className="shadow-2xl border-0 overflow-hidden bg-gray-800/50 border border-gray-700">
        <CardHeader className="bg-gradient-to-r from-purple-600/10 to-blue-600/10">
          <CardTitle className="flex items-center text-2xl text-white">
            <Upload className="h-6 w-6 mr-3 text-purple-400" />
            Document Processing Pipeline
          </CardTitle>
          <CardDescription className="text-lg text-gray-300">
            Upload specifications for AI-powered analysis and synthesis
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8">
          <div 
            className={`border-2 border-dashed rounded-3xl p-12 text-center transition-all duration-300 bg-gradient-to-br from-purple-600/5 to-blue-600/5 ${
              isDragOver 
                ? 'border-purple-400/60 bg-purple-600/10' 
                : 'border-purple-400/30 hover:border-purple-400/60'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full p-6 w-24 h-24 mx-auto mb-8 flex items-center justify-center">
              <Upload className="h-12 w-12 text-purple-400" />
            </div>
            <h3 className="text-3xl font-semibold text-white mb-6">Upload Specification Documents</h3>
            <p className="text-gray-300 mb-10 text-lg">Support for PDF, DOCX, and image formats with AI-powered extraction</p>
            <input
              type="file"
              multiple
              accept=".pdf,.docx,.doc"
              onChange={(e) => handleFileUpload(e.target.files)}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload">
              <Button size="lg" className="mb-6 px-10 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg cursor-pointer" asChild>
                <span>
                  <Upload className="h-6 w-6 mr-3" />
                  Choose Files
                </span>
              </Button>
            </label>
            <p className="text-sm text-gray-400">Maximum file size: 50MB per document</p>
          </div>

          {/* Uploaded Files */}
          {documents.length > 0 && (
            <div className="space-y-4 mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Uploaded Documents</h4>
              {documents.map((file) => (
                <div key={file.id} className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-gray-600">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-6 w-6 text-purple-400" />
                    <div>
                      <p className="text-white font-medium">{file.filename}</p>
                      <p className="text-gray-400 text-sm">{file.size}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(file.status)}
                    <Badge 
                      variant={file.status === 'processed' || file.status === 'processing' ? 'default' : 'outline'}
                      className={getStatusColor(file.status)}
                    >
                      {file.status === 'processed' ? 'Processed' : 
                       file.status === 'processing' ? 'Processing' : 
                       file.status === 'error' ? 'Error' : 'Uploaded'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Processing Status and Results */}
      {documents.some(doc => doc.status === 'processed') && (
        <Card className="shadow-2xl border-0 bg-gray-800/50 border border-gray-700">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Processed Specifications</CardTitle>
            <CardDescription className="text-lg text-gray-300">AI-synthesized specification sections with compliance validation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  section: "Division 03 - Concrete",
                  subsection: "03 30 00 - Cast-in-Place Concrete",
                  compliance: "ASTM C150 Compliant",
                  status: "Validated",
                  confidence: 96,
                  conflicts: 0
                },
                {
                  section: "Division 05 - Metals", 
                  subsection: "05 12 00 - Structural Steel Framing",
                  compliance: "AISC 360 Compliant",
                  status: "Validated",
                  confidence: 98,
                  conflicts: 0
                },
                {
                  section: "Division 07 - Thermal/Moisture",
                  subsection: "07 21 00 - Thermal Insulation",
                  compliance: "ASTM C518 Compliant",
                  status: "Conflict Detected",
                  confidence: 87,
                  conflicts: 2
                }
              ].map((spec, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-500/50 cursor-pointer bg-gray-900/50 border-gray-600">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-semibold text-lg group-hover:text-purple-400 transition-colors text-white">{spec.section}</h4>
                      <FileCheck className="h-5 w-5 text-purple-400" />
                    </div>
                    <p className="text-gray-400 mb-4 text-sm">{spec.subsection}</p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Compliance:</span>
                        <Badge variant="outline" className="border-green-500 text-green-400 text-xs">{spec.compliance}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Status:</span>
                        <Badge 
                          variant={spec.status === 'Validated' ? 'default' : 'destructive'} 
                          className={spec.status === 'Validated' ? 'bg-green-600' : 'bg-red-600'}
                        >
                          {spec.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Confidence:</span>
                        <Badge variant="secondary" className="bg-blue-600">{spec.confidence}%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Conflicts:</span>
                        <span className={`font-medium ${spec.conflicts === 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {spec.conflicts}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                size="lg" 
                className="px-10 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                onClick={generateMasterSpecification}
              >
                Generate Master Specification
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
