
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { 
  ChevronDown, 
  ChevronRight, 
  Plus, 
  Trash2, 
  Save, 
  Download,
  FileText,
  Users,
  Target,
  Calendar,
  DollarSign,
  AlertTriangle,
  MessageSquare,
  CheckCircle
} from "lucide-react";
import { ProjectCharter, PROJECT_CLASSIFICATIONS, CharterSection } from '@/types/charter';

interface CharterTemplateProps {
  charter: ProjectCharter;
  onSave: (charter: ProjectCharter) => void;
  onExport: (format: 'pdf' | 'word' | 'html') => void;
  isEditable?: boolean;
}

export const CharterTemplate: React.FC<CharterTemplateProps> = ({
  charter,
  onSave,
  onExport,
  isEditable = true
}) => {
  const [activeSection, setActiveSection] = useState<string>('projectInfo');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['projectInfo']));

  const sections: CharterSection[] = [
    { id: 'projectInfo', name: 'Project Information', completed: false, completionPercentage: 85, required: true },
    { id: 'executiveSummary', name: 'Executive Summary & Purpose', completed: false, completionPercentage: 60, required: true },
    { id: 'visionGoals', name: 'Vision, Values & Goals', completed: false, completionPercentage: 70, required: true },
    { id: 'scope', name: 'Project Scope & Deliverables', completed: false, completionPercentage: 45, required: true },
    { id: 'teamGovernance', name: 'Project Team & Governance', completed: false, completionPercentage: 30, required: true },
    { id: 'stakeholderAnalysis', name: 'Stakeholder Analysis', completed: false, completionPercentage: 20, required: true },
    { id: 'timeline', name: 'Timeline & Milestones', completed: false, completionPercentage: 55, required: true },
    { id: 'budget', name: 'Budget & Resources', completed: false, completionPercentage: 40, required: true },
    { id: 'riskAssessment', name: 'Risk Assessment & Constraints', completed: false, completionPercentage: 25, required: true },
    { id: 'communicationPlan', name: 'Communication Plan', completed: false, completionPercentage: 35, required: false },
    { id: 'approval', name: 'Charter Approval', completed: false, completionPercentage: 0, required: true }
  ];

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const getSectionIcon = (sectionId: string) => {
    const icons = {
      projectInfo: FileText,
      executiveSummary: Target,
      visionGoals: Target,
      scope: FileText,
      teamGovernance: Users,
      stakeholderAnalysis: Users,
      timeline: Calendar,
      budget: DollarSign,
      riskAssessment: AlertTriangle,
      communicationPlan: MessageSquare,
      approval: CheckCircle
    };
    return icons[sectionId as keyof typeof icons] || FileText;
  };

  const overallCompletion = Math.round(
    sections.reduce((acc, section) => acc + section.completionPercentage, 0) / sections.length
  );

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: '#D9D6D0' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold" style={{ color: '#1A2B49' }}>
              Project Charter Template
            </h1>
            <p style={{ color: '#1A2B49' }}>
              {charter.projectInfo.projectName || 'Untitled Project'}
            </p>
          </div>
          <div className="flex gap-3">
            <Button 
              onClick={() => onSave(charter)}
              className="flex items-center gap-2 text-white hover:opacity-90"
              style={{ backgroundColor: '#7C9C95' }}
            >
              <Save className="h-4 w-4" />
              Save Charter
            </Button>
            <Button 
              onClick={() => onExport('pdf')}
              variant="outline" 
              className="border-2 hover:opacity-70"
              style={{ borderColor: '#E98B2A', color: '#E98B2A' }}
            >
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Progress Overview */}
        <Card className="mb-6 bg-white" style={{ borderColor: '#F7F3ED' }}>
          <CardHeader>
            <CardTitle style={{ color: '#1A2B49' }}>Charter Completion Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span style={{ color: '#1A2B49' }}>Overall Progress</span>
                <span className="font-semibold" style={{ color: '#E98B2A' }}>{overallCompletion}%</span>
              </div>
              <Progress value={overallCompletion} className="h-3" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sections.slice(0, 8).map((section) => (
                <div key={section.id} className="text-center">
                  <div className="text-sm font-medium mb-1" style={{ color: '#1A2B49' }}>
                    {section.name}
                  </div>
                  <Progress value={section.completionPercentage} className="h-2 mb-1" />
                  <div className="text-xs" style={{ color: '#7C9C95' }}>
                    {section.completionPercentage}%
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Section Navigation */}
          <div className="lg:col-span-1">
            <Card className="bg-white sticky top-6" style={{ borderColor: '#F7F3ED' }}>
              <CardHeader>
                <CardTitle style={{ color: '#1A2B49' }}>Charter Sections</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {sections.map((section) => {
                  const Icon = getSectionIcon(section.id);
                  return (
                    <Button
                      key={section.id}
                      variant={activeSection === section.id ? "default" : "ghost"}
                      className={`w-full justify-start text-left h-auto p-3 ${
                        activeSection === section.id 
                          ? 'text-white' 
                          : 'hover:opacity-70'
                      }`}
                      style={{
                        backgroundColor: activeSection === section.id ? '#1A2B49' : 'transparent',
                        color: activeSection === section.id ? 'white' : '#1A2B49'
                      }}
                      onClick={() => setActiveSection(section.id)}
                    >
                      <Icon className="h-4 w-4 mr-2 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="text-sm font-medium">{section.name}</div>
                        <div className="flex items-center justify-between mt-1">
                          <Progress value={section.completionPercentage} className="h-1 flex-1 mr-2" />
                          <span className="text-xs">{section.completionPercentage}%</span>
                        </div>
                      </div>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Charter Content */}
          <div className="lg:col-span-3 space-y-6">
            {activeSection === 'projectInfo' && (
              <ProjectInfoSection charter={charter} onUpdate={onSave} isEditable={isEditable} />
            )}
            {activeSection === 'executiveSummary' && (
              <ExecutiveSummarySection charter={charter} onUpdate={onSave} isEditable={isEditable} />
            )}
            {activeSection === 'visionGoals' && (
              <VisionGoalsSection charter={charter} onUpdate={onSave} isEditable={isEditable} />
            )}
            {/* Add other sections as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

// Project Information Section Component
const ProjectInfoSection: React.FC<{
  charter: ProjectCharter;
  onUpdate: (charter: ProjectCharter) => void;
  isEditable: boolean;
}> = ({ charter, onUpdate, isEditable }) => {
  const updateProjectInfo = (field: string, value: any) => {
    const updatedCharter = {
      ...charter,
      projectInfo: {
        ...charter.projectInfo,
        [field]: value
      }
    };
    onUpdate(updatedCharter);
  };

  const toggleClassification = (classification: string) => {
    const current = charter.projectInfo.projectClassification || [];
    const updated = current.includes(classification)
      ? current.filter(c => c !== classification)
      : [...current, classification];
    updateProjectInfo('projectClassification', updated);
  };

  return (
    <Card className="bg-white" style={{ borderColor: '#F7F3ED' }}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2" style={{ color: '#1A2B49' }}>
          <FileText className="h-5 w-5" style={{ color: '#E98B2A' }} />
          Section 1: Project Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>
              Project Name *
            </label>
            <Input
              value={charter.projectInfo.projectName || ''}
              onChange={(e) => updateProjectInfo('projectName', e.target.value)}
              placeholder="Enter project name"
              disabled={!isEditable}
              className="border-2 focus:ring-2"
              style={{ borderColor: '#7C9C95' }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>
              Project ID/Number
            </label>
            <Input
              value={charter.projectInfo.projectId || ''}
              onChange={(e) => updateProjectInfo('projectId', e.target.value)}
              placeholder="Enter project ID"
              disabled={!isEditable}
              className="border-2 focus:ring-2"
              style={{ borderColor: '#7C9C95' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>
              Date Created
            </label>
            <Input
              type="date"
              value={charter.projectInfo.dateCreated || ''}
              onChange={(e) => updateProjectInfo('dateCreated', e.target.value)}
              disabled={!isEditable}
              className="border-2 focus:ring-2"
              style={{ borderColor: '#7C9C95' }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>
              Version
            </label>
            <Input
              value={charter.projectInfo.version || '1.0'}
              onChange={(e) => updateProjectInfo('version', e.target.value)}
              disabled={!isEditable}
              className="border-2 focus:ring-2"
              style={{ borderColor: '#7C9C95' }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>
              Department/Business Unit
            </label>
            <Input
              value={charter.projectInfo.department || ''}
              onChange={(e) => updateProjectInfo('department', e.target.value)}
              placeholder="Enter department"
              disabled={!isEditable}
              className="border-2 focus:ring-2"
              style={{ borderColor: '#7C9C95' }}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>
            Project Owner/Sponsor *
          </label>
          <Input
            value={charter.projectInfo.projectOwner || ''}
            onChange={(e) => updateProjectInfo('projectOwner', e.target.value)}
            placeholder="Enter project owner name"
            disabled={!isEditable}
            className="border-2 focus:ring-2"
            style={{ borderColor: '#7C9C95' }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-3" style={{ color: '#1A2B49' }}>
            Project Classification * (Select all that apply)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {PROJECT_CLASSIFICATIONS.map((classification) => {
              const isSelected = charter.projectInfo.projectClassification?.includes(classification);
              return (
                <div key={classification} className="flex items-center space-x-2">
                  <Checkbox
                    id={classification}
                    checked={isSelected}
                    onCheckedChange={() => toggleClassification(classification)}
                    disabled={!isEditable}
                  />
                  <label
                    htmlFor={classification}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    style={{ color: '#1A2B49' }}
                  >
                    {classification}
                  </label>
                </div>
              );
            })}
          </div>
          {charter.projectInfo.projectClassification?.includes('Other') && (
            <div className="mt-3">
              <Input
                value={charter.projectInfo.otherClassification || ''}
                onChange={(e) => updateProjectInfo('otherClassification', e.target.value)}
                placeholder="Please specify other classification"
                disabled={!isEditable}
                className="border-2 focus:ring-2"
                style={{ borderColor: '#7C9C95' }}
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// Executive Summary Section Component
const ExecutiveSummarySection: React.FC<{
  charter: ProjectCharter;
  onUpdate: (charter: ProjectCharter) => void;
  isEditable: boolean;
}> = ({ charter, onUpdate, isEditable }) => {
  const updateExecutiveSummary = (field: string, value: string) => {
    const updatedCharter = {
      ...charter,
      executiveSummary: {
        ...charter.executiveSummary,
        [field]: value
      }
    };
    onUpdate(updatedCharter);
  };

  return (
    <Card className="bg-white" style={{ borderColor: '#F7F3ED' }}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2" style={{ color: '#1A2B49' }}>
          <Target className="h-5 w-5" style={{ color: '#E98B2A' }} />
          Section 2: Executive Summary & Purpose
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>
            Problem/Opportunity Statement *
          </label>
          <Textarea
            value={charter.executiveSummary.problemStatement || ''}
            onChange={(e) => updateExecutiveSummary('problemStatement', e.target.value)}
            placeholder="Describe the problem or opportunity this project addresses..."
            rows={4}
            disabled={!isEditable}
            className="border-2 focus:ring-2"
            style={{ borderColor: '#7C9C95' }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>
            Project Description *
          </label>
          <Textarea
            value={charter.executiveSummary.projectDescription || ''}
            onChange={(e) => updateExecutiveSummary('projectDescription', e.target.value)}
            placeholder="Provide a comprehensive description of the project..."
            rows={4}
            disabled={!isEditable}
            className="border-2 focus:ring-2"
            style={{ borderColor: '#7C9C95' }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>
            Project Purpose and Need Statement *
          </label>
          <Textarea
            value={charter.executiveSummary.purposeStatement || ''}
            onChange={(e) => updateExecutiveSummary('purposeStatement', e.target.value)}
            placeholder="Explain why this project is needed and what it will accomplish..."
            rows={4}
            disabled={!isEditable}
            className="border-2 focus:ring-2"
            style={{ borderColor: '#7C9C95' }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>
            Strategic Alignment
          </label>
          <Textarea
            value={charter.executiveSummary.strategicAlignment || ''}
            onChange={(e) => updateExecutiveSummary('strategicAlignment', e.target.value)}
            placeholder="Describe how this project aligns with organizational strategy..."
            rows={3}
            disabled={!isEditable}
            className="border-2 focus:ring-2"
            style={{ borderColor: '#7C9C95' }}
          />
        </div>
      </CardContent>
    </Card>
  );
};

// Vision Goals Section Component
const VisionGoalsSection: React.FC<{
  charter: ProjectCharter;
  onUpdate: (charter: ProjectCharter) => void;
  isEditable: boolean;
}> = ({ charter, onUpdate, isEditable }) => {
  const updateVisionGoals = (field: string, value: string) => {
    const updatedCharter = {
      ...charter,
      visionGoals: {
        ...charter.visionGoals,
        [field]: value
      }
    };
    onUpdate(updatedCharter);
  };

  return (
    <Card className="bg-white" style={{ borderColor: '#F7F3ED' }}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2" style={{ color: '#1A2B49' }}>
          <Target className="h-5 w-5" style={{ color: '#E98B2A' }} />
          Section 3: Vision, Values & Goals
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>
            Project Vision *
          </label>
          <Textarea
            value={charter.visionGoals.projectVision || ''}
            onChange={(e) => updateVisionGoals('projectVision', e.target.value)}
            placeholder="Describe the project vision and desired future state..."
            rows={3}
            disabled={!isEditable}
            className="border-2 focus:ring-2"
            style={{ borderColor: '#7C9C95' }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>
            Project Values/Principles
          </label>
          <Textarea
            value={charter.visionGoals.projectValues || ''}
            onChange={(e) => updateVisionGoals('projectValues', e.target.value)}
            placeholder="List the core values and principles that will guide this project..."
            rows={3}
            disabled={!isEditable}
            className="border-2 focus:ring-2"
            style={{ borderColor: '#7C9C95' }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>
            Primary Goals and Objectives *
          </label>
          <Textarea
            value={charter.visionGoals.primaryGoals || ''}
            onChange={(e) => updateVisionGoals('primaryGoals', e.target.value)}
            placeholder="Define the primary goals and specific objectives..."
            rows={4}
            disabled={!isEditable}
            className="border-2 focus:ring-2"
            style={{ borderColor: '#7C9C95' }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>
            Success Metrics/KPIs *
          </label>
          <Textarea
            value={charter.visionGoals.successMetrics || ''}
            onChange={(e) => updateVisionGoals('successMetrics', e.target.value)}
            placeholder="Define measurable success criteria and key performance indicators..."
            rows={3}
            disabled={!isEditable}
            className="border-2 focus:ring-2"
            style={{ borderColor: '#7C9C95' }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: '#1A2B49' }}>
            Expected Outcomes/Benefits *
          </label>
          <Textarea
            value={charter.visionGoals.expectedOutcomes || ''}
            onChange={(e) => updateVisionGoals('expectedOutcomes', e.target.value)}
            placeholder="Describe the expected outcomes and benefits of this project..."
            rows={3}
            disabled={!isEditable}
            className="border-2 focus:ring-2"
            style={{ borderColor: '#7C9C95' }}
          />
        </div>
      </CardContent>
    </Card>
  );
};
