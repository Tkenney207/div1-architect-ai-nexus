
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, Zap, CheckCircle, Layers, Users } from "lucide-react";
import Header from "@/components/Header";
import { CSISpecificationGenerator } from "@/components/CSISpecificationGenerator";

const Master1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 text-white">
      <Header />

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white mb-8">
            Generate complete
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> CSI specifications </span>
          </h2>
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-semibold text-blue-300 mb-6">Transform charter data into Division 1 specs.</h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              AI-powered specification generation that converts Engage project charter data into complete, editable CSI MasterFormat Division 1 specifications.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                <p className="text-gray-200 text-sm">Converts charter data to CSI MasterFormat specifications</p>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                <p className="text-gray-200 text-sm">Generates all Division 1 sections with proper formatting</p>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                <p className="text-gray-200 text-sm">Maintains traceability to source charter data</p>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                <p className="text-gray-200 text-sm">Exports to DOCX, PDF, and CSI XML formats</p>
              </div>
            </div>
          </div>
        </div>

        {/* CSI Specification Generator */}
        <CSISpecificationGenerator />

        {/* Features */}
        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50">
            <CardHeader>
              <div className="bg-blue-600/20 rounded-2xl p-3 w-fit mb-4 group-hover:bg-blue-500/30 transition-colors">
                <FileText className="h-8 w-8 text-blue-400" />
              </div>
              <CardTitle className="text-xl text-white">CSI MasterFormat Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Generates specifications following CSI MasterFormat standards with proper 3-part format.
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Division 1 section coverage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>3-part specification format</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Proper section numbering</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Industry-standard language</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-gray-800/50 border border-gray-700 hover:border-purple-500/50">
            <CardHeader>
              <div className="bg-purple-600/20 rounded-2xl p-3 w-fit mb-4 group-hover:bg-purple-500/30 transition-colors">
                <Layers className="h-8 w-8 text-purple-400" />
              </div>
              <CardTitle className="text-xl text-white">Charter Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Seamlessly maps project charter data to appropriate specification sections.
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Automatic data mapping</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Source traceability</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Missing data identification</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>Content validation</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-gray-800/50 border border-gray-700 hover:border-green-500/50">
            <CardHeader>
              <div className="bg-green-600/20 rounded-2xl p-3 w-fit mb-4 group-hover:bg-green-500/30 transition-colors">
                <Users className="h-8 w-8 text-green-400" />
              </div>
              <CardTitle className="text-xl text-white">Export & Collaboration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6">
                Export specifications in multiple formats for team collaboration and project delivery.
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>DOCX export</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>PDF generation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>CSI XML format</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <span>BIM platform integration</span>
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
