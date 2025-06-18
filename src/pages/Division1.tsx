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
      <div className="text-center mb-20">
        <div className="bg-slate-800/5 backdrop-blur-sm rounded-3xl p-12 max-w-6xl mx-auto mb-16">
          <h2 className="text-7xl font-light text-gray-900 mb-12 tracking-tight">
            Generate Division 1 with 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-medium"> AI precision </span>
          </h2>
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-light text-purple-700 mb-8">Choose your approach to Division 01 specifications</h3>
            <p className="text-2xl text-gray-700 mb-12 leading-relaxed font-light">
              Three powerful ways to create, enhance, and review CSI MasterFormat Division 01 specifications with AI-powered assistance.
            </p>
          </div>
        </div>
      </div>

      {/* Module Selection Cards */}
      <div className="grid lg:grid-cols-3 gap-12 mb-20">
        {/* Module 1: Charter to Division 1 */}
        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-4 bg-white/95 backdrop-blur-sm border border-purple-100 hover:border-purple-200">
          <CardHeader className="pb-10 pt-12">
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl p-6 group-hover:from-purple-200 group-hover:to-purple-100 transition-all w-fit mb-8 shadow-md">
              <FileText className="h-10 w-10 text-purple-500" />
            </div>
            <CardTitle className="text-3xl mb-4 text-gray-900 font-light">From Project Charter</CardTitle>
            <p className="text-lg leading-relaxed text-gray-600 font-light">
              Generate complete Division 01 specifications directly from your existing project charter data with intelligent AI mapping.
            </p>
          </CardHeader>
          <CardContent className="px-8 pb-10">
            <ul className="space-y-5 mb-12 text-base text-gray-600">
              <li className="flex items-center space-x-4">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>Select from your charter database</span>
              </li>
              <li className="flex items-center space-x-4">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>AI-powered data mapping</span>
              </li>
              <li className="flex items-center space-x-4">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>Professional CSI formatting</span>
              </li>
            </ul>
            <Button 
              onClick={() => setSelectedModule('charter')}
              className="w-full rounded-full bg-gradient-to-r from-purple-500 to-purple-400 hover:from-purple-600 hover:to-purple-500 transition-all border-0 text-white font-medium py-4 text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              Select Charter
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>

        {/* Module 2: Guided Generation */}
        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-4 bg-white/95 backdrop-blur-sm border border-blue-100 hover:border-blue-200">
          <CardHeader className="pb-10 pt-12">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-6 group-hover:from-blue-200 group-hover:to-blue-100 transition-all w-fit mb-8 shadow-md">
              <Brain className="h-10 w-10 text-blue-500" />
            </div>
            <CardTitle className="text-3xl mb-4 text-gray-900 font-light">Guided Generation</CardTitle>
            <p className="text-lg leading-relaxed text-gray-600 font-light">
              Step-by-step guided process with AI recommendations and input fields for creating Division 01 from scratch.
            </p>
          </CardHeader>
          <CardContent className="px-8 pb-10">
            <ul className="space-y-5 mb-12 text-base text-gray-600">
              <li className="flex items-center space-x-4">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>Interactive guided workflow</span>
              </li>
              <li className="flex items-center space-x-4">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>AI-powered recommendations</span>
              </li>
              <li className="flex items-center space-x-4">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>Custom section integration</span>
              </li>
            </ul>
            <Button 
              onClick={() => setSelectedModule('guided')}
              className="w-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 transition-all border-0 text-white font-medium py-4 text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              Start Guided Process
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>

        {/* Module 3: Review & Enhancement */}
        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-4 bg-white/95 backdrop-blur-sm border border-green-100 hover:border-green-200">
          <CardHeader className="pb-10 pt-12">
            <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-3xl p-6 group-hover:from-green-200 group-hover:to-green-100 transition-all w-fit mb-8 shadow-md">
              <Upload className="h-10 w-10 text-green-500" />
            </div>
            <CardTitle className="text-3xl mb-4 text-gray-900 font-light">Review & Enhance</CardTitle>
            <p className="text-lg leading-relaxed text-gray-600 font-light">
              Upload your existing Division 01 specifications for AI-powered review, suggestions, and enhancement recommendations.
            </p>
          </CardHeader>
          <CardContent className="px-8 pb-10">
            <ul className="space-y-5 mb-12 text-base text-gray-600">
              <li className="flex items-center space-x-4">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>Upload existing specifications</span>
              </li>
              <li className="flex items-center space-x-4">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>AI analysis & suggestions</span>
              </li>
              <li className="flex items-center space-x-4">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span>Database-driven improvements</span>
              </li>
            </ul>
            <Button 
              onClick={() => setSelectedModule('review')}
              className="w-full rounded-full bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 transition-all border-0 text-white font-medium py-4 text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              Upload for Review
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* CSI Sections Coverage */}
      <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-16 shadow-xl border border-slate-200">
        <div className="bg-slate-800/5 backdrop-blur-sm rounded-3xl p-12 mb-12">
          <h3 className="text-4xl font-light text-gray-900 mb-4 text-center tracking-tight">Complete Division 1 Coverage</h3>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/95 backdrop-blur-sm border border-purple-100 hover:border-purple-200">
            <CardHeader className="pt-8">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-4 w-fit mb-6 group-hover:from-purple-200 group-hover:to-purple-100 transition-all shadow-sm">
                <FileText className="h-8 w-8 text-purple-500" />
              </div>
              <CardTitle className="text-2xl text-gray-900 font-light">Project Foundation</CardTitle>
            </CardHeader>
            <CardContent className="pb-8">
              <p className="text-gray-600 mb-8 text-lg font-light">
                Essential project setup and management specifications.
              </p>
              <ul className="space-y-4 text-base text-gray-600">
                <li className="flex items-center space-x-4">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>011000 - Summary of Work</span>
                </li>
                <li className="flex items-center space-x-4">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>013100 - Project Management</span>
                </li>
                <li className="flex items-center space-x-4">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>013200 - Progress Documentation</span>
                </li>
                <li className="flex items-center space-x-4">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>013300 - Submittal Procedures</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/95 backdrop-blur-sm border border-blue-100 hover:border-blue-200">
            <CardHeader className="pt-8">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-4 w-fit mb-6 group-hover:from-blue-200 group-hover:to-blue-100 transition-all shadow-sm">
                <Brain className="h-8 w-8 text-blue-500" />
              </div>
              <CardTitle className="text-2xl text-gray-900 font-light">Quality & Controls</CardTitle>
            </CardHeader>
            <CardContent className="pb-8">
              <p className="text-gray-600 mb-8 text-lg font-light">
                Quality assurance and project control specifications.
              </p>
              <ul className="space-y-4 text-base text-gray-600">
                <li className="flex items-center space-x-4">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>014000 - Quality Requirements</span>
                </li>
                <li className="flex items-center space-x-4">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>015000 - Temporary Facilities</span>
                </li>
                <li className="flex items-center space-x-4">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>017000 - Execution & Closeout</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/95 backdrop-blur-sm border border-green-100 hover:border-green-200">
            <CardHeader className="pt-8">
              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-4 w-fit mb-6 group-hover:from-green-200 group-hover:to-green-100 transition-all shadow-sm">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <CardTitle className="text-2xl text-gray-900 font-light">Sustainability & Compliance</CardTitle>
            </CardHeader>
            <CardContent className="pb-8">
              <p className="text-gray-600 mb-8 text-lg font-light">
                Environmental and regulatory compliance specifications.
              </p>
              <ul className="space-y-4 text-base text-gray-600">
                <li className="flex items-center space-x-4">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>017419 - Waste Management</span>
                </li>
                <li className="flex items-center space-x-4">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>018113 - Sustainable Design</span>
                </li>
                <li className="flex items-center space-x-4">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 text-gray-900">
      <Header />
      <div className="container mx-auto px-6 py-16">
        {renderModuleContent()}
      </div>
    </div>
  );
};

export default Division1;
