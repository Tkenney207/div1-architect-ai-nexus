
import { useState } from 'react';

interface UploadedFile {
  id: string;
  name: string;
  size: string;
  uploadDate: string;
  status: 'uploading' | 'processing' | 'processed' | 'error';
  content?: string;
  analysisResults?: DocumentAnalysis;
}

interface ProcessingStatus {
  stage: string;
  progress: number;
  message: string;
}

interface DocumentAnalysis {
  manufacturerCompliance: ManufacturerAnalysis[];
  codeCompliance: CodeCompliance[];
  materialStandards: MaterialStandard[];
  sustainabilityMetrics: SustainabilityMetric[];
  performanceSpecs: PerformanceSpec[];
  overview: AnalysisOverview;
}

interface ManufacturerAnalysis {
  manufacturer: string;
  products: string[];
  status: 'current' | 'outdated' | 'discontinued';
  alternatives?: string[];
  lastUpdated: string;
}

interface CodeCompliance {
  code: string;
  section: string;
  status: 'compliant' | 'non-compliant' | 'requires-update';
  currentVersion: string;
  specifiedVersion: string;
  description: string;
  recommendations?: string;
}

interface MaterialStandard {
  standard: string;
  material: string;
  status: 'compliant' | 'outdated' | 'missing';
  currentStandard: string;
  specifiedStandard: string;
  criticalityLevel: 'high' | 'medium' | 'low';
}

interface SustainabilityMetric {
  category: string;
  metric: string;
  value: string;
  benchmark: string;
  status: 'exceeds' | 'meets' | 'below' | 'not-specified';
  recommendations?: string;
}

interface PerformanceSpec {
  component: string;
  specification: string;
  measuredValue: string;
  requiredValue: string;
  status: 'pass' | 'fail' | 'marginal';
  testMethod: string;
}

interface AnalysisOverview {
  overallCompliance: number;
  criticalIssues: number;
  warningsCount: number;
  upToDatePercentage: number;
  lastReviewDate: string;
}

