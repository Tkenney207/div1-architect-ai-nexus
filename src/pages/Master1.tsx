
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ArrowLeft, Upload, CheckCircle, AlertCircle, Brain, Cog, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Master1 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="rounded-full">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/6eb78a22-dce5-46e7-8899-e05debdec84e.png" 
                  alt="Div1 Logo" 
                  className="h-8 w-auto"
                />
                <div>
                  <h1 className="text-xl font-bold">Master1</h1>
                  <Badge variant="secondary" className="text-xs rounded-full">Specification Synthesis</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 rounded-full">
            📄 Intelligent Document Processing
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Process specifications with 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> AI precision </span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Multi-modal document processing with real-time standards validation, semantic deduplication, and automated compliance checking.
          </p>
        </div>

        {/* Document Upload Interface */}
        <Card className="mb-12 shadow-xl border-0 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
            <CardTitle className="flex items-center text-2xl">
              <Upload className="h-6 w-6 mr-3 text-purple-600" />
              Document Processing Pipeline
            </CardTitle>
            <CardDescription className="text-lg">
              Upload specifications for AI-powered analysis and synthesis
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="border-2 border-dashed border-purple-200 rounded-3xl p-12 text-center hover:border-purple-400 transition-all duration-300 bg-gradient-to-br from-purple-25 to-blue-25">
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Upload className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Upload Specification Documents</h3>
              <p className="text-gray-600 mb-8 text-lg">Support for PDF, DOCX, and image formats with AI-powered extraction</p>
              <Button size="lg" className="mb-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-lg">
                <Upload className="h-5 w-5 mr-3" />
                Choose Files
              </Button>
              <p className="text-sm text-gray-500">Maximum file size: 50MB per document</p>
            </div>
          </CardContent>
        </Card>

        {/* Processing Status */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Cog className="h-6 w-6 mr-3 text-purple-600" />
                Processing Status
              </CardTitle>
              <CardDescription className="text-lg">Real-time document analysis pipeline</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Layout Analysis (LayoutLMv3)</span>
                      <Badge variant="default" className="rounded-full">Complete</Badge>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Table Extraction</span>
                      <Badge variant="default" className="rounded-full">Complete</Badge>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="h-6 w-6 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">CSI Section Mapping</span>
                      <Badge variant="secondary" className="rounded-full">Processing</Badge>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-gray-400" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">Compliance Validation</span>
                      <Badge variant="outline" className="rounded-full">Pending</Badge>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gray-300 h-2 rounded-full w-1/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Brain className="h-6 w-6 mr-3 text-blue-600" />
                Quality Metrics
              </CardTitle>
              <CardDescription className="text-lg">Document processing quality assessment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Text Extraction Quality:</span>
                  <Badge variant="default" className="rounded-full text-lg px-4 py-2">98.5%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Table Structure Recognition:</span>
                  <Badge variant="default" className="rounded-full text-lg px-4 py-2">96.2%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">CSI Classification Confidence:</span>
                  <Badge variant="secondary" className="rounded-full text-lg px-4 py-2">94.7%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Standards Compliance Score:</span>
                  <Badge variant="outline" className="rounded-full text-lg px-4 py-2">Pending</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Architecture Features */}
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <CardHeader>
              <div className="bg-purple-100 rounded-2xl p-3 w-fit mb-4 group-hover:bg-purple-200 transition-colors">
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-xl">Document Understanding</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                LayoutLMv3 for document structure analysis with table extraction capabilities.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Layout-aware parsing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Table structure preservation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>CSI division mapping</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Metadata extraction</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <CardHeader>
              <div className="bg-blue-100 rounded-2xl p-3 w-fit mb-4 group-hover:bg-blue-200 transition-colors">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Intelligent Synthesis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Semantic deduplication and conflict resolution with gap analysis.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Vector similarity matching</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Multi-criteria conflict resolution</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Automated gap identification</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Content harmonization</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <CardHeader>
              <div className="bg-green-100 rounded-2xl p-3 w-fit mb-4 group-hover:bg-green-200 transition-colors">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-xl">Compliance Validation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Real-time validation against ASTM, LEED, ICC, ADA, and OSHA standards.
              </p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Standards rule engine</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Automated compliance checking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>Violation reporting</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
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
