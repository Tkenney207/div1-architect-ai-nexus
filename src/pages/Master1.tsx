import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Brain, Shield, CheckCircle, Upload, Download, ChevronDown, ChevronUp } from "lucide-react";
import Header from "@/components/Header";
import { useState, useRef, useEffect } from "react";
import { useSpecificationProcessor } from "@/hooks/useSpecificationProcessor";
import { SpecificationAnalysis } from "@/components/SpecificationAnalysis";
import SpecificationReviewWindow from "@/components/SpecificationReviewWindow";

const Master1 = () => {
  const [dragActive, setDragActive] = useState(false);
  const [expandedAnalysis, setExpandedAnalysis] = useState<string | null>(null);
  const [reviewWindow, setReviewWindow] = useState<{ fileId: string; fileName: string; content: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const analysisRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  const {
    uploadSpecification,
    uploadedFiles,
    processingStatus,
    isLoading
  } = useSpecificationProcessor();

  // Auto-expand analysis when a single file is processed
  useEffect(() => {
    const processedFiles = uploadedFiles.filter(file => file.status === 'processed');
    if (processedFiles.length === 1 && uploadedFiles.length === 1) {
      // Only auto-expand if there's exactly one file total and it's processed
      const latestProcessedFile = processedFiles[0];
      if (expandedAnalysis !== latestProcessedFile.id) {
        setExpandedAnalysis(latestProcessedFile.id);
      }
    }
  }, [uploadedFiles, expandedAnalysis]);

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
    if (expandedAnalysis === fileId) {
      setExpandedAnalysis(null);
    } else {
      setExpandedAnalysis(fileId);
      // Scroll to the top of the analysis section after a brief delay to allow expansion
      setTimeout(() => {
        if (analysisRefs.current[fileId]) {
          analysisRefs.current[fileId]?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 100);
    }
  };

  const openReviewWindow = (fileId: string, fileName: string) => {
    // For now, we'll use mock content. In a real implementation, 
    // this would come from the uploaded file content
    const mockContent = `SECTION 08 33 23 - OVERHEAD COILING DOORS

PART 1 - GENERAL

1.1 SUMMARY
A. Section Includes:
   1. Overhead coiling doors.
   2. Electric door operators.
   3. Accessories.

1.2 SUBMITTALS
A. Product Data: For each type of product indicated.
B. Shop Drawings: For overhead coiling doors.

1.3 QUALITY ASSURANCE
A. Source Limitations: Obtain overhead coiling doors from single source from single manufacturer.
B. Fire-Rated Overhead Coiling Doors: Doors shall be identical to doors tested for fire resistance per IBC 2018, Section 705.8 and labeled by a qualified testing agency.

PART 2 - PRODUCTS

2.1 MANUFACTURERS
A. Manufacturers: Subject to compliance with requirements, provide products by one of the following:
   1. Armstrong Mineral Fiber Ceiling Tiles, Model 1234
   2. Clopay Building Products Company, Inc.
   3. Cornell Iron Works, Inc.

2.2 OVERHEAD COILING DOORS
A. Basis-of-Design Product: Subject to compliance with requirements, provide product indicated or comparable product by one of the following:
   1. Clopay Building Products Company, Inc.; Model B Series.
   2. Cornell Iron Works, Inc.; Model 650.

PART 3 - EXECUTION

3.1 INSTALLATION
A. Install overhead coiling doors according to manufacturer's written instructions.
B. Test Operation: Test doors for proper operation and adjust as necessary.

END OF SECTION`;
    
    setReviewWindow({ fileId, fileName, content: mockContent });
  };

  const closeReviewWindow = () => {
    setReviewWindow(null);
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
                <div 
                  key={file.id} 
                  className="border-4 rounded-xl p-2" 
                  style={{ borderColor: '#1A2B49' }}
                >
                  <Card className="bg-white border" style={{ borderColor: '#D9D6D0' }}>
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
                            <div className="text-center p-4 border-2 rounded-lg" style={{ borderColor: '#E98B2A' }}>
                              <div className="text-3xl font-bold" style={{ color: '#E98B2A' }}>
                                {file.analysisResults.overview.overallCompliance}%
                              </div>
                              <div className="font-medium" style={{ color: '#E98B2A' }}>Overall Compliance</div>
                            </div>
                            <div className="text-center p-4 border-2 rounded-lg" style={{ borderColor: '#B04A4A' }}>
                              <div className="text-3xl font-bold" style={{ color: '#B04A4A' }}>
                                {file.analysisResults.overview.criticalIssues}
                              </div>
                              <div className="font-medium" style={{ color: '#B04A4A' }}>Critical Issues</div>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex space-x-4 justify-center pt-4">
                            <Button 
                              className="text-white font-medium px-6 py-2 rounded-lg transition-all hover:opacity-90"
                              style={{ backgroundColor: '#E98B2A' }}
                              onClick={() => openReviewWindow(file.id, file.name)}
                            >
                              <Download className="h-4 w-4 mr-2" />
                              Open Review Window
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

                          {/* Analysis Dropdown */}
                          {expandedAnalysis === file.id && (
                            <div 
                              ref={(el) => analysisRefs.current[file.id] = el}
                              className="mt-6 border-t pt-6" 
                              style={{ borderColor: '#D9D6D0' }}
                            >
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
                </div>
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

      {/* Review Window */}
      {reviewWindow && (
        <SpecificationReviewWindow
          fileName={reviewWindow.fileName}
          fileContent={reviewWindow.content}
          onClose={closeReviewWindow}
        />
      )}
    </div>
  );
};

export default Master1;