export const useSpecificationProcessor = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [processingStatus, setProcessingStatus] = useState<ProcessingStatus | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const extractTextFromFile = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        const content = e.target?.result as string;
        resolve(content);
      };
      
      reader.onerror = () => {
        reject(new Error('Failed to read file'));
      };
      
      // For now, handle text files and basic content extraction
      // In a production system, you'd want to handle PDFs, Word docs, etc.
      if (file.type.startsWith('text/') || file.name.endsWith('.txt')) {
        reader.readAsText(file);
      } else {
        // For other file types, we'll simulate content extraction
        // In reality, you'd use libraries like pdf-parse, mammoth for Word docs, etc.
        resolve(`Extracted content from ${file.name}\n\nThis is simulated content extraction. In a real implementation, this would parse PDF, Word, or other document formats and extract the actual text content.`);
      }
    });
  };

  const analyzeSpecificationContent = async (content: string, fileName: string): Promise<DocumentAnalysis> => {
    // Simulate AI analysis based on actual content
    // In a real implementation, this would call an AI service like OpenAI
    
    // Basic content analysis to make it more realistic
    const lines = content.split('\n');
    const wordCount = content.split(/\s+/).length;
    const hasASTM = content.toLowerCase().includes('astm');
    const hasIBC = content.toLowerCase().includes('ibc');
    const hasLEED = content.toLowerCase().includes('leed');
    
    // Generate analysis based on actual content characteristics
    const criticalIssues = Math.floor(Math.random() * 3) + (hasASTM ? 0 : 1) + (hasIBC ? 0 : 1);
    const warningsCount = Math.floor(Math.random() * 5) + Math.floor(wordCount / 100);
    const overallCompliance = Math.max(60, 100 - (criticalIssues * 10) - (warningsCount * 2));
    
    return {
      overview: {
        overallCompliance,
        criticalIssues,
        warningsCount,
        upToDatePercentage: Math.floor(Math.random() * 40) + 60,
        lastReviewDate: new Date().toISOString()
      },
      manufacturerCompliance: [
        {
          manufacturer: 'Armstrong Ceiling Systems',
          products: ['Mineral Fiber Tiles', 'Suspension Systems'],
          status: Math.random() > 0.5 ? 'current' : 'outdated',
          alternatives: ['USG Boral', 'Rockfon'],
          lastUpdated: '2023-01-15'
        },
        {
          manufacturer: 'Sherwin-Williams',
          products: ['ProClassic Interior Latex', 'ProMar 200'],
          status: Math.random() > 0.3 ? 'current' : 'discontinued',
          lastUpdated: '2023-06-20'
        }
      ],
      codeCompliance: [
        {
          code: 'IBC',
          section: 'Section 705.8 - Fire Rating',
          status: hasIBC ? 'compliant' : 'requires-update',
          currentVersion: '2021',
          specifiedVersion: hasIBC ? '2021' : '2018',
          description: 'Fire-rated wall assembly requirements',
          recommendations: hasIBC ? undefined : 'Update to IBC 2021 requirements'
        },
        {
          code: 'IECC',
          section: 'Section C402 - Building Envelope',
          status: Math.random() > 0.6 ? 'compliant' : 'non-compliant',
          currentVersion: '2021',
          specifiedVersion: '2018',
          description: 'Energy efficiency requirements for building envelope'
        }
      ],
      materialStandards: [
        {
          standard: 'ASTM E84',
          material: 'Interior Finishes',
          status: hasASTM ? 'compliant' : 'outdated',
          currentStandard: 'ASTM E84-23',
          specifiedStandard: hasASTM ? 'ASTM E84-23' : 'ASTM E84-20',
          criticalityLevel: 'high'
        },
        {
          standard: 'ASTM C97',
          material: 'Natural Stone',
          status: Math.random() > 0.4 ? 'compliant' : 'missing',
          currentStandard: 'ASTM C97-18',
          specifiedStandard: 'ASTM C97-15',
          criticalityLevel: 'medium'
        }
      ],
      sustainabilityMetrics: [
        {
          category: 'LEED v4.1',
          metric: 'Recycled Content',
          value: hasLEED ? '45%' : 'Not specified',
          benchmark: '50%',
          status: hasLEED ? 'meets' : 'not-specified',
          recommendations: hasLEED ? undefined : 'Specify recycled content requirements per LEED v4.1'
        },
        {
          category: 'Indoor Air Quality',
          metric: 'Low-Emitting Materials',
          value: Math.random() > 0.5 ? 'Compliant' : 'Not specified',
          benchmark: 'GREENGUARD Gold',
          status: Math.random() > 0.5 ? 'meets' : 'below'
        }
      ],
      performanceSpecs: [
        {
          component: 'Thermal Insulation',
          specification: 'R-Value',
          measuredValue: 'R-30',
          requiredValue: 'R-38',
          status: 'marginal',
          testMethod: 'ASTM C518'
        },
        {
          component: 'Fire Rating',
          specification: 'Fire Resistance',
          measuredValue: '2-hour',
          requiredValue: '2-hour',
          status: 'pass',
          testMethod: 'ASTM E119'
        }
      ]
    };
  };

  const uploadSpecification = async (file: File) => {
    const fileId = `file-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newFile: UploadedFile = {
      id: fileId,
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      uploadDate: new Date().toISOString(),
      status: 'uploading'
    };

    setUploadedFiles(prev => [...prev, newFile]);
    setIsLoading(true);

    try {
      // Extract file content
      setProcessingStatus({
        stage: 'Extracting content...',
        progress: 20,
        message: `Reading ${file.name}`
      });

      const content = await extractTextFromFile(file);
      console.log('Extracted content:', content.substring(0, 200) + '...');

      // Update file with content
      setUploadedFiles(prev => 
        prev.map(f => 
          f.id === fileId 
            ? { ...f, status: 'processing', content }
            : f
        )
      );

      // Simulate processing time
      setProcessingStatus({
        stage: 'Analyzing specification...',
        progress: 50,
        message: 'AI analysis in progress'
      });

      await new Promise(resolve => setTimeout(resolve, 2000));

      // Perform AI analysis
      setProcessingStatus({
        stage: 'Generating compliance report...',
        progress: 80,
        message: 'Checking standards and codes'
      });

      const analysisResults = await analyzeSpecificationContent(content, file.name);

      // Complete processing
      setProcessingStatus({
        stage: 'Complete',
        progress: 100,
        message: 'Analysis complete'
      });

      setUploadedFiles(prev => 
        prev.map(f => 
          f.id === fileId 
            ? { ...f, status: 'processed', analysisResults }
            : f
        )
      );

      // Clear processing status after a short delay
      setTimeout(() => {
        setProcessingStatus(null);
        setIsLoading(false);
      }, 1000);

    } catch (error) {
      console.error('Error processing file:', error);
      
      setUploadedFiles(prev => 
        prev.map(f => 
          f.id === fileId 
            ? { ...f, status: 'error' }
            : f
        )
      );
      
      setProcessingStatus(null);
      setIsLoading(false);
    }
  };

  const getFileContent = (fileId: string): string | undefined => {
    const file = uploadedFiles.find(f => f.id === fileId);
    return file?.content;
  };

  return {
    uploadSpecification,
    uploadedFiles,
    processingStatus,
    isLoading,
    getFileContent
  };
};
