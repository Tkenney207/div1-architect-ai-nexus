
export interface CSISection {
  number: string;
  title: string;
  parts: CSIPart[];
}

export interface CSIPart {
  number: string;
  title: string;
  articles: CSIArticle[];
}

export interface CSIArticle {
  number: string;
  title: string;
  content: string;
  sourceType: 'charter' | 'template' | 'user';
  charterField?: string;
  suggestions?: string[];
}

export interface CharterData {
  projectName: string;
  projectType: string;
  description: string;
  objectives: string[];
  scope: string;
  roles: { role: string; responsibility: string }[];
  milestones: { milestone: string; date: string }[];
  sustainabilityGoals: string[];
  qualityRequirements: string[];
  budget?: number;
  timeline?: string;
  location?: string;
  submittalProcedures?: string[];
  wasteManagement?: string[];
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
  type: 'suggestion' | 'warning' | 'link' | 'missing';
  message: string;
  action?: string;
}
