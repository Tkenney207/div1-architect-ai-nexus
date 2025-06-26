
// Active CSI Types - Essential types for current functionality

export interface SpecificationFile {
  id: string;
  name: string;
  size: string;
  uploadDate: string;
  status: 'uploading' | 'processing' | 'processed' | 'error';
  analysisResults?: {
    overview: {
      overallCompliance: number;
      criticalIssues: number;
      suggestions: number;
    };
    codeCompliance: {
      code: string;
      description: string;
      status: 'compliant' | 'non-compliant' | 'requires-update';
      priority: 'high' | 'medium' | 'low';
    }[];
    suggestions: {
      section: string;
      type: 'warning' | 'improvement' | 'suggestion';
      message: string;
      priority: 'high' | 'medium' | 'low';
    }[];
  };
}

export interface ProcessingStatus {
  stage: string;
  progress: number;
  message: string;
}

// Placeholder to prevent build errors for other potential imports
export interface PlaceholderType {
  id: string;
}
