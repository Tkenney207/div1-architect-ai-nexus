// ARCHIVED: Division1 Page - Complete functionality preserved for future restoration
// Original file: src/pages/Division1.tsx

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Brain, Upload, ArrowRight, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
// ARCHIVED: Division1 component imports - components were moved to archived folder
// import { CharterToDivision1 } from "@/components/division1/CharterToDivision1";
// import { GuidedDivision1 } from "@/components/division1/GuidedDivision1";
// import { Division1Review } from "@/components/division1/Division1Review";

type Division1Module = 'charter' | 'guided' | 'review' | null;

const Division1 = () => {
  const [selectedModule, setSelectedModule] = useState<Division1Module>(null);

  const renderModuleContent = () => {
    switch (selectedModule) {
      case 'charter':
        // ARCHIVED: CharterToDivision1 component functionality
        return <div>Charter to Division1 functionality archived</div>;
      case 'guided':
        // ARCHIVED: GuidedDivision1 component functionality
        return <div>Guided Division1 functionality archived</div>;
      case 'review':
        // ARCHIVED: Division1Review component functionality
        return <div>Division1 Review functionality archived</div>;
      default:
        return renderModuleSelection();
    }
  };

  const renderModuleSelection = () => (
    <>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h2 className="text-6xl font-light mb-8" style={{ color: '#1A2B49' }}>
          Generate Division 1 with 
          <span className="ml-3" style={{ color: '#E98B2A' }}> AI precision </span>
        </h2>
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-semibold mb-6" style={{ color: '#7C9C95' }}>Choose your approach to Division 01 specifications</h3>
          <p className="text-xl leading-relaxed mb-8" style={{ color: '#1A2B49' }}>
            Three powerful ways to create, enhance, and review CSI MasterFormat Division 01 specifications with AI-powered assistance.
          </p>
        </div>
      </div>

      {/* Module Selection Cards */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {/* Module 1: Charter to Division 1 */}
        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl hover:-translate-y-3 bg-white" style={{ borderColor: '#F7F3ED' }}>
          <CardHeader className="pb-8">
            <div className="rounded-2xl p-4 group-hover:opacity-80 transition-colors w-fit mb-6" style={{ backgroundColor: '#E98B2A' }}>
              <FileText className="h-8 w-8" style={{ color: '#F7F3ED' }} />
            </div>
            <CardTitle className="text-2xl mb-3" style={{ color: '#1A2B49' }}>From Project Charter</CardTitle>
            <p className="text-base leading-relaxed" style={{ color: '#1A2B49' }}>
              Generate complete Division 01 specifications directly from your existing project charter data with intelligent AI mapping.
            </p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 mb-10 text-sm" style={{ color: '#1A2B49' }}>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                  <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                </div>
                <span>Select from your charter database</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                  <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                </div>
                <span>AI-powered data mapping</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                  <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                </div>
                <span>Professional CSI formatting</span>
              </li>
            </ul>
            <Button 
              onClick={() => setSelectedModule('charter')}
              className="w-full rounded-full text-white font-semibold py-3 transition-all hover:opacity-90"
              style={{ backgroundColor: '#E98B2A' }}
            >
              Select Charter
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Module 2: Guided Generation */}
        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl hover:-translate-y-3 bg-white" style={{ borderColor: '#F7F3ED' }}>
          <CardHeader className="pb-8">
            <div className="rounded-2xl p-4 group-hover:opacity-80 transition-colors w-fit mb-6" style={{ backgroundColor: '#1A2B49' }}>
              <Brain className="h-8 w-8" style={{ color: '#F7F3ED' }} />
            </div>
            <CardTitle className="text-2xl mb-3" style={{ color: '#1A2B49' }}>Guided Generation</CardTitle>
            <p className="text-base leading-relaxed" style={{ color: '#1A2B49' }}>
              Step-by-step guided process with AI recommendations and input fields for creating Division 01 from scratch.
            </p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 mb-10 text-sm" style={{ color: '#1A2B49' }}>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                  <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                </div>
                <span>Interactive guided workflow</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                  <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                </div>
                <span>AI-powered recommendations</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                  <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                </div>
                <span>Custom section integration</span>
              </li>
            </ul>
            <Button 
              onClick={() => setSelectedModule('guided')}
              className="w-full rounded-full text-white font-semibold py-3 transition-all hover:opacity-90"
              style={{ backgroundColor: '#1A2B49' }}
            >
              Start Guided Process
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Module 3: Review & Enhancement */}
        <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl hover:-translate-y-3 bg-white" style={{ borderColor: '#F7F3ED' }}>
          <CardHeader className="pb-8">
            <div className="rounded-2xl p-4 group-hover:opacity-80 transition-colors w-fit mb-6" style={{ backgroundColor: '#7C9C95' }}>
              <Upload className="h-8 w-8" style={{ color: '#F7F3ED' }} />
            </div>
            <CardTitle className="text-2xl mb-3" style={{ color: '#1A2B49' }}>Review & Enhance</CardTitle>
            <p className="text-base leading-relaxed" style={{ color: '#1A2B49' }}>
              Upload your existing Division 01 specifications for AI-powered review, suggestions, and enhancement recommendations.
            </p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 mb-10 text-sm" style={{ color: '#1A2B49' }}>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                  <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                </div>
                <span>Upload existing specifications</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                  <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                </div>
                <span>AI analysis & suggestions</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                  <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                </div>
                <span>Database-driven improvements</span>
              </li>
            </ul>
            <Button 
              onClick={() => setSelectedModule('review')}
              className="w-full rounded-full text-white font-semibold py-3 transition-all hover:opacity-90"
              style={{ backgroundColor: '#7C9C95' }}
            >
              Upload for Review
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* CSI Sections Coverage */}
      <div>
        <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#1A2B49' }}>Complete Division 1 Coverage</h3>
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-white" style={{ borderColor: '#F7F3ED' }}>
            <CardHeader>
              <div className="rounded-2xl p-3 w-fit mb-4 group-hover:opacity-80 transition-colors" style={{ backgroundColor: '#E98B2A' }}>
                <FileText className="h-8 w-8" style={{ color: '#F7F3ED' }} />
              </div>
              <CardTitle className="text-xl" style={{ color: '#1A2B49' }}>Project Foundation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6" style={{ color: '#1A2B49' }}>
                Essential project setup and management specifications.
              </p>
              <ul className="space-y-3 text-sm" style={{ color: '#1A2B49' }}>
                <li className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>011000 - Summary of Work</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>013100 - Project Management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>013200 - Progress Documentation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>013300 - Submittal Procedures</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-white" style={{ borderColor: '#F7F3ED' }}>
            <CardHeader>
              <div className="rounded-2xl p-3 w-fit mb-4 group-hover:opacity-80 transition-colors" style={{ backgroundColor: '#1A2B49' }}>
                <Brain className="h-8 w-8" style={{ color: '#F7F3ED' }} />
              </div>
              <CardTitle className="text-xl" style={{ color: '#1A2B49' }}>Quality & Controls</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6" style={{ color: '#1A2B49' }}>
                Quality assurance and project control specifications.
              </p>
              <ul className="space-y-3 text-sm" style={{ color: '#1A2B49' }}>
                <li className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>014000 - Quality Requirements</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>015000 - Temporary Facilities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>017000 - Execution Requirements</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>017419 - Waste Management</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-white" style={{ borderColor: '#F7F3ED' }}>
            <CardHeader>
              <div className="rounded-2xl p-3 w-fit mb-4 group-hover:opacity-80 transition-colors" style={{ backgroundColor: '#7C9C95' }}>
                <Upload className="h-8 w-8" style={{ color: '#F7F3ED' }} />
              </div>
              <CardTitle className="text-xl" style={{ color: '#1A2B49' }}>Sustainability & Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6" style={{ color: '#1A2B49' }}>
                Environmental and compliance specifications.
              </p>
              <ul className="space-y-3 text-sm" style={{ color: '#1A2B49' }}>
                <li className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>018113 - Sustainable Design</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>LEED Compliance Integration</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>Code Compliance Tracking</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7C9C95' }}>
                    <CheckCircle className="h-3 w-3" style={{ color: '#F7F3ED' }} />
                  </div>
                  <span>Performance Documentation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D9D6D0' }}>
      <Header />
      <div className="container mx-auto px-6 py-12">
        {renderModuleContent()}
      </div>
    </div>
  );
};

export default Division1;
