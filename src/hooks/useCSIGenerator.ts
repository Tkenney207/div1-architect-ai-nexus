
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { SpecificationData, CSISection, CharterMapping } from '@/types/csi';

interface ProjectData {
  name: string;
  description: string;
  type: string;
  budget?: number;
  timeline?: string;
  location?: string;
  vision?: string;
  objectives?: string[];
  constraints?: string[];
  sustainabilityGoals?: string[];
  qualityRequirements?: string[];
}

export const useCSIGenerator = () => {
  const [specificationData, setSpecificationData] = useState<SpecificationData | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const charterMappings: CharterMapping[] = [
    {
      charterField: 'description',
      csiSection: '011000',
      csiPart: '1.1',
      template: 'The work under this contract includes: {value}'
    },
    {
      charterField: 'objectives',
      csiSection: '011000',
      csiPart: '1.2',
      template: 'Project objectives: {value}'
    },
    {
      charterField: 'sustainabilityGoals',
      csiSection: '018113',
      csiPart: '1.1',
      template: 'Sustainable design requirements: {value}'
    },
    {
      charterField: 'qualityRequirements',
      csiSection: '014000',
      csiPart: '1.1',
      template: 'Quality control requirements: {value}'
    }
  ];

  const generateSpecificationMutation = useMutation({
    mutationFn: async (projectData: ProjectData) => {
      setIsGenerating(true);
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const sections: CSISection[] = [
        {
          number: '011000',
          title: 'Summary of Work',
          parts: [
            {
              number: '1.1',
              title: 'General',
              subsections: [
                {
                  title: 'Work Included',
                  content: mapCharterToSpec(projectData.description, 'The work under this contract includes: {value}'),
                  sourceCharter: 'description'
                },
                {
                  title: 'Project Objectives',
                  content: mapCharterToSpec(projectData.objectives?.join(', '), 'Project objectives include: {value}'),
                  sourceCharter: 'objectives'
                }
              ]
            },
            {
              number: '1.2',
              title: 'Products',
              subsections: [
                {
                  title: 'Not Used',
                  content: 'This section is not used for this specification.',
                  sourceCharter: undefined
                }
              ]
            },
            {
              number: '1.3',
              title: 'Execution',
              subsections: [
                {
                  title: 'Coordination',
                  content: 'Coordinate work with other trades and maintain project schedule.',
                  sourceCharter: undefined
                }
              ]
            }
          ]
        },
        {
          number: '013100',
          title: 'Project Management and Coordination',
          parts: [
            {
              number: '1.1',
              title: 'General',
              subsections: [
                {
                  title: 'Project Timeline',
                  content: mapCharterToSpec(projectData.timeline, 'Project timeline: {value}'),
                  sourceCharter: 'timeline'
                },
                {
                  title: 'Budget Considerations',
                  content: mapCharterToSpec(projectData.budget?.toString(), 'Project budget: ${value}'),
                  sourceCharter: 'budget'
                }
              ]
            },
            {
              number: '1.2',
              title: 'Products',
              subsections: [
                {
                  title: 'Not Used',
                  content: 'This section is not used for this specification.',
                  sourceCharter: undefined
                }
              ]
            },
            {
              number: '1.3',
              title: 'Execution',
              subsections: [
                {
                  title: 'Coordination Procedures',
                  content: 'Establish coordination procedures between all project stakeholders.',
                  sourceCharter: undefined
                }
              ]
            }
          ]
        },
        {
          number: '014000',
          title: 'Quality Requirements',
          parts: [
            {
              number: '1.1',
              title: 'General',
              subsections: [
                {
                  title: 'Quality Control',
                  content: mapCharterToSpec(projectData.qualityRequirements?.join(', '), 'Quality requirements: {value}'),
                  sourceCharter: 'qualityRequirements'
                }
              ]
            },
            {
              number: '1.2',
              title: 'Products',
              subsections: [
                {
                  title: 'Testing Requirements',
                  content: 'All materials and products shall meet specified testing requirements.',
                  sourceCharter: undefined
                }
              ]
            },
            {
              number: '1.3',
              title: 'Execution',
              subsections: [
                {
                  title: 'Quality Assurance',
                  content: 'Implement quality assurance procedures throughout construction.',
                  sourceCharter: undefined
                }
              ]
            }
          ]
        }
      ];

      if (projectData.sustainabilityGoals && projectData.sustainabilityGoals.length > 0) {
        sections.push({
          number: '018113',
          title: 'Sustainable Design Requirements',
          parts: [
            {
              number: '1.1',
              title: 'General',
              subsections: [
                {
                  title: 'Sustainability Goals',
                  content: mapCharterToSpec(projectData.sustainabilityGoals.join(', '), 'Sustainable design requirements: {value}'),
                  sourceCharter: 'sustainabilityGoals'
                }
              ]
            },
            {
              number: '1.2',
              title: 'Products',
              subsections: [
                {
                  title: 'Sustainable Materials',
                  content: 'Use materials that meet sustainability criteria as outlined in project charter.',
                  sourceCharter: undefined
                }
              ]
            },
            {
              number: '1.3',
              title: 'Execution',
              subsections: [
                {
                  title: 'Sustainable Practices',
                  content: 'Implement sustainable construction practices throughout project execution.',
                  sourceCharter: undefined
                }
              ]
            }
          ]
        });
      }

      const specification: SpecificationData = {
        projectName: projectData.name,
        projectNumber: `PROJ-${Date.now()}`,
        sections,
        generatedDate: new Date().toISOString()
      };

      setSpecificationData(specification);
      setIsGenerating(false);
      
      return specification;
    }
  });

  const mapCharterToSpec = (value: string | undefined, template: string): string => {
    if (!value || value.trim() === '') {
      return '[TO BE DETERMINED - Missing charter data]';
    }
    return template.replace('{value}', value);
  };

  const generateSpecification = (projectData: ProjectData) => {
    generateSpecificationMutation.mutate(projectData);
  };

  return {
    generateSpecification,
    specificationData,
    isGenerating,
    isLoading: generateSpecificationMutation.isPending
  };
};
