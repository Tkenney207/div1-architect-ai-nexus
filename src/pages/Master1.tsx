import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Brain, Shield, CheckCircle, Upload, Download, ChevronDown, ChevronUp } from "lucide-react";
import Header from "@/components/Header";
import { useState, useRef } from "react";
import { useSpecificationProcessor } from "@/hooks/useSpecificationProcessor";
import { SpecificationAnalysis } from "@/components/SpecificationAnalysis";

const Master1 = () => {
  const [dragActive, setDragActive] = useState(false);
  const [expandedAnalysis, setExpandedAnalysis] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const {
    uploadSpecification,
    uploadedFiles,
    processingStatus,
    isLoading
  } = useSpecificationProcessor();

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
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      Array.from(files).forEach(file => {
        uploadSpecification(file);
      });
    }
  };

  const handleFileUpload = (files: FileList | null) => {
    if (files && files.length > 0) {
      Array.from(files).forEach(file => {
        uploadSpecification(file);
      });
    }
  };

  const toggleAnalysisExpansion = (fileId: string) => {
    setExpandedAnalysis(expandedAnalysis === fileId ? null : fileId);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F3ED' }}>
      <Header />

      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-light mb-8 leading-tight" style={{ color: '#1A2B49' }}>
              Process specifications with 
              <span className="font-light" style={{ color: '#E98B2A' }}> AI precision </span>
            </h1>
            <div className="bg-white rounded-2xl shadow-sm border p-12 mb-12" style={{ borderColor: '#D9D6D0' }}>
              <h2 className="text-2xl font-medium mb-6" style={{ color: '#E98B2A' }}>Upload. Validate. Publish.</h2>
              <p className="text-xl leading-relaxed" style={{ color: '#1A2B49' }}>
                AI Specification review and updating engine. Now supports up to 400 documents at once.
              </p>
            </div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="mb-20">
          <Card className="bg-white border shadow-sm" style={{ borderColor: '#D9D6D0' }}>
            <CardHeader className="border-b p-8" style={{ borderColor: '#D9D6D0' }}>
              <CardTitle className="flex items-center space-x-3 text-xl font-medium" style={{ color: '#1A2B49' }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#F7F3ED' }}>
                  <Upload className="h-5 w-5" style={{ color: '#E98B2A' }} />
                </div>
                <span>Upload Your Specifications (Up to 400 files)</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div 
                className={`border-2 border-dashed rounded-xl p-12 text-center transition-all ${
                  dragActive 
                    ? 'bg-mint bg-opacity-30' 
                    : 'hover:bg-opacity-30'
                }`}
                style={{ 
                  borderColor: dragActive ? '#E98B2A' : '#D9D6D0',
                  backgroundColor: dragActive ? '#F7F3ED' : 'transparent'
                }}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#D9D6D0' }}>
                  <Upload className="h-8 w-8" style={{ color: '#1A2B49' }} />
                </div>
                <h3 className="text-lg font-medium mb-4" style={{ color: '#1A2B49' }}>
                  Drop your specification files here or click to upload
                </h3>
                <p className="mb-6" style={{ color: '#1A2B49' }}>
                  Supports Word documents, PDFs, and text files. Batch upload up to 400 files. Analysis begins automatically.
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
                  className="text-white px-8 py-3 rounded-lg font-medium transition-all hover:opacity-90"
                  style={{ backgroundColor: '#E98B2A' }}
                  disabled={isLoading}
                >
                  {isLoading ? 'Processing...' : 'Select Files'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Processing Status */}
        {processingStatus && (
          <div className="mb-8">
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
          </div>
        )}

        {/* Uploaded Files Results */}
        {uploadedFiles.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl font-medium mb-6" style={{ color: '#1A2B49' }}>Analysis Results</h3>
            <div className="space-y-6">
              {uploadedFiles.map((file) => (
                <Card key={file.id} className="bg-white border" style={{ borderColor: '#D9D6D0' }}>
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
                        className={
                          file.status === 'processed' 
                            ? 'text-white' 
                            : file.status === 'processing' 
                            ? 'text-white' 
                            : 'text-white'
                        }
                        style={{
                          backgroundColor: 
                            file.status === 'processed' 
                              ? '#7C9C95' 
                              : file.status === 'processing' 
                              ? '#E98B2A' 
                              : '#D9D6D0',
                          color: '#FFFFFF'
                        }}
                      >
                        {file.status === 'processing' ? 'Analyzing...' : file.status}
                      </Badge>
                    </div>
                    
                    {file.status === 'processed' && file.analysisResults && (
                      <div className="space-y-6 mt-6 pt-6 border-t" style={{ borderColor: '#D9D6D0' }}>
                        {/* Overall Score */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="text-3xl font-bold" style={{ color: '#E98B2A' }}>
                              {file.analysisResults.overview.overallCompliance}%
                            </div>
                            <div style={{ color: '#7C9C95' }}>Overall Compliance</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold" style={{ color: '#B04A4A' }}>
                              {file.analysisResults.overview.criticalIssues}
                            </div>
                            <div style={{ color: '#7C9C95' }}>Critical Issues</div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex space-x-4 justify-center pt-4">
                          <Button 
                            className="text-white font-medium px-6 py-2 rounded-lg transition-all hover:opacity-90"
                            style={{ backgroundColor: '#E98B2A' }}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download Enhanced Version
                          </Button>
                          <Button 
                            onClick={() => toggleAnalysisExpansion(file.id)}
                            className="font-medium px-6 py-2 rounded-lg transition-all hover:opacity-90 bg-white flex items-center"
                            style={{ 
                              borderColor: '#7C9C95', 
                              color: '#7C9C95',
                              border: '1px solid #7C9C95'
                            }}
                          >
                            {expandedAnalysis === file.id ? (
                              <>
                                <ChevronUp className="h-4 w-4 mr-2" />
                                Hide Full Analysis
                              </>
                            ) : (
                              <>
                                <ChevronDown className="h-4 w-4 mr-2" />
                                View Full Analysis
                              </>
                            )}
                          </Button>
                        </div>

                        {/* Inline Analysis Dropdown */}
                        {expandedAnalysis === file.id && (
                          <div className="mt-6 border-t pt-6" style={{ borderColor: '#D9D6D0' }}>
                            <SpecificationAnalysis 
                              fileName={file.name}
                              analysis={file.analysisResults}
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Architecture Features */}
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="group bg-white border shadow-sm hover:shadow-md transition-all duration-300" style={{ borderColor: '#D9D6D0' }}>
            <CardHeader className="p-8">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:opacity-80 transition-colors" style={{ backgroundColor: '#F7F3ED' }}>
                <FileText className="h-7 w-7" style={{ color: '#E98B2A' }} />
              </div>
              <CardTitle className="text-xl font-medium mb-4" style={{ color: '#1A2B49' }}>Technical Content Comprehension</CardTitle>
              <p className="leading-relaxed" style={{ color: '#1A2B49' }}>
                AI review of products, systems, or practices change.
              </p>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <ul className="space-y-4 text-sm" style={{ color: '#1A2B49' }}>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>Materials & Products discontinued models, or old manufacturer names.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>Methods & Means: Construction techniques no longer in use or superseded.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>Performance Criteria: New testing standards, durability benchmarks, or code requirements.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group bg-white border shadow-sm hover:shadow-md transition-all duration-300" style={{ borderColor: '#D9D6D0' }}>
            <CardHeader className="p-8">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:opacity-80 transition-colors" style={{ backgroundColor: '#7C9C95' }}>
                <Brain className="h-7 w-7" style={{ color: '#F7F3ED' }} />
              </div>
              <CardTitle className="text-xl font-medium mb-4" style={{ color: '#1A2B49' }}>Intelligent Synthesis</CardTitle>
              <p className="leading-relaxed" style={{ color: '#1A2B49' }}>
                Eliminate internal inconsistencies.
              </p>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <ul className="space-y-4 text-sm" style={{ color: '#1A2B49' }}>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>Section Numbers: Follow CSI MasterFormat updates.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>Cross-References: Align terms and scopes between related sections (e.g., waterproofing & roofing).</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>Terminology Consistency: "Installer" vs. "Applicator" vs. "Contractor."</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group bg-white border shadow-sm hover:shadow-md transition-all duration-300" style={{ borderColor: '#D9D6D0' }}>
            <CardHeader className="p-8">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:opacity-80 transition-colors" style={{ backgroundColor: '#1A2B49' }}>
                <Shield className="h-7 w-7" style={{ color: '#F7F3ED' }} />
              </div>
              <CardTitle className="text-xl font-medium mb-4" style={{ color: '#1A2B49' }}>Standard & Code Compliance</CardTitle>
              <p className="leading-relaxed" style={{ color: '#1A2B49' }}>
                Real-time Code * Standard Compliance Analysis & Validation
              </p>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <ul className="space-y-4 text-sm" style={{ color: '#1A2B49' }}>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>Referenced Standards: ASTM, ANSI, UL, NFPA, ASHRAE, etc.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>Building Codes: IBC, IRC, energy codes (e.g., IECC), accessibility codes (ADA).</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>Green Building: LEED, WELL, local sustainability requirements.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Master1;
