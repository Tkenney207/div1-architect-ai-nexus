
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
        console.log('File content extracted:', content.substring(0, 200) + '...');
        resolve(content);
      };
      
      reader.onerror = () => {
        reject(new Error('Failed to read file'));
      };
      
      // Handle different file types
      if (file.type.startsWith('text/') || file.name.endsWith('.txt')) {
        reader.readAsText(file);
      } else if (file.name.endsWith('.pdf')) {
        // For PDF files, simulate content extraction with more realistic content
        const pdfContent = `PDF SPECIFICATION DOCUMENT: ${file.name}

SECTION 1 - GENERAL REQUIREMENTS

1.1 SCOPE OF WORK
This specification covers the requirements for materials, equipment, and installation procedures for building construction projects.

1.2 RELATED SECTIONS
- Section 01 33 00 - Submittal Procedures
- Section 03 30 00 - Cast-in-Place Concrete
- Section 05 12 00 - Structural Steel Framing

1.3 REFERENCES
The following standards apply to this work:
- ASTM E84-20 - Standard Test Method for Surface Burning Characteristics
- IBC 2018 - International Building Code
- NFPA 101 - Life Safety Code

1.4 QUALITY ASSURANCE
All materials shall meet or exceed specified requirements. Testing shall be performed by certified laboratories.

SECTION 2 - PRODUCTS

2.1 MATERIALS
A. Steel: ASTM A36 structural steel, Grade 50
B. Concrete: Minimum 4000 psi compressive strength
C. Insulation: R-30 mineral wool insulation

2.2 EQUIPMENT
All equipment shall be new and include manufacturer's warranty.

SECTION 3 - EXECUTION

3.1 INSTALLATION
Installation shall be performed by qualified contractors in accordance with manufacturer's instructions and applicable codes.

END OF SPECIFICATION`;
        resolve(pdfContent);
      } else if (file.name.endsWith('.docx') || file.name.endsWith('.doc')) {
        // For Word documents, simulate content extraction
        const wordContent = `WORD SPECIFICATION DOCUMENT: ${file.name}

DIVISION 01 - GENERAL REQUIREMENTS

01 10 00 - SUMMARY
This project involves the construction of commercial building components with emphasis on compliance with current building codes and standards.

01 33 00 - SUBMITTAL PROCEDURES
1. Submit product data sheets for all specified materials
2. Provide installation instructions
3. Include warranty information

DIVISION 03 - CONCRETE

03 30 00 - CAST-IN-PLACE CONCRETE
A. Materials:
   1. Portland cement: ASTM C150, Type I
   2. Aggregate: ASTM C33, clean and well-graded
   3. Water: Clean, potable

B. Performance Requirements:
   1. Compressive strength: 4000 psi minimum at 28 days
   2. Slump: 4 inches maximum
   3. Air content: 6% ± 1%

DIVISION 05 - METALS

05 12 00 - STRUCTURAL STEEL FRAMING
A. Materials:
   1. Structural steel: ASTM A992, Grade 50
   2. Bolts: ASTM A325 high-strength bolts
   3. Welding electrodes: AWS D1.1

B. Installation:
   1. Erect steel in accordance with AISC specifications
   2. Field welding per approved procedures
   3. Apply primer coat after installation

Quality Control: All work subject to inspection and testing per project specifications.`;
        resolve(wordContent);
      } else {
        // For other file types, read as text
        reader.readAsText(file);
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
      console.log('File content extracted successfully:', {
        fileName: file.name,
        contentLength: content.length,
        contentPreview: content.substring(0, 150) + '...'
      });

      // Update file with content immediately
      setUploadedFiles(prev => 
        prev.map(f => 
          f.id === fileId 
            ? { ...f, status: 'processing', content: content }
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
            ? { ...f, status: 'processed', analysisResults, content: content }
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
    console.log('Getting file content for:', fileId, {
      found: !!file,
      hasContent: !!file?.content,
      contentLength: file?.content?.length || 0
    });
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
