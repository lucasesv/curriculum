export interface Profile {
  description: string;
}

export interface Contact {
  description: string;
  url: string;
  icon: string;
}

export interface Experience {
  role: string;
  period: string;
  company: string;
  description: string;
}

export interface Skill {
  name: string;
  knowledge: number;
}

export interface Hobby {
  name: string;
  faIcon: string;
}