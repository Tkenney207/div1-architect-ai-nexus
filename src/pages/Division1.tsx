
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Brain, Upload, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import { CharterToDivision1 } from "@/components/division1/CharterToDivision1";
import { GuidedDivision1 } from "@/components/division1/GuidedDivision1";
import { Division1Review } from "@/components/division1/Division1Review";

type Division1Module = 'charter' | 'guided' | 'review' | null;

const Division1 = () => {
  const [selectedModule, setSelectedModule] = useState<Division1Module>(null);

  const renderModuleContent = () => {
    switch (selectedModule) {
      case 'charter':
        return <CharterToDivision1 onBack={() => setSelectedModule(null)} />;
      case 'guided':
        return <GuidedDivision1 onBack={() => setSelectedModule(null)} />;
      case 'review':
        return <Division1Review onBack={() => setSelectedModule(null)} />;
      default:
        return renderModuleSelection();
    }
  };

  const renderModuleSelection = () => (
    <>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h2 className="text-6xl font-bold text-white mb-8">
          Generate Division 1 with 
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> AI precision </span>
        </h2>
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-semibold text-purple-300 mb-6">Choose your approach to Division 01 specifications</h3>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Three powerful ways to create, enhance, and review CSI MasterFormat Division 01 specifications with AI-powered assistance.
          </p>
        </div>
      </div>

      {/* Module Selection Cards */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {/* Module 1: Charter to Division 1 */}
        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl hover:-translate-y-3 bg-gradient-to-br from-purple-900/50 to-purple-800/50 border border-purple-700 hover:border-purple-500/50">
          <CardHeader className="pb-8">
            <div className="bg-purple-600/20 rounded-2xl p-4 group-hover:bg-purple-500/30 transition-colors w-fit mb-6">
              <FileText className="h-8 w-8 text-purple-400" />
            </div>
            <CardTitle className="text-2xl mb-3 text-white">From Project Charter</CardTitle>
            <p className="text-base leading-relaxed text-gray-300">
              Generate complete Division 01 specifications directly from your existing project charter data with intelligent AI mapping.
            </p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 mb-10 text-sm text-gray-400">
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span>Select from your charter database</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span>AI-powered data mapping</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span>Professional CSI formatting</span>
              </li>
            </ul>
            <Button 
              onClick={() => setSelectedModule('charter')}
              className="w-full rounded-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 transition-all border-0 text-white font-semibold py-3"
            >
              Select Charter
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Module 2: Guided Generation */}
        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl hover:-translate-y-3 bg-gradient-to-br from-blue-900/50 to-blue-800/50 border border-blue-700 hover:border-blue-500/50">
          <CardHeader className="pb-8">
            <div className="bg-blue-600/20 rounded-2xl p-4 group-hover:bg-blue-500/30 transition-colors w-fit mb-6">
              <Brain className="h-8 w-8 text-blue-400" />
            </div>
            <CardTitle className="text-2xl mb-3 text-white">Guided Generation</CardTitle>
            <p className="text-base leading-relaxed text-gray-300">
              Step-by-step guided process with AI recommendations and input fields for creating Division 01 from scratch.
            </p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 mb-10 text-sm text-gray-400">
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span>Interactive guided workflow</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span>AI-powered recommendations</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span>Custom section integration</span>
              </li>
            </ul>
            <Button 
              onClick={() => setSelectedModule('guided')}
              className="w-full rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all border-0 text-white font-semibold py-3"
            >
              Start Guided Process
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Module 3: Review & Enhancement */}
        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl hover:-translate-y-3 bg-gradient-to-br from-green-900/50 to-green-800/50 border border-green-700 hover:border-green-500/50">
          <CardHeader className="pb-8">
            <div className="bg-green-600/20 rounded-2xl p-4 group-hover:bg-green-500/30 transition-colors w-fit mb-6">
              <Upload className="h-8 w-8 text-green-400" />
            </div>
            <CardTitle className="text-2xl mb-3 text-white">Review & Enhance</CardTitle>
            <p className="text-base leading-relaxed text-gray-300">
              Upload your existing Division 01 specifications for AI-powered review, suggestions, and enhancement recommendations.
            </p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 mb-10 text-sm text-gray-400">
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span>Upload existing specifications</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span>AI analysis & suggestions</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span>Database-driven improvements</span>
              </li>
            </ul>
            <Button 
              onClick={() => setSelectedModule('review')}
              className="w-full rounded-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 transition-all border-0 text-white font-semibold py-3"
            >
              Upload for Review
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* CSI Sections Coverage */}
      <div>
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
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Header />
      <div className="container mx-auto px-6 py-12">
        {renderModuleContent()}
      </div>
    </div>
  );
};

export default Division1;
