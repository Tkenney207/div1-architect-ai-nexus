
// ARCHIVED: CSI Types - Complete type definitions preserved for future restoration
// Original file: src/types/csi.ts

export interface CharterData {
  projectName: string;
  projectType: string;
  description: string;
  objectives: string[];
  scope: string;
  roles: {
    role: string;
    responsibility: string;
  }[];
  milestones: {
    milestone: string;
    date: string;
  }[];
  sustainabilityGoals?: string[];
  qualityRequirements?: string[];
  submittalProcedures?: string[];
  wasteManagement?: string[];
}

export interface CSIArticle {
  number: string;
  title: string;
  content: string;
  sourceType: 'charter' | 'template' | 'user';
  charterField?: string;
  suggestions?: string[];
}

export interface CSIPart {
  number: string;
  title: string;
  articles: CSIArticle[];
}

export interface CSISection {
  number: string;
  title: string;
  parts: CSIPart[];
}

export interface Division1Output {
  sections: CSISection[];
  metadata: {
    generatedDate: string;
    charterSource: string;
    completeness: number;
    missingFields: string[];
  };
}

export interface AITip {
  id: string;
  sectionNumber: string;
  type: 'suggestion' | 'warning' | 'missing';
  message: string;
  action?: string;
}

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
