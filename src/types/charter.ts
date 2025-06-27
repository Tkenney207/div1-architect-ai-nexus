
export interface ProjectCharter {
  id: string;
  projectId: string;
  version: string;
  createdAt: string;
  updatedAt: string;
  completionPercentage: number;
  
  // Section 1: Project Information
  projectInfo: {
    projectName: string;
    projectId: string;
    dateCreated: string;
    version: string;
    projectOwner: string;
    department: string;
    projectClassification: string[];
    otherClassification?: string;
  };
  
  // Section 2: Executive Summary & Purpose
  executiveSummary: {
    problemStatement: string;
    projectDescription: string;
    purposeStatement: string;
    strategicAlignment: string;
  };
  
  // Section 3: Vision, Values & Goals
  visionGoals: {
    projectVision: string;
    projectValues: string;
    primaryGoals: string;
    successMetrics: string;
    expectedOutcomes: string;
  };
  
  // Section 4: Project Scope & Deliverables
  scope: {
    included: string;
    excluded: string;
    keyDeliverables: string;
    assumptions: string;
  };
  
  // Section 5: Project Team & Governance
  teamGovernance: {
    governanceStructure: GovernanceRole[];
    teamStakeholders: TeamMember[];
  };
  
  // Section 6: Stakeholder Analysis
  stakeholderAnalysis: StakeholderAnalysis[];
  
  // Section 7: Timeline & Milestones
  timeline: {
    projectStartDate: string;
    targetCompletionDate: string;
    milestones: Milestone[];
  };
  
  // Section 8: Budget & Resources
  budget: {
    budgetBreakdown: BudgetItem[];
    budgetAuthority: string;
    totalProjectBudget: string;
    fundingSource: string;
    resourceRequirements: string;
  };
  
  // Section 9: Risk Assessment & Constraints
  riskAssessment: {
    risks: Risk[];
    projectConstraints: string;
    externalDependencies: string;
    internalDependencies: string;
  };
  
  // Section 10: Communication Plan
  communicationPlan: {
    internalStrategy: string;
    externalStrategy: string;
    reportingSchedule: string;
    communicationMethods: string;
  };
  
  // Section 11: Charter Approval
  approval: {
    approvals: Approval[];
  };
}

export interface GovernanceRole {
  id: string;
  role: string;
  name: string;
  responsibilities: string;
  authorityLevel: string;
  contactInfo: string;
}

export interface TeamMember {
  id: string;
  role: string;
  name: string;
  department: string;
  responsibilities: string;
  contact: string;
}

export interface StakeholderAnalysis {
  id: string;
  stakeholderGroup: string;
  interestImpact: string;
  influenceLevel: string;
  communicationNeeds: string;
}

export interface Milestone {
  id: string;
  phase: string;
  targetDate: string;
  keyActivities: string;
  dependencies: string;
  successCriteria: string;
}

export interface BudgetItem {
  id: string;
  category: string;
  estimatedCost: string;
  fundingSource: string;
  percentage: string;
}

export interface Risk {
  id: string;
  category: string;
  description: string;
  probability: string;
  impact: string;
  mitigationStrategy: string;
}

export interface Approval {
  id: string;
  role: string;
  name: string;
  signature: string;
  date: string;
}

export interface CharterSection {
  id: string;
  name: string;
  completed: boolean;
  completionPercentage: number;
  required: boolean;
}

export const PROJECT_CLASSIFICATIONS = [
  'Infrastructure',
  'Technology',
  'Process Improvement',
  'Construction/Renovation',
  'Compliance/Safety',
  'Strategic Initiative',
  'Community Engagement',
  'Creative/Marketing',
  'Other'
];

export const DEFAULT_GOVERNANCE_ROLES = [
  'Project Sponsor',
  'Project Manager',
  'Executive Committee',
  'Technical Advisory',
  'User/Operations Group'
];

export const DEFAULT_MILESTONES = [
  'Project Initiation',
  'Planning Phase',
  'Execution Phase',
  'Testing/Review',
  'Project Closure'
];

export const DEFAULT_BUDGET_CATEGORIES = [
  'Capital Expenditures',
  'Operating Expenses',
  'Professional Services',
  'Equipment/Materials',
  'Contingency',
  'Total Project Budget'
];

export const DEFAULT_APPROVAL_ROLES = [
  'Project Sponsor',
  'Project Manager',
  'Executive Sponsor',
  'Department Head',
  'Budget/Finance Approval'
];
