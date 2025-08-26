import { Codepen, Github, Linkedin, Twitter, Code, Database, Server, Cog, School, Phone, Mail, type LucideIcon, Facebook } from 'lucide-react';

export const GITHUB_USERNAME = "your-github-username";

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export const skills: Skill[] = [
  { name: 'Android', icon: Code },
  { name: 'Kotlin', icon: Code },
  { name: 'Jetpack Compose', icon: Code },
  { name: 'Multimodule', icon: Code },
  { name: 'Dependency Injection', icon: Code },
  { name: 'Solid Principles', icon: Code },
  { name: 'REST API', icon: Cog },
    { name: 'SCRUM', icon: Cog },

  { name: 'Clean Code', icon: Code },
  { name: 'architecture designs', icon: Code },
  { name: 'Reactive Programming', icon: Code },
  { name: 'Flutter', icon: Code },
  { name: 'Git/GitHub', icon: Code },
  { name: 'KMP (Kotlin Multiplatform)', icon: Code },
  { name: 'Spring boot', icon: Code },
  { name: 'Security', icon: Code },
  { name: 'MySQL', icon: Database },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Firebase', icon: Database },
  { name: 'Supabase', icon: Database },
  { name: 'MongoDb', icon: Database },

];


export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export const education: Education[] = [
    {
        institution: 'University of AbuBakr Belkaid',
        degree: 'B.S. in Computer Science',
        period: '2021 - ',
    },
    {
        institution: 'license degree',
        degree: 'Full-Stack medical platform',
        period: '2024',
    },
    {
       
  institution: 'Bac ',
  degree: '– Mathematics Branch',
  period: '2021 ',
}
    
];


export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  images: string[]; // Array of image paths (strings)
  imageAiHint: string; // Single AI hint for all images in the project
}

export const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce app with product listings, user authentication, and a shopping cart, built with a modern tech stack.',
    techStack: ['Flutter','PostgreSQL','Supabase'],
    liveUrl: '#',
    images: [
      '/images/picture4.jpg',
      "/images/picture1.png",
      "/images/picture2.png",
      "/images/picture3.png",
    ],
    imageAiHint: 'online store',
  },
  {
    title: 'TabibTime Platform',
    description: 'A mobile app for patients and doctors to manage appointments, with an admin dashboard built for web.',
    techStack: [ 'Flutter', 'Firebase', 'GitHub'],
    images: [
      "/images/tabib1.jpg",
      "/images/tabib2.jpg",
      "/images/tabib3.jpg",
      "/images/tabib4.jpg"
    ],
    imageAiHint: 'dashboard charts',
  },
  {
    title: 'CryptoTracker',
    description: 'An Android app for tracking cryptocurrencies and coins in real-time.',
    techStack: ['Kotlin', 'REST API'],
    liveUrl: '#',
    images: [
      "/images/crypto1.jpg",
      "/images/crypto2.jpg",
    ],
    imageAiHint: 'crypto tracker',
  },
  {
    title: 'Tashile',
    description: 'i was member and team leader for platform that connects people with craftsmen to simplify collaboration and service access.',
    techStack: [ 'Kotlin', 'Firebase', 'Spring Boot','MongoDB','jira'],
    liveUrl: '#',
    images: [
      "/images/tashile1.jpg",
      "/images/tashile2.jpg",
      "/images/tashile3.jpg",

    ],
    imageAiHint: 'craftsmen platform',
  },
  {
    title: 'Books App',
    description: 'A Small Application to test Kotlin multiplatform features like LocalStorage , pagination ,apiCAll ',
    techStack: ['Kotlin multiPlateform'],
    liveUrl: '#',
    images: [
   '/images/kmp1.jpg',
'/images/kmp2.jpg'


  
    ],
    imageAiHint: 'charity platform',
  },
];

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/your-linkedin-profile', icon: Linkedin },
  { name: 'Discord', url: 'https://twitter.com/your-twitter-handle', icon: Twitter },
{ 
  name: 'Facebook', 
  url: 'https://www.facebook.com/sidahmed.ch.495305', 
  icon: Facebook 
},  { name: '+213 799533145', url: 'tel:213 799533145', icon: Phone },
];
