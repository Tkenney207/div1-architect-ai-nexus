
import { useState } from 'react';

export interface ProcessedDocument {
  id: string;
  filename: string;
  size: string;
  status: 'uploaded' | 'processing' | 'processed' | 'error';
  uploadedAt: string;
  processingSteps: ProcessingStep[];
  extractedSections?: SpecificationSection[];
  qualityMetrics?: QualityMetrics;
}

export interface ProcessingStep {
  name: string;
  status: 'pending' | 'processing' | 'completed' | 'error';
  progress: number;
  description: string;
}

export interface SpecificationSection {
  division: string;
  section: string;
  title: string;
  content: string;
  compliance: string[];
  conflicts: string[];
  confidence: number;
}

export interface QualityMetrics {
  textExtractionQuality: number;
  tableRecognition: number;
  csiClassificationConfidence: number;
  standardsComplianceScore: number;
  semanticSimilarity: number;
}

const mockProcessingSteps: ProcessingStep[] = [
  {
    name: 'Layout Analysis (LayoutLMv3)',
    status: 'completed',
    progress: 100,
    description: 'Document structure and layout analysis'
  },
  {
    name: 'Table Extraction',
    status: 'completed',
    progress: 100,
    description: 'Extracting tabular data and specifications'
  },
  {
    name: 'CSI Section Mapping',
    status: 'processing',
    progress: 75,
    description: 'Mapping content to CSI MasterFormat divisions'
  },
  {
    name: 'Compliance Validation',
    status: 'pending',
    progress: 25,
    description: 'Validating against industry standards'
  }
];

const mockSections: SpecificationSection[] = [
  {
    division: 'Division 03 - Concrete',
    section: '03 30 00',
    title: 'Cast-in-Place Concrete',
    content: 'Concrete specifications for structural applications...',
    compliance: ['ASTM C150'],
    conflicts: [],
    confidence: 96
  },
  {
    division: 'Division 05 - Metals',
    section: '05 12 00',
    title: 'Structural Steel Framing',
    content: 'Steel framing specifications and requirements...',
    compliance: ['AISC 360'],
    conflicts: [],
    confidence: 98
  },
  {
    division: 'Division 07 - Thermal/Moisture',
    section: '07 21 00',
    title: 'Thermal Insulation',
    content: 'Insulation specifications and performance criteria...',
    compliance: ['ASTM C518'],
    conflicts: ['Conflicting R-value requirements', 'Material compatibility issues'],
    confidence: 87
  }
];

export const useSpecificationProcessor = () => {
  const [documents, setDocuments] = useState<ProcessedDocument[]>([
    {
      id: '1',
      filename: 'Structural_Specs_v2.pdf',
      size: '2.4 MB',
      status: 'processed',
      uploadedAt: '2024-01-15T10:30:00Z',
      processingSteps: mockProcessingSteps.map(step => 
        step.name === 'CSI Section Mapping' ? { ...step, status: 'completed', progress: 100 } :
        step.name === 'Compliance Validation' ? { ...step, status: 'completed', progress: 100 } : step
      ),
      extractedSections: mockSections,
      qualityMetrics: {
        textExtractionQuality: 98.5,
        tableRecognition: 96.2,
        csiClassificationConfidence: 94.7,
        standardsComplianceScore: 92.1,
        semanticSimilarity: 95.3
      }
    },
    {
      id: '2',
      filename: 'MEP_Requirements.docx',
      size: '1.8 MB',
      status: 'processing',
      uploadedAt: '2024-01-15T11:15:00Z',
      processingSteps: mockProcessingSteps
    },
    {
      id: '3',
      filename: 'Architectural_Plans.pdf',
      size: '5.2 MB',
      status: 'uploaded',
      uploadedAt: '2024-01-15T11:45:00Z',
      processingSteps: mockProcessingSteps.map(step => ({ ...step, status: 'pending', progress: 0 }))
    }
  ]);

  const uploadDocument = async (file: File) => {
    const newDocument: ProcessedDocument = {
      id: Date.now().toString(),
      filename: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
      status: 'uploaded',
      uploadedAt: new Date().toISOString(),
      processingSteps: mockProcessingSteps.map(step => ({ ...step, status: 'pending', progress: 0 }))
    };

    setDocuments(prev => [...prev, newDocument]);

    // Simulate processing
    setTimeout(() => {
      setDocuments(prev => prev.map(doc => 
        doc.id === newDocument.id ? { ...doc, status: 'processing' } : doc
      ));
      
      // Simulate step-by-step processing
      simulateProcessing(newDocument.id);
    }, 1000);

    return newDocument;
  };

  const simulateProcessing = async (documentId: string) => {
    const steps = mockProcessingSteps;
    
    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setDocuments(prev => prev.map(doc => {
        if (doc.id === documentId) {
          const updatedSteps = [...doc.processingSteps];
          updatedSteps[i] = { ...updatedSteps[i], status: 'processing', progress: 50 };
          return { ...doc, processingSteps: updatedSteps };
        }
        return doc;
      }));

      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setDocuments(prev => prev.map(doc => {
        if (doc.id === documentId) {
          const updatedSteps = [...doc.processingSteps];
          updatedSteps[i] = { ...updatedSteps[i], status: 'completed', progress: 100 };
          
          // If this is the last step, mark document as processed
          const isLastStep = i === steps.length - 1;
          return { 
            ...doc, 
            processingSteps: updatedSteps,
            status: isLastStep ? 'processed' : 'processing',
            extractedSections: isLastStep ? mockSections : undefined,
            qualityMetrics: isLastStep ? {
              textExtractionQuality: 95.5 + Math.random() * 3,
              tableRecognition: 93.2 + Math.random() * 4,
              csiClassificationConfidence: 91.7 + Math.random() * 5,
              standardsComplianceScore: 89.1 + Math.random() * 6,
              semanticSimilarity: 92.1 + Math.random() * 4
            } : undefined
          };
        }
        return doc;
      }));
    }
  };

  const generateMasterSpecification = async () => {
    // Simulate master spec generation
    const processedDocs = documents.filter(doc => doc.status === 'processed');
    if (processedDocs.length === 0) return null;

    // This would normally call the AI synthesis engine
    return {
      title: 'AI-Generated Master Specification',
      sections: mockSections,
      generatedAt: new Date().toISOString(),
      sourceDocuments: processedDocs.map(doc => doc.filename)
    };
  };

  return {
    documents,
    uploadDocument,
    generateMasterSpecification
  };
};
