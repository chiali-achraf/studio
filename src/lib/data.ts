import { Codepen, Github, Linkedin, Twitter, Code, Database, Server, Cog, School, Phone, Mail, type LucideIcon } from 'lucide-react';

export const GITHUB_USERNAME = "your-github-username";

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export const skills: Skill[] = [
  { name: 'React', icon: Code },
  { name: 'Next.js', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'Node.js', icon: Server },
  { name: 'Python', icon: Code },
  { name: 'SQL', icon: Database },
  { name: 'Firebase', icon: Database },
  { name: 'Tailwind CSS', icon: Code },
  { name: 'REST APIs', icon: Cog },
];

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export const education: Education[] = [
    {
        institution: 'University of Innovation',
        degree: 'B.S. in Computer Science',
        period: '2018 - 2022',
    },
    {
        institution: 'Code Academy',
        degree: 'Full-Stack Web Development',
        period: '2021',
    },
];


export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  image: string;
  imageAiHint: string;
}

export const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product listings, user authentication, and a shopping cart, built with a modern tech stack.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    liveUrl: '#',
    repoUrl: `https://github.com/${GITHUB_USERNAME}/project-1`,
    image: 'https://placehold.co/600x400.png',
    imageAiHint: 'online store',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets, providing insights through charts and graphs.',
    techStack: ['React', 'D3.js', 'Node.js', 'Express'],
    repoUrl: `https://github.com/${GITHUB_USERNAME}/project-2`,
    image: 'https://placehold.co/600x400.png',
    imageAiHint: 'dashboard charts',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application to help teams organize, track, and manage their work efficiently.',
    techStack: ['Vue.js', 'Firebase', 'Vuetify'],
    liveUrl: '#',
    repoUrl: `https://github.com/${GITHUB_USERNAME}/project-3`,
    image: 'https://placehold.co/600x400.png',
    imageAiHint: 'to-do list',
  },
    {
    title: 'Portfolio Website',
    description: 'This very portfolio website, designed to be a clean, modern, and responsive showcase of my development skills and projects.',
    techStack: ['Next.js', 'TypeScript', 'ShadCN UI', 'GenAI'],
    liveUrl: '#',
    repoUrl: `https://github.com/${GITHUB_USERNAME}/portfolio`,
    image: 'https://placehold.co/600x400.png',
    imageAiHint: 'developer portfolio',
  },
];

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: `https://github.com/${GITHUB_USERNAME}`, icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/your-linkedin-profile', icon: Linkedin },
  { name: 'Twitter', url: 'https://twitter.com/your-twitter-handle', icon: Twitter },
  { name: 'chsidahmed05@gmail.com', url: 'mailto:chsidahmed05@gmail.com', icon: Mail },
  { name: '+1 (234) 567-890', url: 'tel:+1234567890', icon: Phone },
];
