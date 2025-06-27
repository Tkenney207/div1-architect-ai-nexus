
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save, Plus } from "lucide-react";
import { toast } from 'sonner';
import Header from "@/components/Header";

const NewProject = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    projectOwner: '',
    department: '',
    budget: '',
    timeline: '',
    objectives: [''],
    stakeholders: ['']
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayChange = (field: string, index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].map((item: string, i: number) => 
        i === index ? value : item
      )
    }));
  };

  const addArrayItem = (field: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field as keyof typeof prev], '']
    }));
  };

  const removeArrayItem = (field: string, index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field as keyof typeof prev].filter((_: string, i: number) => i !== index)
    }));
  };

  const handleSave = async () => {
    if (!formData.projectName.trim()) {
      toast.error('Project name is required');
      return;
    }

    try {
      // TODO: Save to database
      console.log('Saving project:', formData);
      toast.success('Project created successfully');
      navigate('/dashboard');
    } catch (error) {
      toast.error('Failed to create project');
    }
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
              className="flex items-center gap-2 border-2 hover:opacity-70 text-white"
              style={{ borderColor: '#1A2B49', backgroundColor: '#1A2B49' }}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-2xl font-bold" style={{ color: '#1A2B49' }}>
                Create New Project
              </h1>
              <p style={{ color: '#7C9C95' }}>
                Start by filling in the basic project information
              </p>
            </div>
          </div>
          
          <Button
            onClick={handleSave}
            className="flex items-center gap-2 text-white hover:opacity-90"
            style={{ backgroundColor: '#E98B2A' }}
          >
            <Save className="h-4 w-4" />
            Create Project
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white" style={{ borderColor: '#F7F3ED' }}>
            <CardHeader>
              <CardTitle style={{ color: '#1A2B49' }}>Project Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="projectName" style={{ color: '#1A2B49' }}>
                    Project Name *
                  </Label>
                  <Input
                    id="projectName"
                    value={formData.projectName}
                    onChange={(e) => handleInputChange('projectName', e.target.value)}
                    placeholder="Enter project name"
                    className="border-2 focus:ring-2"
                    style={{ 
                      borderColor: '#7C9C95',
                      backgroundColor: '#F7F3ED',
                      color: '#1A2B49'
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectOwner" style={{ color: '#1A2B49' }}>
                    Project Owner
                  </Label>
                  <Input
                    id="projectOwner"
                    value={formData.projectOwner}
                    onChange={(e) => handleInputChange('projectOwner', e.target.value)}
                    placeholder="Enter project owner name"
                    className="border-2 focus:ring-2"
                    style={{ 
                      borderColor: '#7C9C95',
                      backgroundColor: '#F7F3ED',
                      color: '#1A2B49'
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="department" style={{ color: '#1A2B49' }}>
                    Department
                  </Label>
                  <Input
                    id="department"
                    value={formData.department}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                    placeholder="Enter department"
                    className="border-2 focus:ring-2"
                    style={{ 
                      borderColor: '#7C9C95',
                      backgroundColor: '#F7F3ED',
                      color: '#1A2B49'
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget" style={{ color: '#1A2B49' }}>
                    Estimated Budget
                  </Label>
                  <Input
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    placeholder="e.g., $500,000"
                    className="border-2 focus:ring-2"
                    style={{ 
                      borderColor: '#7C9C95',
                      backgroundColor: '#F7F3ED',
                      color: '#1A2B49'
                    }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline" style={{ color: '#1A2B49' }}>
                  Timeline
                </Label>
                <Input
                  id="timeline"
                  value={formData.timeline}
                  onChange={(e) => handleInputChange('timeline', e.target.value)}
                  placeholder="e.g., 12 months"
                  className="border-2 focus:ring-2"
                  style={{ 
                    borderColor: '#7C9C95',
                    backgroundColor: '#F7F3ED',
                    color: '#1A2B49'
                  }}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectDescription" style={{ color: '#1A2B49' }}>
                  Project Description
                </Label>
                <Textarea
                  id="projectDescription"
                  value={formData.projectDescription}
                  onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                  placeholder="Describe the project scope and purpose"
                  rows={4}
                  className="border-2 focus:ring-2"
                  style={{ 
                    borderColor: '#7C9C95',
                    backgroundColor: '#F7F3ED',
                    color: '#1A2B49'
                  }}
                />
              </div>

              {/* Objectives */}
              <div className="space-y-4">
                <Label style={{ color: '#1A2B49' }}>Project Objectives</Label>
                {formData.objectives.map((objective, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={objective}
                      onChange={(e) => handleArrayChange('objectives', index, e.target.value)}
                      placeholder="Enter project objective"
                      className="border-2 focus:ring-2"
                      style={{ 
                        borderColor: '#7C9C95',
                        backgroundColor: '#F7F3ED',
                        color: '#1A2B49'
                      }}
                    />
                    {formData.objectives.length > 1 && (
                      <Button
                        size="sm"
                        onClick={() => removeArrayItem('objectives', index)}
                        className="text-white hover:opacity-90"
                        style={{ backgroundColor: '#E98B2A' }}
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  size="sm"
                  onClick={() => addArrayItem('objectives')}
                  className="flex items-center gap-2 text-white hover:opacity-90"
                  style={{ backgroundColor: '#7C9C95' }}
                >
                  <Plus className="h-4 w-4" />
                  Add Objective
                </Button>
              </div>

              {/* Stakeholders */}
              <div className="space-y-4">
                <Label style={{ color: '#1A2B49' }}>Key Stakeholders</Label>
                {formData.stakeholders.map((stakeholder, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      value={stakeholder}
                      onChange={(e) => handleArrayChange('stakeholders', index, e.target.value)}
                      placeholder="Enter stakeholder name and role"
                      className="border-2 focus:ring-2"
                      style={{ 
                        borderColor: '#7C9C95',
                        backgroundColor: '#F7F3ED',
                        color: '#1A2B49'
                      }}
                    />
                    {formData.stakeholders.length > 1 && (
                      <Button
                        size="sm"
                        onClick={() => removeArrayItem('stakeholders', index)}
                        className="text-white hover:opacity-90"
                        style={{ backgroundColor: '#E98B2A' }}
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                ))}
                <Button
                  size="sm"
                  onClick={() => addArrayItem('stakeholders')}
                  className="flex items-center gap-2 text-white hover:opacity-90"
                  style={{ backgroundColor: '#7C9C95' }}
                >
                  <Plus className="h-4 w-4" />
                  Add Stakeholder
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewProject;
