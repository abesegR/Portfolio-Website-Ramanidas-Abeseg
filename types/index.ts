// types/index.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: "completed" | "ongoing";
}

export interface Achievement {
  title: string;
  description: string;
  position: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  detail: string;
}
