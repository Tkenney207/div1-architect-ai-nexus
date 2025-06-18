
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
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-medium mb-8">
          <Brain className="h-4 w-4 mr-2" />
          AI-Powered Division 01 Generation
        </div>
        <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-blue-900 bg-clip-text text-transparent mb-8">
          Generate Division 1 with AI Precision
        </h2>
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Three powerful ways to create, enhance, and review CSI MasterFormat Division 01 specifications with AI-powered assistance.
          </p>
        </div>
      </div>

      {/* Module Selection Cards */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {/* Module 1: Charter to Division 1 */}
        <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white">
          <CardHeader className="pb-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-4 group-hover:shadow-lg transition-all duration-300 w-fit mb-6">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl mb-3 text-slate-900">From Project Charter</CardTitle>
            <p className="text-base leading-relaxed text-slate-600">
              Generate complete Division 01 specifications directly from your existing project charter data with intelligent AI mapping.
            </p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 mb-10 text-sm text-slate-600">
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>Select from your charter database</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>AI-powered data mapping</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>Professional CSI formatting</span>
              </li>
            </ul>
            <Button 
              onClick={() => setSelectedModule('charter')}
              className="w-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3"
            >
              Select Charter
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Module 2: Guided Generation */}
        <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-white">
          <CardHeader className="pb-8">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 group-hover:shadow-lg transition-all duration-300 w-fit mb-6">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl mb-3 text-slate-900">Guided Generation</CardTitle>
            <p className="text-base leading-relaxed text-slate-600">
              Step-by-step guided process with AI recommendations and input fields for creating Division 01 from scratch.
            </p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 mb-10 text-sm text-slate-600">
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>Interactive guided workflow</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>AI-powered recommendations</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>Custom section integration</span>
              </li>
            </ul>
            <Button 
              onClick={() => setSelectedModule('guided')}
              className="w-full rounded-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium py-3"
            >
              Start Guided Process
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Module 3: Review & Enhancement */}
        <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-green-50 to-white">
          <CardHeader className="pb-8">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-4 group-hover:shadow-lg transition-all duration-300 w-fit mb-6">
              <Upload className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl mb-3 text-slate-900">Review & Enhance</CardTitle>
            <p className="text-base leading-relaxed text-slate-600">
              Upload your existing Division 01 specifications for AI-powered review, suggestions, and enhancement recommendations.
            </p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 mb-10 text-sm text-slate-600">
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>Upload existing specifications</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>AI analysis & suggestions</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span>Database-driven improvements</span>
              </li>
            </ul>
            <Button 
              onClick={() => setSelectedModule('review')}
              className="w-full rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-3"
            >
              Upload for Review
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* CSI Sections Coverage */}
      <div>
        <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Complete Division 1 Coverage</h3>
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
            <CardHeader>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-3 w-fit mb-4 group-hover:shadow-lg transition-all duration-300">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl text-slate-900">Project Foundation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-6">
                Essential project setup and management specifications.
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>011000 - Summary of Work</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>013100 - Project Management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>013200 - Progress Documentation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>013300 - Submittal Procedures</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
            <CardHeader>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-3 w-fit mb-4 group-hover:shadow-lg transition-all duration-300">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl text-slate-900">Quality & Controls</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-6">
                Quality assurance and project control specifications.
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>014000 - Quality Requirements</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>015000 - Temporary Facilities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>017000 - Execution & Closeout</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
            <CardHeader>
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-3 w-fit mb-4 group-hover:shadow-lg transition-all duration-300">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl text-slate-900">Sustainability & Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-6">
                Environmental and regulatory compliance specifications.
              </p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>017419 - Waste Management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>018113 - Sustainable Design</span>
                </li>
                <li className="flex items-center space-x-3">
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      <div className="container mx-auto px-6 py-12">
        {renderModuleContent()}
      </div>
    </div>
  );
};

export default Division1;
