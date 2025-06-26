
// Active CSI Types - Essential types for current functionality

export interface SpecificationFile {
  id: string;
  name: string;
  size: string;
  uploadDate: string;
  status: 'uploading' | 'processing' | 'processed' | 'error';
  analysisResults?: DocumentAnalysis;
}

export interface ProcessingStatus {
  stage: string;
  progress: number;
  message: string;
}

export interface DocumentAnalysis {
  manufacturerCompliance: ManufacturerAnalysis[];
  codeCompliance: CodeCompliance[];
  materialStandards: MaterialStandard[];
  sustainabilityMetrics: SustainabilityMetric[];
  performanceSpecs: PerformanceSpec[];
  overview: AnalysisOverview;
  suggestions: Suggestion[];
}

export interface ManufacturerAnalysis {
  manufacturer: string;
  products: string[];
  status: 'current' | 'outdated' | 'discontinued';
  alternatives?: string[];
  lastUpdated: string;
}

export interface CodeCompliance {
  code: string;
  section: string;
  status: 'compliant' | 'non-compliant' | 'requires-update';
  currentVersion: string;
  specifiedVersion: string;
  description: string;
  recommendations?: string;
}

export interface MaterialStandard {
  standard: string;
  material: string;
  status: 'compliant' | 'outdated' | 'missing';
  currentStandard: string;
  specifiedStandard: string;
  criticalityLevel: 'high' | 'medium' | 'low';
}

export interface SustainabilityMetric {
  category: string;
  metric: string;
  value: string;
  benchmark: string;
  status: 'exceeds' | 'meets' | 'below' | 'not-specified';
  recommendations?: string;
}

export interface PerformanceSpec {
  component: string;
  specification: string;
  measuredValue: string;
  requiredValue: string;
  status: 'pass' | 'fail' | 'marginal';
  testMethod: string;
}

export interface AnalysisOverview {
  overallCompliance: number;
  criticalIssues: number;
  warningsCount: number;
  upToDatePercentage: number;
  lastReviewDate: string;
}

export interface Suggestion {
  section: string;
  type: 'warning' | 'improvement' | 'suggestion';
  message: string;
  priority: 'high' | 'medium' | 'low';
}

// Placeholder to prevent build errors for other potential imports
export interface PlaceholderType {
  id: string;
}
