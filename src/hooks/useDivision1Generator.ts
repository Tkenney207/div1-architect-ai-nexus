
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { CharterData, Division1Output, CSISection, AITip } from '@/types/csi';

const SECTION_TEMPLATES: Record<string, CSISection> = {
  '011000': {
    number: '011000',
    title: 'Summary of Work',
    parts: [
      {
        number: '1.1',
        title: 'GENERAL',
        articles: [
          {
            number: '1.1.1',
            title: 'Work Covered by Contract Documents',
            content: 'The work consists of [PROJECT_DESCRIPTION] as shown on the drawings and specified herein.',
            sourceType: 'template',
            suggestions: []
          },
          {
            number: '1.1.2',
            title: 'Type of Contract',
            content: 'Work of this contract will be performed under a [CONTRACT_TYPE] contract.',
            sourceType: 'template',
            suggestions: ['Lump Sum', 'Cost Plus Fee', 'Unit Price', 'Design-Build']
          }
        ]
      }
    ]
  },
  '013100': {
    number: '013100',
    title: 'Project Management and Coordination',
    parts: [
      {
        number: '1.1',
        title: 'GENERAL',
        articles: [
          {
            number: '1.1.1',
            title: 'Project Management Requirements',
            content: 'Contractor shall provide comprehensive project management services including [MANAGEMENT_SCOPE].',
            sourceType: 'template',
            suggestions: []
          }
        ]
      }
    ]
  },
  '013200': {
    number: '013200',
    title: 'Construction Progress Documentation',
    parts: [
      {
        number: '1.1',
        title: 'GENERAL',
        articles: [
          {
            number: '1.1.1',
            title: 'Progress Documentation Requirements',
            content: 'Maintain detailed records of construction progress including daily reports, progress photos, and milestone tracking.',
            sourceType: 'template',
            suggestions: []
          }
        ]
      }
    ]
  },
  '013300': {
    number: '013300',
    title: 'Submittal Procedures',
    parts: [
      {
        number: '1.1',
        title: 'GENERAL',
        articles: [
          {
            number: '1.1.1',
            title: 'Submittal Requirements',
            content: 'Submit shop drawings, product data, and samples in accordance with [SUBMITTAL_PROCEDURES].',
            sourceType: 'template',
            suggestions: []
          }
        ]
      }
    ]
  },
  '014000': {
    number: '014000',
    title: 'Quality Requirements',
    parts: [
      {
        number: '1.1',
        title: 'GENERAL',
        articles: [
          {
            number: '1.1.1',
            title: 'Quality Assurance Program',
            content: 'Implement comprehensive quality assurance program to ensure [QUALITY_REQUIREMENTS].',
            sourceType: 'template',
            suggestions: []
          }
        ]
      }
    ]
  },
  '015000': {
    number: '015000',
    title: 'Temporary Facilities and Controls',
    parts: [
      {
        number: '1.1',
        title: 'GENERAL',
        articles: [
          {
            number: '1.1.1',
            title: 'Temporary Facilities',
            content: 'Provide temporary facilities including site offices, storage areas, and utilities as required for project execution.',
            sourceType: 'template',
            suggestions: []
          }
        ]
      }
    ]
  },
  '017000': {
    number: '017000',
    title: 'Execution and Closeout Requirements',
    parts: [
      {
        number: '1.1',
        title: 'GENERAL',
        articles: [
          {
            number: '1.1.1',
            title: 'Project Closeout',
            content: 'Complete project closeout including final inspections, testing, training, and warranty documentation.',
            sourceType: 'template',
            suggestions: []
          }
        ]
      }
    ]
  },
  '017419': {
    number: '017419',
    title: 'Construction Waste Management',
    parts: [
      {
        number: '1.1',
        title: 'GENERAL',
        articles: [
          {
            number: '1.1.1',
            title: 'Waste Management Plan',
            content: 'Implement waste management plan to [WASTE_MANAGEMENT_GOALS] in accordance with local regulations.',
            sourceType: 'template',
            suggestions: []
          }
        ]
      }
    ]
  },
  '018113': {
    number: '018113',
    title: 'Sustainable Design Requirements',
    parts: [
      {
        number: '1.1',
        title: 'GENERAL',
        articles: [
          {
            number: '1.1.1',
            title: 'Sustainability Goals',
            content: 'Achieve sustainability objectives including [SUSTAINABILITY_GOALS] and pursue [CERTIFICATION_LEVEL] certification.',
            sourceType: 'template',
            suggestions: []
          }
        ]
      }
    ]
  }
};

