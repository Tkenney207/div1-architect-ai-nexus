
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Brain, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import { Division1Generator } from "@/components/Division1Generator";

const Division1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Header />

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white mb-8">
            Generate Division 1 with 
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> AI precision </span>
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-semibold text-purple-300 mb-6">Charter to Specification. Seamlessly.</h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform project charter data into complete, editable CSI MasterFormat Division 1 specifications with AI-powered mapping and professional formatting.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              <div className="bg-purple-800/30 rounded-lg p-4 border border-purple-700">
                <p className="text-gray-200 text-sm">Automatically maps charter fields to CSI sections</p>
              </div>
              <div className="bg-purple-800/30 rounded-lg p-4 border border-purple-700">
                <p className="text-gray-200 text-sm">Generates 3-part specification format with professional language</p>
              </div>
              <div className="bg-purple-800/30 rounded-lg p-4 border border-purple-700">
                <p className="text-gray-200 text-sm">Side-by-side editing with AI suggestions and tips</p>
              </div>
              <div className="bg-purple-800/30 rounded-lg p-4 border border-purple-700">
                <p className="text-gray-200 text-sm">Export to DOCX, PDF, XML with BIM integration hooks</p>
              </div>
            </div>
          </div>
        </div>

        {/* Division 1 Generator Interface */}
        <Division1Generator />

        {/* CSI Sections Coverage */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Complete Division 1 Coverage</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-purple-800/50 border border-purple-700 hover:border-purple-500/50">
              <CardHeader>
                <div className="bg-purple-600/20 rounded-2xl p-3 w-fit mb-4 group-hover:bg-purple-500/30 transition-colors">
                  <FileText className="h-8 w-8 text-purple-400" />
                </div>
                <CardTitle className="text-xl text-white">Project Foundation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Essential project setup and management specifications.
                </p>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>011000 - Summary of Work</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>013100 - Project Management</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>013200 - Progress Documentation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>013300 - Submittal Procedures</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-purple-800/50 border border-purple-700 hover:border-blue-500/50">
              <CardHeader>
                <div className="bg-blue-600/20 rounded-2xl p-3 w-fit mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <Brain className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-xl text-white">Quality & Controls</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Quality assurance and project control specifications.
                </p>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>014000 - Quality Requirements</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>015000 - Temporary Facilities</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>017000 - Execution & Closeout</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-purple-800/50 border border-purple-700 hover:border-green-500/50">
              <CardHeader>
                <div className="bg-green-600/20 rounded-2xl p-3 w-fit mb-4 group-hover:bg-green-500/30 transition-colors">
                  <CheckCircle className="h-8 w-8 text-green-400" />
                </div>
                <CardTitle className="text-xl text-white">Sustainability & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Environmental and regulatory compliance specifications.
                </p>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>017419 - Waste Management</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>018113 - Sustainable Design</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span>LEED Integration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Division1;
