
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { SpecificationFile, ProcessingStatus } from '@/types/csi';

export const useSpecificationProcessor = () => {
  const [uploadedFiles, setUploadedFiles] = useState<SpecificationFile[]>([]);
  const [processingStatus, setProcessingStatus] = useState<ProcessingStatus | null>(null);
  const [fileContents, setFileContents] = useState<Record<string, string>>({});

  const uploadMutation = useMutation({
    mutationFn: async (file: File) => {
      const newFile: SpecificationFile = {
        id: Math.random().toString(36),
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        uploadDate: new Date().toISOString(),
        status: 'uploading'
      };

      setUploadedFiles(prev => [...prev, newFile]);

      // Store file content for later use
      const content = await file.text();
      setFileContents(prev => ({ ...prev, [newFile.id]: content }));

      // Simulate upload
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Update to processing
      setUploadedFiles(prev => 
        prev.map(f => f.id === newFile.id ? { ...f, status: 'processing' } : f)
      );

      // Simulate processing stages
      const stages = [
        { stage: 'Extracting Content', progress: 20, message: 'Reading document structure and content...' },
        { stage: 'Analyzing Specifications', progress: 40, message: 'Identifying specification sections and requirements...' },
        { stage: 'Checking Compliance', progress: 60, message: 'Validating against building codes and standards...' },
        { stage: 'Generating Recommendations', progress: 80, message: 'Creating improvement suggestions...' },
        { stage: 'Finalizing Analysis', progress: 100, message: 'Completing analysis and generating report...' }
      ];

      for (const stage of stages) {
        setProcessingStatus(stage);
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      // Generate comprehensive mock analysis results matching DocumentAnalysis interface
      const analysisResults = {
        overview: {
          overallCompliance: Math.floor(Math.random() * 20) + 80,
          criticalIssues: Math.floor(Math.random() * 5),
          warningsCount: Math.floor(Math.random() * 8) + 2,
          upToDatePercentage: Math.floor(Math.random() * 15) + 85,
          lastReviewDate: new Date().toISOString()
        },
        manufacturerCompliance: [
          {
            manufacturer: 'ABC Corporation',
            products: ['Product A', 'Product B'],
            status: 'current' as const,
            lastUpdated: '2024-01-15'
          },
          {
            manufacturer: 'XYZ Industries',
            products: ['Product C'],
            status: 'outdated' as const,
            alternatives: ['Alternative Product D'],
            lastUpdated: '2022-08-20'
          }
        ],
        codeCompliance: [
          {
            code: 'IBC 2021',
            section: 'Chapter 7 - Fire Resistance',
            status: 'compliant' as const,
            currentVersion: '2021',
            specifiedVersion: '2021',
            description: 'International Building Code compliance',
            recommendations: 'No action required'
          },
          {
            code: 'ADA Guidelines',
            section: 'Section 4.13 - Doors',
            status: 'requires-update' as const,
            currentVersion: '2010 ADA Standards',
            specifiedVersion: '1991 ADA Standards',
            description: 'Accessibility requirements',
            recommendations: 'Update to current ADA standards'
          }
        ],
        materialStandards: [
          {
            standard: 'ASTM C150',
            material: 'Portland Cement',
            status: 'compliant' as const,
            currentStandard: 'ASTM C150-22',
            specifiedStandard: 'ASTM C150-22',
            criticalityLevel: 'high' as const
          },
          {
            standard: 'ANSI A208.1',
            material: 'Particleboard',
            status: 'outdated' as const,
            currentStandard: 'ANSI A208.1-2009',
            specifiedStandard: 'ANSI A208.1-1999',
            criticalityLevel: 'medium' as const
          }
        ],
        sustainabilityMetrics: [
          {
            category: 'Energy Performance',
            metric: 'U-Value',
            value: '0.25 BTU/hr-ft²-°F',
            benchmark: '0.30 BTU/hr-ft²-°F',
            status: 'exceeds' as const,
            recommendations: 'Excellent thermal performance'
          },
          {
            category: 'Indoor Air Quality',
            metric: 'VOC Emissions',
            value: 'Not specified',
            benchmark: '< 0.5 mg/m³',
            status: 'not-specified' as const,
            recommendations: 'Specify low-VOC materials'
          }
        ],
        performanceSpecs: [
          {
            component: 'Insulation',
            specification: 'R-Value',
            measuredValue: 'R-30',
            requiredValue: 'R-25',
            status: 'pass' as const,
            testMethod: 'ASTM C518'
          },
          {
            component: 'Window Glazing',
            specification: 'SHGC',
            measuredValue: '0.45',
            requiredValue: '0.40',
            status: 'marginal' as const,
            testMethod: 'NFRC 200'
          }
        ],
        suggestions: [
          {
            section: '011000',
            type: 'improvement' as const,
            message: 'Consider adding more specific quality control measures',
            priority: 'medium' as const
          },
          {
            section: '013300',
            type: 'warning' as const,
            message: 'Submittal schedule may conflict with project timeline',
            priority: 'high' as const
          }
        ]
      };

      // Update to completed with results
      setUploadedFiles(prev => 
        prev.map(f => f.id === newFile.id ? { 
          ...f, 
          status: 'processed',
          analysisResults 
        } : f)
      );

      setProcessingStatus(null);
      return newFile;
    }
  });

  const uploadSpecification = (file: File) => {
    uploadMutation.mutate(file);
  };

  const getFileContent = (fileId: string): string | null => {
    return fileContents[fileId] || null;
  };

  return {
    uploadSpecification,
    uploadedFiles,
    processingStatus,
    isLoading: uploadMutation.isPending,
    getFileContent
  };
};
