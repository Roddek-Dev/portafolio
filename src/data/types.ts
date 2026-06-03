export interface Bio {
  name: string;
  role: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  location?: string;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Achievement {
  title: string;
  description: string;
  year: string;
}

export interface Contact {
  name: string;
  email: string;
  phone?: string;
  location: string;
  portfolio?: string;
}

export interface SocialLink {
  href: string;
  label: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}