export const useDivision1Generator = () => {
  const [division1Output, setDivision1Output] = useState<Division1Output | null>(null);
  const [aiTips, setAiTips] = useState<AITip[]>([]);
  const [editableContent, setEditableContent] = useState<Record<string, string>>({});

  const generateDivision1Mutation = useMutation({
    mutationFn: async (charterData: CharterData) => {
      await new Promise(resolve => setTimeout(resolve, 2000));

      const sections: CSISection[] = [];
      const tips: AITip[] = [];
      const missingFields: string[] = [];

      // Process each section template
      Object.values(SECTION_TEMPLATES).forEach(template => {
        const processedSection = processSection(template, charterData, tips, missingFields);
        sections.push(processedSection);
      });

      // Calculate completeness
      const totalFields = Object.keys(charterData).length;
      const populatedFields = Object.values(charterData).filter(value => 
        value && (Array.isArray(value) ? value.length > 0 : true)
      ).length;
      const completeness = Math.round((populatedFields / totalFields) * 100);

      const output: Division1Output = {
        sections,
        metadata: {
          generatedDate: new Date().toISOString(),
          charterSource: charterData.projectName,
          completeness,
          missingFields
        }
      };

      setDivision1Output(output);
      setAiTips(tips);
      
      return output;
    }
  });

  const processSection = (
    template: CSISection, 
    charter: CharterData, 
    tips: AITip[], 
    missingFields: string[]
  ): CSISection => {
    const processedParts = template.parts.map(part => ({
      ...part,
      articles: part.articles.map(article => {
        let content = article.content;
        let sourceType = article.sourceType;
        let charterField: string | undefined;

        // Map charter data to placeholders
        if (content.includes('[PROJECT_DESCRIPTION]')) {
          if (charter.description) {
            content = content.replace('[PROJECT_DESCRIPTION]', charter.description);
            sourceType = 'charter';
            charterField = 'description';
          } else {
            missingFields.push('Project Description');
          }
        }

        if (content.includes('[QUALITY_REQUIREMENTS]')) {
          if (charter.qualityRequirements?.length) {
            content = content.replace('[QUALITY_REQUIREMENTS]', charter.qualityRequirements.join(', '));
            sourceType = 'charter';
            charterField = 'qualityRequirements';
          } else {
            tips.push({
              id: Math.random().toString(36),
              sectionNumber: template.number,
              type: 'missing',
              message: 'Quality requirements not found in charter. Consider adding specific quality standards.',
              action: 'Add quality requirements'
            });
          }
        }

        if (content.includes('[SUSTAINABILITY_GOALS]')) {
          if (charter.sustainabilityGoals?.length) {
            content = content.replace('[SUSTAINABILITY_GOALS]', charter.sustainabilityGoals.join(', '));
            sourceType = 'charter';
            charterField = 'sustainabilityGoals';
            
            // Add suggestion for LEED
            if (charter.sustainabilityGoals.some(goal => goal.toLowerCase().includes('leed'))) {
              tips.push({
                id: Math.random().toString(36),
                sectionNumber: template.number,
                type: 'suggestion',
                message: 'LEED goals detected. Consider linking quality assurance language to LEED requirements.',
                action: 'Link to LEED'
              });
            }
          }
        }

        if (content.includes('[SUBMITTAL_PROCEDURES]')) {
          if (charter.submittalProcedures?.length) {
            content = content.replace('[SUBMITTAL_PROCEDURES]', charter.submittalProcedures.join(', '));
            sourceType = 'charter';
            charterField = 'submittalProcedures';
          }
        }

        if (content.includes('[WASTE_MANAGEMENT_GOALS]')) {
          if (charter.wasteManagement?.length) {
            content = content.replace('[WASTE_MANAGEMENT_GOALS]', charter.wasteManagement.join(', '));
            sourceType = 'charter';
            charterField = 'wasteManagement';
          }
        }

        return {
          ...article,
          content,
          sourceType,
          charterField
        };
      })
    }));

    return {
      ...template,
      parts: processedParts
    };
  };

  const updateArticleContent = (sectionNumber: string, articleNumber: string, newContent: string) => {
    const key = `${sectionNumber}-${articleNumber}`;
    setEditableContent(prev => ({
      ...prev,
      [key]: newContent
    }));
  };

  const exportSpecification = async (format: 'docx' | 'pdf' | 'xml') => {
    // This would integrate with actual export services
    console.log(`Exporting Division 1 specification as ${format.toUpperCase()}`);
    
    // Simulate export
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      success: true,
      downloadUrl: `#`,
      filename: `Division1_Specification.${format}`
    };
  };

  return {
    generateDivision1: (charterData: CharterData) => generateDivision1Mutation.mutate(charterData),
    division1Output,
    aiTips,
    editableContent,
    updateArticleContent,
    exportSpecification,
    isGenerating: generateDivision1Mutation.isPending
  };
};
