
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ArrowLeft, Upload, CheckCircle, AlertCircle, Brain, Cog, Shield, Clock, FileCheck, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Master1 = () => {
  const [uploadedFiles, setUploadedFiles] = useState([
    { name: "Structural_Specs_v2.pdf", size: "2.4 MB", status: "processed" },
    { name: "MEP_Requirements.docx", size: "1.8 MB", status: "processing" },
    { name: "Architectural_Plans.pdf", size: "5.2 MB", status: "uploaded" }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-purple-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="rounded-full text-gray-300 hover:text-white">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center space-x-4">
                <img 
                  src="/lovable-uploads/0014a989-3a3c-4d12-94b3-4e2301cc77b1.png" 
                  alt="Div1 Logo" 
                  className="h-8 w-auto"
                />
                <div>
                  <h1 className="text-xl font-bold text-white">Master1</h1>
                  <Badge variant="secondary" className="text-xs bg-purple-600/20 text-purple-300 border-purple-500/30">Specification Synthesis</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-6 py-3 rounded-full border-purple-500/30 bg-purple-600/10 text-purple-300">
            📄 Intelligent Document Processing
          </Badge>
          <h2 className="text-6xl font-bold text-white mb-8">
            Process specifications with 
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> AI precision </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Multi-modal document processing with real-time standards validation, semantic deduplication, and automated compliance checking.
          </p>
        </div>

        {/* Document Upload Interface */}
        <Card className="mb-12 shadow-2xl border-0 overflow-hidden bg-gray-800/50 border border-gray-700">
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
            <div className="border-2 border-dashed border-purple-400/30 rounded-3xl p-12 text-center hover:border-purple-400/60 transition-all duration-300 bg-gradient-to-br from-purple-600/5 to-blue-600/5 mb-8">
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full p-6 w-24 h-24 mx-auto mb-8 flex items-center justify-center">
                <Upload className="h-12 w-12 text-purple-400" />
              </div>
              <h3 className="text-3xl font-semibold text-white mb-6">Upload Specification Documents</h3>
              <p className="text-gray-300 mb-10 text-lg">Support for PDF, DOCX, and image formats with AI-powered extraction</p>
              <Button size="lg" className="mb-6 px-10 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg">
                <Upload className="h-6 w-6 mr-3" />
                Choose Files
              </Button>
              <p className="text-sm text-gray-400">Maximum file size: 50MB per document</p>
            </div>

            {/* Uploaded Files */}
            {uploadedFiles.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-4">Uploaded Documents</h4>
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl border border-gray-600">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-6 w-6 text-purple-400" />
                      <div>
                        <p className="text-white font-medium">{file.name}</p>
                        <p className="text-gray-400 text-sm">{file.size}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={file.status === 'processed' ? 'default' : file.status === 'processing' ? 'secondary' : 'outline'}
                      className={
                        file.status === 'processed' ? 'bg-green-600' :
                        file.status === 'processing' ? 'bg-blue-600' : 'border-gray-500 text-gray-300'
                      }
                    >
                      {file.status === 'processed' ? 'Processed' : 
                       file.status === 'processing' ? 'Processing' : 'Uploaded'}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Processing Status */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-xl border-0 bg-gray-800/50 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl flex items-center text-white">
                <Cog className="h-6 w-6 mr-3 text-purple-400" />
                Processing Status
              </CardTitle>
              <CardDescription className="text-lg text-gray-300">Real-time document analysis pipeline</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-white">Layout Analysis (LayoutLMv3)</span>
                      <Badge variant="default" className="bg-green-600">Complete</Badge>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-white">Table Extraction</span>
                      <Badge variant="default" className="bg-green-600">Complete</Badge>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="h-6 w-6 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-white">CSI Section Mapping</span>
                      <Badge variant="secondary" className="bg-blue-600">Processing</Badge>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-gray-400" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-white">Compliance Validation</span>
                      <Badge variant="outline" className="border-gray-500 text-gray-400">Pending</Badge>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gray-500 h-2 rounded-full w-1/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0 bg-gray-800/50 border border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl flex items-center text-white">
                <Brain className="h-6 w-6 mr-3 text-blue-400" />
                Quality Metrics
              </CardTitle>
              <CardDescription className="text-lg text-gray-300">Document processing quality assessment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-300">Text Extraction Quality:</span>
                  <Badge variant="default" className="bg-green-600 text-lg px-4 py-2">98.5%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-300">Table Structure Recognition:</span>
                  <Badge variant="default" className="bg-green-600 text-lg px-4 py-2">96.2%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-300">CSI Classification Confidence:</span>
                  <Badge variant="secondary" className="bg-blue-600 text-lg px-4 py-2">94.7%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-300">Standards Compliance Score:</span>
                  <Badge variant="outline" className="border-gray-500 text-gray-400 text-lg px-4 py-2">Pending</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-300">Semantic Similarity:</span>
                  <Badge variant="default" className="bg-purple-600 text-lg px-4 py-2">92.1%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Processed Specifications Results */}
        <Card className="shadow-2xl border-0 bg-gray-800/50 border border-gray-700 mb-8">
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
          </CardContent>
        </Card>

        {/* Architecture Features */}
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50">
            <CardHeader>
              <div className="bg-purple-600/20 rounded-2xl p-3 w-fit mb-4 group-hover:bg-purple-500/30 transition-colors">
                <FileText className="h-8 w-8 text-purple-400" />
              </div>
              <CardTitle className="text-xl text-white">Document Understanding</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                LayoutLMv3 for document structure analysis with table extraction capabilities.
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Layout-aware parsing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Table structure preservation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>CSI division mapping</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Metadata extraction</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50">
            <CardHeader>
              <div className="bg-blue-600/20 rounded-2xl p-3 w-fit mb-4 group-hover:bg-blue-500/30 transition-colors">
                <Brain className="h-8 w-8 text-blue-400" />
              </div>
              <CardTitle className="text-xl text-white">Intelligent Synthesis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Semantic deduplication and conflict resolution with gap analysis.
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Vector similarity matching</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Multi-criteria conflict resolution</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Automated gap identification</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Content harmonization</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-gray-800/50 border border-gray-700 hover:border-green-500/50">
            <CardHeader>
              <div className="bg-green-600/20 rounded-2xl p-3 w-fit mb-4 group-hover:bg-green-500/30 transition-colors">
                <Shield className="h-8 w-8 text-green-400" />
              </div>
              <CardTitle className="text-xl text-white">Compliance Validation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Real-time validation against ASTM, LEED, ICC, ADA, and OSHA standards.
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Standards rule engine</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Automated compliance checking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Violation reporting</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Version tracking</span>
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
