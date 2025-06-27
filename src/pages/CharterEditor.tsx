
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Bot, Lightbulb, Save, Download } from "lucide-react";
import { toast } from 'sonner';
import Header from "@/components/Header";
import { CharterTemplate } from '@/components/charter/CharterTemplate';
import { ProjectCharter } from '@/types/charter';

const CharterEditor = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [charter, setCharter] = useState<ProjectCharter>({
    id: '',
    projectId: projectId || '',
    version: '1.0',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    completionPercentage: 0,
    projectInfo: {
      projectName: '',
      projectId: projectId || '',
      dateCreated: new Date().toISOString().split('T')[0],
      version: '1.0',
      projectOwner: '',
      department: '',
      projectClassification: [],
    },
    executiveSummary: {
      problemStatement: '',
      projectDescription: '',
      purposeStatement: '',
      strategicAlignment: '',
    },
    visionGoals: {
      projectVision: '',
      projectValues: '',
      primaryGoals: '',
      successMetrics: '',
      expectedOutcomes: '',
    },
    scope: {
      included: '',
      excluded: '',
      keyDeliverables: '',
      assumptions: '',
    },
    teamGovernance: {
      governanceStructure: [],
      teamStakeholders: [],
    },
    stakeholderAnalysis: [],
    timeline: {
      projectStartDate: '',
      targetCompletionDate: '',
      milestones: [],
    },
    budget: {
      budgetBreakdown: [],
      budgetAuthority: '',
      totalProjectBudget: '',
      fundingSource: '',
      resourceRequirements: '',
    },
    riskAssessment: {
      risks: [],
      projectConstraints: '',
      externalDependencies: '',
      internalDependencies: '',
    },
    communicationPlan: {
      internalStrategy: '',
      externalStrategy: '',
      reportingSchedule: '',
      communicationMethods: '',
    },
    approval: {
      approvals: [],
    },
  });

  const [showAIAssistant, setShowAIAssistant] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);

  useEffect(() => {
    // Load existing charter data if available
    // This would typically come from your data store
    loadCharterData();
  }, [projectId]);

  const loadCharterData = async () => {
    // Simulate loading charter data
    // In a real implementation, this would fetch from your database
    console.log('Loading charter data for project:', projectId);
  };

  const handleSave = async (updatedCharter: ProjectCharter) => {
    try {
      setCharter(updatedCharter);
      // Save to database
      toast.success('Charter saved successfully');
    } catch (error) {
      toast.error('Failed to save charter');
    }
  };

  const handleExport = async (format: 'pdf' | 'word' | 'html') => {
    try {
      // Implement export functionality
      toast.success(`Charter exported as ${format.toUpperCase()}`);
    } catch (error) {
      toast.error('Failed to export charter');
    }
  };

  const generateAISuggestions = async (section: string) => {
    // Generate AI suggestions for the current section
    const suggestions = [
      "Consider adding more specific success metrics for better measurement",
      "Include stakeholder communication preferences in the analysis",
      "Add contingency plans for identified high-risk items"
    ];
    setAiSuggestions(suggestions);
    setShowAIAssistant(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#D9D6D0' }}>
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Navigation Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2 border-2 hover:opacity-70"
              style={{ borderColor: '#1A2B49', color: '#1A2B49' }}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-2xl font-bold" style={{ color: '#1A2B49' }}>
                Charter Editor
              </h1>
              <p style={{ color: '#7C9C95' }}>
                Create and edit your comprehensive project charter
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Badge className="text-white" style={{ backgroundColor: '#E98B2A' }}>
              AI-Assisted
            </Badge>
            <Button
              variant="outline"
              onClick={() => setShowAIAssistant(!showAIAssistant)}
              className="flex items-center gap-2 border-2 hover:opacity-70"
              style={{ borderColor: '#7C9C95', color: '#7C9C95' }}
            >
              <Bot className="h-4 w-4" />
              AI Assistant
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Main Charter Template */}
          <div className={showAIAssistant ? "xl:col-span-3" : "xl:col-span-4"}>
            <CharterTemplate
              charter={charter}
              onSave={handleSave}
              onExport={handleExport}
              isEditable={true}
            />
          </div>

          {/* AI Assistant Panel */}
          {showAIAssistant && (
            <div className="xl:col-span-1">
              <Card className="bg-white sticky top-6" style={{ borderColor: '#F7F3ED' }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2" style={{ color: '#1A2B49' }}>
                    <Bot className="h-5 w-5" style={{ color: '#E98B2A' }} />
                    AI Assistant
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#F7F3ED' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="h-4 w-4" style={{ color: '#E98B2A' }} />
                      <span className="font-medium" style={{ color: '#1A2B49' }}>
                        Smart Suggestions
                      </span>
                    </div>
                    <p className="text-sm" style={{ color: '#1A2B49' }}>
                      I'm analyzing your charter content and can provide contextual suggestions 
                      to improve completeness and quality.
                    </p>
                  </div>

                  {aiSuggestions.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-medium" style={{ color: '#1A2B49' }}>
                        Current Suggestions:
                      </h4>
                      {aiSuggestions.map((suggestion, index) => (
                        <div 
                          key={index}
                          className="p-3 rounded border-l-4 text-sm"
                          style={{ 
                            backgroundColor: '#F7F3ED',
                            borderLeftColor: '#E98B2A',
                            color: '#1A2B49'
                          }}
                        >
                          {suggestion}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-4 border-t" style={{ borderColor: '#D9D6D0' }}>
                    <Button
                      onClick={() => generateAISuggestions('current')}
                      className="w-full text-white hover:opacity-90"
                      style={{ backgroundColor: '#7C9C95' }}
                    >
                      Generate Suggestions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharterEditor;
