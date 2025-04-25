export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
}

export interface Website {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}