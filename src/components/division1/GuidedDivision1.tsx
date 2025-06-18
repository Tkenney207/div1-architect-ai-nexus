
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight, Plus, Lightbulb, CheckCircle } from "lucide-react";

interface GuidedDivision1Props {
  onBack: () => void;
}

interface SectionData {
  number: string;
  title: string;
  content: string;
  isComplete: boolean;
  recommendations: string[];
}

const defaultSections: SectionData[] = [
  {
    number: '011000',
    title: 'Summary of Work',
    content: '',
    isComplete: false,
    recommendations: [
      'Include project scope and contract type',
      'Define work boundaries and exclusions',
      'Reference related contract documents'
    ]
  },
  {
    number: '013100',
    title: 'Project Management and Coordination',
    content: '',
    isComplete: false,
    recommendations: [
      'Define project management structure',
      'Specify coordination responsibilities',
      'Include meeting and reporting requirements'
    ]
  },
  {
    number: '013200',
    title: 'Construction Progress Documentation',
    content: '',
    isComplete: false,
    recommendations: [
      'Detail progress reporting requirements',
      'Specify photo documentation standards',
      'Include schedule update procedures'
    ]
  }
];

export const GuidedDivision1: React.FC<GuidedDivision1Props> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [sections, setSections] = useState<SectionData[]>(defaultSections);
  const [projectInfo, setProjectInfo] = useState({
    name: '',
    type: '',
    description: ''
  });

  const updateSectionContent = (index: number, content: string) => {
    const updatedSections = [...sections];
    updatedSections[index].content = content;
    updatedSections[index].isComplete = content.trim().length > 50;
    setSections(updatedSections);
  };

  const addCustomSection = () => {
    const newSection: SectionData = {
      number: `01${(sections.length + 1) * 100}0`,
      title: 'Custom Section',
      content: '',
      isComplete: false,
      recommendations: ['Define section content and requirements']
    };
    setSections([...sections, newSection]);
  };

  const generateRecommendation = (sectionIndex: number) => {
    // Simulate AI recommendation
    const recommendations = [
      `For ${sections[sectionIndex].title}, consider including specific requirements for ${projectInfo.type} projects.`,
      `Based on the project description, you may want to emphasize quality control measures.`,
      `This section should align with the project scope defined in ${projectInfo.name}.`
    ];
    
    const randomRec = recommendations[Math.floor(Math.random() * recommendations.length)];
    alert(`AI Recommendation: ${randomRec}`);
  };

  const completedSections = sections.filter(s => s.isComplete).length;
  const progress = Math.round((completedSections / sections.length) * 100);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-blue-300 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Modules
          </Button>
          <div>
            <h2 className="text-4xl font-bold text-white">Guided Division 01 Creation</h2>
            <p className="text-xl text-blue-300">Step-by-step specification building</p>
          </div>
        </div>
        <Badge className="bg-blue-600 text-lg px-4 py-2">
          {progress}% Complete
        </Badge>
      </div>

      {/* Progress Bar */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="pt-6">
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            {completedSections} of {sections.length} sections complete
          </p>
        </CardContent>
      </Card>

      {/* Project Information */}
      {currentStep === 0 && (
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Project Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Project Name
              </label>
              <Input
                value={projectInfo.name}
                onChange={(e) => setProjectInfo({...projectInfo, name: e.target.value})}
                placeholder="Enter project name..."
                className="bg-slate-700/50 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Project Type
              </label>
              <Input
                value={projectInfo.type}
                onChange={(e) => setProjectInfo({...projectInfo, type: e.target.value})}
                placeholder="e.g., Commercial, Healthcare, Industrial..."
                className="bg-slate-700/50 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Project Description
              </label>
              <Textarea
                value={projectInfo.description}
                onChange={(e) => setProjectInfo({...projectInfo, description: e.target.value})}
                placeholder="Brief description of the project scope and objectives..."
                className="bg-slate-700/50 border-slate-600 text-white min-h-24"
              />
            </div>
            <Button
              onClick={() => setCurrentStep(1)}
              disabled={!projectInfo.name || !projectInfo.type}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Continue to Sections
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Section Building */}
      {currentStep === 1 && (
        <div className="space-y-6">
          {/* Section List */}
          <div className="grid gap-4">
            {sections.map((section, index) => (
              <Card 
                key={section.number}
                className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${section.isComplete ? 'bg-green-500' : 'bg-gray-500'}`} />
                      <CardTitle className="text-white">
                        {section.number} - {section.title}
                      </CardTitle>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => generateRecommendation(index)}
                      className="text-yellow-400 hover:text-yellow-300"
                    >
                      <Lightbulb className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* AI Recommendations */}
                  <div className="bg-blue-900/30 rounded-lg p-3">
                    <p className="text-sm font-medium text-blue-300 mb-2">AI Recommendations:</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {section.recommendations.map((rec, recIndex) => (
                        <li key={recIndex} className="flex items-start space-x-2">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Section Content
                    </label>
                    <Textarea
                      value={section.content}
                      onChange={(e) => updateSectionContent(index, e.target.value)}
                      placeholder={`Enter content for ${section.title}...`}
                      className="bg-slate-700/50 border-slate-600 text-white min-h-32"
                    />
                    <p className="text-xs text-gray-400 mt-1">
                      {section.content.length} characters (minimum 50 for completion)
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add Custom Section */}
          <Card className="bg-slate-800/50 border-slate-700 border-dashed">
            <CardContent className="pt-6 text-center">
              <Button
                onClick={addCustomSection}
                variant="ghost"
                className="text-blue-400 hover:text-blue-300"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Custom Section
              </Button>
            </CardContent>
          </Card>

          {/* Generate Button */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="pt-6 text-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 px-8"
                disabled={completedSections === 0}
              >
                Generate Division 01 Specification
                <CheckCircle className="h-5 w-5 ml-2" />
              </Button>
              <p className="text-sm text-gray-400 mt-2">
                Complete at least one section to generate the specification
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
