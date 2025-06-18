
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { FileText, Download, Zap, CheckCircle, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { useCSIGenerator } from "@/hooks/useCSIGenerator";

interface ProjectFormData {
  name: string;
  description: string;
  type: string;
  budget?: number;
  timeline?: string;
  location?: string;
  objectives: string;
  sustainabilityGoals: string;
  qualityRequirements: string;
}

export const CSISpecificationGenerator = () => {
  const { generateSpecification, specificationData, isGenerating } = useCSIGenerator();
  const [showForm, setShowForm] = useState(true);

  const form = useForm<ProjectFormData>({
    defaultValues: {
      name: '',
      description: '',
      type: '',
      objectives: '',
      sustainabilityGoals: '',
      qualityRequirements: ''
    }
  });

  const onSubmit = (data: ProjectFormData) => {
    const projectData = {
      ...data,
      objectives: data.objectives.split(',').map(obj => obj.trim()).filter(obj => obj !== ''),
      sustainabilityGoals: data.sustainabilityGoals.split(',').map(goal => goal.trim()).filter(goal => goal !== ''),
      qualityRequirements: data.qualityRequirements.split(',').map(req => req.trim()).filter(req => req !== '')
    };
    
    generateSpecification(projectData);
    setShowForm(false);
  };

  const resetForm = () => {
    form.reset();
    setShowForm(true);
  };

  if (showForm) {
    return (
      <Card className="bg-gray-800/50 border-gray-700 max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-white flex items-center space-x-3">
            <FileText className="h-6 w-6 text-blue-400" />
            <span>CSI Division 1 Specification Generator</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Project Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter project name"
                          className="bg-gray-900 border-gray-600 text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-300">Project Type</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="e.g., Commercial, Residential, Healthcare"
                          className="bg-gray-900 border-gray-600 text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Project Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe the scope of work..."
                        className="bg-gray-900 border-gray-600 text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="objectives"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Project Objectives (comma-separated)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="e.g., Complete on time, Stay within budget, Achieve LEED certification"
                        className="bg-gray-900 border-gray-600 text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sustainabilityGoals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Sustainability Goals (comma-separated)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="e.g., LEED Gold certification, 30% energy reduction, Sustainable materials"
                        className="bg-gray-900 border-gray-600 text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="qualityRequirements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Quality Requirements (comma-separated)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="e.g., Third-party testing, Daily inspections, Material certifications"
                        className="bg-gray-900 border-gray-600 text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={isGenerating}
              >
                <Zap className="h-4 w-4 mr-2" />
                {isGenerating ? 'Generating Specification...' : 'Generate CSI Division 1 Specification'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Generated CSI Division 1 Specification</h2>
          <p className="text-gray-400">Project: {specificationData?.projectName}</p>
        </div>
        <div className="flex space-x-3">
          <Button onClick={resetForm} variant="outline" className="border-gray-600 text-gray-300">
            New Specification
          </Button>
          <Button className="bg-green-600 hover:bg-green-700">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {specificationData?.sections.map((section) => (
        <Card key={section.number} className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-3">
              <span className="text-blue-400">{section.number}</span>
              <span>{section.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {section.parts.map((part) => (
              <div key={part.number} className="space-y-4">
                <h4 className="text-lg font-semibold text-green-400">
                  Part {part.number} - {part.title}
                </h4>
                {part.subsections.map((subsection, index) => (
                  <div key={index} className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium text-white">{subsection.title}</h5>
                      {subsection.sourceCharter && (
                        <Badge variant="outline" className="border-yellow-500 text-yellow-400 text-xs">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          From Charter: {subsection.sourceCharter}
                        </Badge>
                      )}
                      {!subsection.sourceCharter && subsection.content.includes('[TO BE DETERMINED') && (
                        <Badge variant="outline" className="border-red-500 text-red-400 text-xs">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          Missing Data
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-300 leading-relaxed">{subsection.content}</p>
                  </div>
                ))}
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
