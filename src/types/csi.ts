
export interface CSISection {
  number: string;
  title: string;
  parts: CSIPart[];
}

export interface CSIPart {
  number: string;
  title: string;
  subsections: CSISubsection[];
}

export interface CSISubsection {
  title: string;
  content: string;
  sourceCharter?: string;
}

export interface SpecificationData {
  projectName: string;
  projectNumber?: string;
  sections: CSISection[];
  generatedDate: string;
}

export interface CharterMapping {
  charterField: string;
  csiSection: string;
  csiPart: string;
  template: string;
}
