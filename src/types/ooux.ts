
// Core OOUX Object Definitions for Div1 Platform

export interface BaseObject {
  id: string;
  createdAt: string;
  updatedAt: string;
  owner: string;
}

// Core Objects
export interface Project extends BaseObject {
  name: string;
  description: string;
  type: 'commercial' | 'residential' | 'healthcare' | 'industrial' | 'mixed-use';
  status: 'planning' | 'charter-complete' | 'in-progress' | 'review' | 'completed';
  budget?: number;
  timeline?: string;
  location?: string;
  vision?: string;
  objectives: string[];
  constraints: string[];
  sustainabilityGoals: string[];
  qualityRequirements: string[];
  
  // Relationships
  charter?: Charter;
  division1?: Division1Spec;
  specifications: Specification[];
  stakeholders: Stakeholder[];
  sessions: Session[];
}

export interface Charter extends BaseObject {
  projectId: string;
  completionStatus: 'draft' | 'in-progress' | 'complete';
  stakeholderInputs: StakeholderInput[];
  aiInsights: string[];
  
  // Charter-specific attributes
  scope: string;
  roles: { role: string; responsibility: string }[];
  milestones: { milestone: string; date: string }[];
  submittalProcedures: string[];
  wasteManagement: string[];
}

export interface Division1Spec extends BaseObject {
  projectId: string;
  charterId: string;
  status: 'draft' | 'generated' | 'reviewed' | 'approved';
  sections: CSISection[];
  completeness: number;
  missingFields: string[];
  exportFormats: ('docx' | 'pdf' | 'xml')[];
}

export interface Specification extends BaseObject {
  projectId: string;
  division: string;
  section: string;
  title: string;
  content: string;
  status: 'draft' | 'review' | 'approved';
  compliance: ComplianceCheck[];
}

export interface User extends BaseObject {
  email: string;
  name: string;
  role: 'architect' | 'engineer' | 'contractor' | 'owner' | 'admin';
  permissions: Permission[];
  preferences: UserPreferences;
  
  // Relationships
  projects: Project[];
  sessions: Session[];
}

export interface Session extends BaseObject {
  userId: string;
  projectId?: string;
  type: 'charter-interview' | 'specification-review' | 'collaboration';
  duration: number;
  interactions: Interaction[];
  aiRecommendations: string[];
}

export interface Stakeholder extends BaseObject {
  projectId: string;
  role: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  interviewLink?: string;
  responses: StakeholderInput[];
}

export interface Tool extends BaseObject {
  name: 'engage' | 'division1' | 'master1';
  status: 'available' | 'maintenance' | 'deprecated';
  capabilities: string[];
  integrations: Integration[];
}

// Supporting Types
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

export interface StakeholderInput {
  question: string;
  answer: string;
  timestamp: string;
  stakeholderId: string;
}

export interface ComplianceCheck {
  standard: string;
  status: 'compliant' | 'non-compliant' | 'needs-review';
  details: string;
}

export interface Permission {
  action: string;
  resource: string;
  granted: boolean;
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  notifications: boolean;
  defaultExportFormat: 'docx' | 'pdf' | 'xml';
}

export interface Interaction {
  type: 'message' | 'edit' | 'export' | 'review';
  data: any;
  timestamp: string;
}

export interface Integration {
  name: string;
  type: 'bim360' | 'procore' | 'revit' | 'api';
  status: 'active' | 'inactive';
  config: any;
}

// OOUX Action Definitions
export type ObjectActions = {
  Project: 'create' | 'view' | 'edit' | 'delete' | 'duplicate' | 'archive' | 'share' | 'export';
  Charter: 'start' | 'continue' | 'complete' | 'review' | 'edit' | 'regenerate';
  Division1Spec: 'generate' | 'edit' | 'review' | 'approve' | 'export' | 'share';
  Specification: 'create' | 'edit' | 'review' | 'approve' | 'validate' | 'export';
  User: 'invite' | 'edit' | 'deactivate' | 'assign-role' | 'view-activity';
  Session: 'start' | 'pause' | 'resume' | 'end' | 'review' | 'export';
  Stakeholder: 'add' | 'invite' | 'interview' | 'follow-up' | 'remove';
  Tool: 'access' | 'configure' | 'integrate' | 'update';
};

// Object Relationship Map
export interface ObjectRelationships {
  Project: {
    hasOne: ['Charter', 'Division1Spec'];
    hasMany: ['Specification', 'Stakeholder', 'Session'];
    belongsTo: ['User'];
  };
  Charter: {
    belongsTo: ['Project'];
    hasMany: ['StakeholderInput'];
  };
  Division1Spec: {
    belongsTo: ['Project', 'Charter'];
    hasMany: ['CSISection'];
  };
  Specification: {
    belongsTo: ['Project'];
    hasMany: ['ComplianceCheck'];
  };
  User: {
    hasMany: ['Project', 'Session'];
  };
  Session: {
    belongsTo: ['User', 'Project'];
    hasMany: ['Interaction'];
  };
  Stakeholder: {
    belongsTo: ['Project'];
    hasMany: ['StakeholderInput'];
  };
}
