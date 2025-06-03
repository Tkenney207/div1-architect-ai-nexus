
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ArrowLeft, Upload, CheckCircle, AlertTriangle, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Master1 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <FileText className="h-6 w-6 text-purple-600" />
                <h1 className="text-xl font-bold">Master1</h1>
                <Badge variant="secondary">Intelligent Specification Synthesis</Badge>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Specification Synthesis Platform
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Multi-modal document processing with real-time standards validation, 
            semantic deduplication, and automated compliance checking.
          </p>
        </div>

        {/* Document Upload Interface */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Upload className="h-5 w-5 mr-2" />
              Document Processing Pipeline
            </CardTitle>
            <CardDescription>
              Upload specifications for AI-powered analysis and synthesis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Upload Specification Documents</h3>
              <p className="text-gray-600 mb-4">
                Supports PDF, DOCX, and structured data formats. 
                Our AI processes layout, tables, and CSI divisions automatically.
              </p>
              <div className="flex gap-4 justify-center">
                <Button>
                  <Upload className="h-4 w-4 mr-2" />
                  Choose Files
                </Button>
                <Button variant="outline">
                  Import from URL
                </Button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Multi-modal processing</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>CSI format recognition</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span>Real-time validation</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Processing Capabilities */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <FileText className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Document Understanding</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                LayoutLMv3 for document structure analysis with table extraction capabilities.
              </p>
              <ul className="text-sm space-y-1 text-gray-500">
                <li>• Layout-aware parsing</li>
                <li>• Table structure preservation</li>
                <li>• CSI division mapping</li>
                <li>• Metadata extraction</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Intelligent Synthesis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Semantic deduplication and conflict resolution with gap analysis.
              </p>
              <ul className="text-sm space-y-1 text-gray-500">
                <li>• Vector similarity matching</li>
                <li>• Multi-criteria conflict resolution</li>
                <li>• Automated gap identification</li>
                <li>• Content harmonization</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>Compliance Validation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Real-time validation against ASTM, LEED, ICC, ADA, and OSHA standards.
              </p>
              <ul className="text-sm space-y-1 text-gray-500">
                <li>• Standards rule engine</li>
                <li>• Automated compliance checking</li>
                <li>• Violation reporting</li>
                <li>• Version tracking</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Recent Processing Results */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Recent Processing Results</CardTitle>
            <CardDescription>View and manage processed specification documents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  name: "Structural Steel Specifications",
                  status: "Completed",
                  compliance: 96,
                  sections: 24,
                  issues: 2
                },
                {
                  name: "Concrete and Masonry Division",
                  status: "Processing",
                  compliance: null,
                  sections: 18,
                  issues: null
                },
                {
                  name: "HVAC System Requirements",
                  status: "Completed", 
                  compliance: 88,
                  sections: 31,
                  issues: 5
                }
              ].map((doc, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <FileText className="h-8 w-8 text-purple-600" />
                    <div>
                      <h4 className="font-semibold">{doc.name}</h4>
                      <p className="text-sm text-gray-600">
                        {doc.sections} sections
                        {doc.issues !== null && ` • ${doc.issues} issues found`}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <Badge variant={doc.status === "Completed" ? "default" : "secondary"}>
                        {doc.status}
                      </Badge>
                      {doc.compliance !== null && (
                        <p className="text-sm mt-1">
                          Compliance: 
                          <span className={`ml-1 font-medium ${doc.compliance > 90 ? 'text-green-600' : 'text-yellow-600'}`}>
                            {doc.compliance}%
                          </span>
                        </p>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {doc.issues && doc.issues > 0 && (
                        <AlertTriangle className="h-4 w-4 text-yellow-600" />
                      )}
                      <Button size="sm" variant="outline">
                        {doc.status === "Completed" ? "View Report" : "Monitor"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Standards Compliance */}
        <Card>
          <CardHeader>
            <CardTitle>Standards Compliance Framework</CardTitle>
            <CardDescription>Real-time validation against industry standards</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { name: "ASTM", status: "Active", rules: 1240 },
                { name: "LEED", status: "Active", rules: 680 },
                { name: "ICC", status: "Active", rules: 950 },
                { name: "ADA", status: "Active", rules: 420 },
                { name: "OSHA", status: "Active", rules: 780 }
              ].map((standard, index) => (
                <div key={index} className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold text-lg">{standard.name}</h4>
                  <Badge variant="outline" className="mb-2">{standard.status}</Badge>
                  <p className="text-sm text-gray-600">{standard.rules} rules</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Master1;
