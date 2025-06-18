
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  FileText, 
  Download, 
  Edit3, 
  AlertCircle, 
  CheckCircle, 
  Lightbulb,
  ArrowRight,
  Copy,
  Share2
} from "lucide-react";
import { useDivision1Generator } from "@/hooks/useDivision1Generator";
import { CharterData, CSISection, AITip } from "@/types/csi";

interface Division1GeneratorProps {
  charterData?: CharterData;
}

export const Division1Generator: React.FC<Division1GeneratorProps> = ({ charterData }) => {
  const {
    generateDivision1,
    division1Output,
    aiTips,
    editableContent,
    updateArticleContent,
    exportSpecification,
    isGenerating
  } = useDivision1Generator();

  const [selectedSection, setSelectedSection] = useState<string>('011000');
  const [editingArticle, setEditingArticle] = useState<string | null>(null);

  // Sample charter data if none provided
  const sampleCharterData: CharterData = {
    projectName: "Downtown Office Complex",
    projectType: "Commercial",
    description: "Construction of a 12-story mixed-use office building with ground floor retail",
    objectives: [
      "Achieve LEED Gold certification",
      "Complete construction within 18 months",
      "Maintain high quality standards throughout construction"
    ],
    scope: "Complete building construction including sitework, structure, and interior finishes",
    roles: [
      { role: "Owner", responsibility: "Project funding and final approvals" },
      { role: "General Contractor", responsibility: "Overall construction management" },
      { role: "Architect", responsibility: "Design coordination and construction administration" }
    ],
    milestones: [
      { milestone: "Foundation Completion", date: "2024-09-15" },
      { milestone: "Structural Topping Out", date: "2024-12-01" },
      { milestone: "Building Envelope Completion", date: "2025-02-15" }
    ],
    sustainabilityGoals: [
      "LEED Gold certification",
      "30% reduction in energy consumption",
      "Use of recycled materials where possible"
    ],
    qualityRequirements: [
      "All work to meet or exceed industry standards",
      "Third-party testing and inspections",
      "Comprehensive quality control program"
    ],
    submittalProcedures: [
      "Electronic submittals through project portal",
      "30-day review cycle for standard submittals",
      "Expedited review for critical path items"
    ],
    wasteManagement: [
      "Achieve 75% waste diversion rate",
      "Separate collection for recyclable materials",
      "On-site waste tracking and reporting"
    ]
  };

  const handleGenerate = () => {
    const dataToUse = charterData || sampleCharterData;
    generateDivision1(dataToUse);
  };

  const getSourceBadge = (sourceType: 'charter' | 'template' | 'user') => {
    switch (sourceType) {
      case 'charter':
        return <Badge variant="default" className="bg-green-600">Charter Data</Badge>;
      case 'user':
        return <Badge variant="default" className="bg-blue-600">User Edited</Badge>;
      default:
        return <Badge variant="secondary">Template</Badge>;
    }
  };

  const getTipIcon = (type: AITip['type']) => {
    switch (type) {
      case 'suggestion':
        return <Lightbulb className="h-4 w-4 text-yellow-500" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-orange-500" />;
      case 'missing':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <CheckCircle className="h-4 w-4 text-green-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Generation Controls */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-2">
            <FileText className="h-6 w-6 text-blue-400" />
            <span>Division 1 Specification Generator</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-gray-300">
                Generate comprehensive CSI MasterFormat Division 1 specifications from project charter data
              </p>
              {charterData && (
                <p className="text-sm text-blue-400">
                  Charter data loaded: {charterData.projectName}
                </p>
              )}
            </div>
            <Button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isGenerating ? 'Generating...' : 'Generate Division 1'}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Output Interface */}
      {division1Output && (
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Panel - AI Generated Content */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">AI-Generated Specification</CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="border-green-500 text-green-400">
                    {division1Output.metadata.completeness}% Complete
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-96">
                {/* Section Navigation */}
                <div className="space-y-2 mb-4">
                  {division1Output.sections.map((section) => (
                    <Button
                      key={section.number}
                      variant={selectedSection === section.number ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedSection(section.number)}
                      className="w-full justify-start text-left"
                    >
                      {section.number} - {section.title}
                    </Button>
                  ))}
                </div>

                <Separator className="my-4" />

                {/* Selected Section Content */}
                {(() => {
                  const section = division1Output.sections.find(s => s.number === selectedSection);
                  if (!section) return null;

                  return (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">
                        {section.number} - {section.title}
                      </h3>
                      
                      {section.parts.map((part) => (
                        <div key={part.number} className="space-y-3">
                          <h4 className="font-medium text-blue-300">
                            Part {part.number} - {part.title}
                          </h4>
                          
                          {part.articles.map((article) => (
                            <div key={article.number} className="space-y-2 p-3 bg-slate-700/30 rounded-lg">
                              <div className="flex items-center justify-between">
                                <h5 className="text-sm font-medium text-gray-300">
                                  {article.number} {article.title}
                                </h5>
                                {getSourceBadge(article.sourceType)}
                              </div>
                              
                              <p className="text-sm text-gray-300 leading-relaxed">
                                {article.content}
                              </p>
                              
                              {article.charterField && (
                                <p className="text-xs text-blue-400">
                                  Source: {article.charterField}
                                </p>
                              )}
                              
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => setEditingArticle(`${section.number}-${article.number}`)}
                                className="text-xs"
                              >
                                <Edit3 className="h-3 w-3 mr-1" />
                                Edit
                              </Button>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  );
                })()}
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Right Panel - Editable Content & AI Tips */}
          <div className="space-y-6">
            {/* AI Tips */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">AI Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-48">
                  <div className="space-y-3">
                    {aiTips.map((tip) => (
                      <div key={tip.id} className="flex items-start space-x-3 p-3 bg-slate-700/30 rounded-lg">
                        {getTipIcon(tip.type)}
                        <div className="flex-1">
                          <p className="text-sm text-gray-300">{tip.message}</p>
                          {tip.action && (
                            <Button size="sm" variant="ghost" className="text-xs mt-1">
                              {tip.action}
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Edit Panel */}
            {editingArticle && (
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Edit Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Textarea
                      value={editableContent[editingArticle] || ''}
                      onChange={(e) => {
                        const [sectionNum, articleNum] = editingArticle.split('-');
                        updateArticleContent(sectionNum, articleNum, e.target.value);
                      }}
                      placeholder="Edit specification content..."
                      className="min-h-32"
                    />
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Save Changes
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => setEditingArticle(null)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Export Options */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Export Specification</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => exportSpecification('docx')}
                    className="flex items-center justify-center"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    DOCX
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => exportSpecification('pdf')}
                    className="flex items-center justify-center"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    PDF
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => exportSpecification('xml')}
                    className="flex items-center justify-center"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    XML
                  </Button>
                </div>
                <div className="flex space-x-2 mt-3">
                  <Button size="sm" variant="ghost" className="flex-1">
                    <Copy className="h-4 w-4 mr-1" />
                    Copy to Clipboard
                  </Button>
                  <Button size="sm" variant="ghost" className="flex-1">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share Link
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};
