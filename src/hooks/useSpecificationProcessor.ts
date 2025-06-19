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
      // For text files, use FileReader
      if (file.type.startsWith('text/') || file.name.endsWith('.txt')) {
        const reader = new FileReader();
        
        reader.onload = (e) => {
          const content = e.target?.result as string;
          console.log('Successfully extracted text file content:', {
            fileName: file.name,
            fileType: file.type,
            contentLength: content.length,
            contentPreview: content.substring(0, 200) + '...'
          });
          resolve(content);
        };
        
        reader.onerror = () => {
          console.error('Failed to read text file:', file.name);
          reject(new Error('Failed to read file'));
        };
        
        reader.readAsText(file);
      } else {
        // For binary files (PDF, Word), generate realistic specification content
        // In a real implementation, you'd use libraries like pdf-parse or mammoth
        console.log('Generating mock content for binary file:', file.name);
        const content = generateMockSpecificationContent(file.name);
        
        console.log('Successfully generated mock content:', {
          fileName: file.name,
          fileType: file.type,
          contentLength: content.length,
          contentPreview: content.substring(0, 200) + '...'
        });
        
        resolve(content);
      }
    });
  };

  const generateMockSpecificationContent = (fileName: string): string => {
    return `SPECIFICATION DOCUMENT: ${fileName}

DIVISION 01 - GENERAL REQUIREMENTS

01 10 00 - SUMMARY
This project involves the construction of commercial building components with emphasis on compliance with current building codes and standards.

01 33 00 - SUBMITTAL PROCEDURES
1. Submit product data sheets for all specified materials
2. Provide installation instructions from manufacturers
3. Include warranty information and certificates of compliance

DIVISION 03 - CONCRETE

03 30 00 - CAST-IN-PLACE CONCRETE
A. Materials:
   1. Portland cement: ASTM C150, Type I
   2. Coarse aggregate: ASTM C33, clean and well-graded
   3. Fine aggregate: ASTM C33, clean sand
   4. Water: Clean, potable water free from deleterious substances

B. Performance Requirements:
   1. Compressive strength: 4000 psi minimum at 28 days
   2. Slump: 4 inches maximum unless otherwise specified
   3. Air content: 6% ± 1% for exposed concrete
   4. Maximum water-cement ratio: 0.45

C. Admixtures:
   1. Water-reducing admixtures: ASTM C494, Type A
   2. Air-entraining admixtures: ASTM C260
   3. High-range water reducers: ASTM C494, Type F or G

DIVISION 05 - METALS

05 12 00 - STRUCTURAL STEEL FRAMING
A. Materials:
   1. Structural steel: ASTM A992, Grade 50 for wide-flange sections
   2. Steel plates: ASTM A36 for general structural use
   3. Bolts: ASTM A325 high-strength bolts for structural connections
   4. Welding electrodes: AWS D1.1, E70XX series

B. Fabrication:
   1. Shop fabrication per AISC 303 Code of Standard Practice
   2. Welding per AWS D1.1 Structural Welding Code
   3. Surface preparation: SSPC-SP 6 commercial blast cleaning

C. Installation:
   1. Erect steel per AISC 303 and project drawings
   2. Field welding per approved welding procedures
   3. Apply shop primer after fabrication: zinc-rich primer

DIVISION 07 - THERMAL AND MOISTURE PROTECTION

07 21 00 - THERMAL INSULATION
A. Rigid Board Insulation:
   1. Polyisocyanurate foam board: ASTM C1289
   2. R-value: R-30 minimum for roof applications
   3. Thickness: As required to achieve specified R-value
   4. Fire rating: Class A per UL 723

B. Batt Insulation:
   1. Mineral wool: ASTM C665, unfaced
   2. R-value: R-19 for wall cavities
   3. Density: 0.5 to 1.0 pcf
   4. Flame spread: 25 maximum per ASTM E84

DIVISION 08 - OPENINGS

08 11 00 - METAL DOORS AND FRAMES
A. Steel Doors:
   1. Hollow metal doors: 18-gauge steel face sheets
   2. Core: Honeycomb or foam core as specified
   3. Hardware prep: Factory prepared for specified hardware
   4. Finish: Factory primer, ready for field painting

B. Door Frames:
   1. Hollow metal frames: 16-gauge steel minimum
   2. Welded construction with ground smooth joints
   3. Anchor system: Masonry anchors or structural attachment
   4. Weatherstripping: Continuous around frame perimeter

DIVISION 09 - FINISHES

09 51 00 - ACOUSTICAL CEILINGS
A. Ceiling Tiles:
   1. Armstrong Ultima Vector mineral fiber tiles
   2. Size: 24" x 24" x 5/8" thick
   3. Edge detail: Square lay-in edge
   4. Light reflectance: 0.83 minimum
   5. Fire rating: Class A per UL 723

B. Suspension System:
   1. Armstrong Prelude XL 15/16" grid system
   2. Main runners: Cold-rolled steel, 1-1/2" wide
   3. Cross tees: Matching main runners
   4. Hanger wires: 12-gauge galvanized steel
   5. Seismic bracing: Per local building codes

09 91 00 - PAINTING
A. Interior Paint:
   1. Primer: High-quality latex primer sealer
   2. Finish: Two coats premium latex paint
   3. Sheen: Eggshell for walls, semi-gloss for trim
   4. Color: As selected by architect

B. Surface Preparation:
   1. Clean all surfaces of dirt, grease, and loose material
   2. Sand smooth all rough areas
   3. Fill nail holes and imperfections
   4. Prime all bare surfaces before finish coating

QUALITY ASSURANCE AND CONTROL
All materials and installation procedures shall comply with:
- International Building Code (IBC 2018)
- International Energy Conservation Code (IECC 2018)
- Americans with Disabilities Act (ADA) requirements
- Local building codes and regulations
- Manufacturer's installation instructions
- Industry standard practices

Testing and inspection shall be performed by qualified third-party agencies.
All work shall be guaranteed for a period of one year from date of substantial completion.

SUSTAINABILITY REQUIREMENTS
This project shall incorporate sustainable building practices including:
- Use of recycled content materials where possible
- Low-emitting materials for indoor air quality
- Energy-efficient systems and components
- Water conservation measures
- Waste reduction during construction

END OF SPECIFICATION

This document represents a comprehensive specification covering multiple construction divisions with detailed requirements for materials, installation, and quality control measures.`;
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
      console.log('File content extracted successfully for upload:', {
        fileName: file.name,
        contentLength: content.length,
        contentPreview: content.substring(0, 150) + '...'
      });

      // Update file with content immediately after extraction
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

      console.log('File processing completed:', {
        fileId,
        fileName: file.name,
        hasContent: !!content,
        contentLength: content.length,
        hasAnalysis: !!analysisResults
      });

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
    console.log('Getting file content for viewer:', fileId, {
      found: !!file,
      hasContent: !!file?.content,
      contentLength: file?.content?.length || 0,
      status: file?.status
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
