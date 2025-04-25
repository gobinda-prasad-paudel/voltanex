import { Project, Certificate, Website, SocialLink } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, and payment processing.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://example.com/',
    github: 'https://github.com/'
  },
  {
    id: 2,
    title: 'PTMS',
    description: 'A public transportation management system that allows users to track and manage public transport schedules and routes.',
    image: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    link: 'https://example.com/',
    github: 'https://github.com/'
  },
  {
    id: 3,
    title: 'Weather Forecast App',
    description: 'A real-time weather application with forecast data and location-based services.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['JavaScript', 'OpenWeather API', 'HTML/CSS'],
    link: 'https://example.com/',
    github: 'https://github.com/'
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'A comprehensive dashboard for managing and analyzing social media accounts and performance.',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'D3.js', 'Social APIs'],
    link: 'https://example.com/',
    github: 'https://github.com/'
  }
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Full-Stack Web Development',
    issuer: 'Udemy',
    date: 'January 2023',
    image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://udemy.com/certificate/123'
  },
  {
    id: 2,
    title: 'React Advanced Concepts',
    issuer: 'Frontend Masters',
    date: 'June 2023',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://frontendmasters.com/certificate/456'
  },
  {
    id: 3,
    title: 'UI/UX Design Fundamentals',
    issuer: 'Coursera',
    date: 'September 2023',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://coursera.org/certificate/789'
  }
];

export const websites: Website[] = [
  {
    id: 1,
    title: 'Fitness Studio Website',
    description: 'A modern, responsive website for a local fitness studio featuring class schedules and online booking.',
    image: 'https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://example.com/fitnessstudio',
    technologies: ['HTML/CSS', 'JavaScript', 'Booking API']
  },
  {
    id: 2,
    title: 'Restaurant Ordering System',
    description: 'An online ordering system for a restaurant chain with menu management and delivery tracking.',
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://example.com/restaurant',
    technologies: ['React', 'Node.js', 'PostgreSQL']
  },
  {
    id: 3,
    title: 'Photography Portfolio',
    description: 'A visually stunning portfolio website for a professional photographer with gallery features.',
    image: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://example.com/photography',
    technologies: ['React', 'Gatsby', 'Cloudinary']
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/gobinda-prasad-paudel",
    icon: "Github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/gobinda-prasad-paudel-aa9485218/",
    icon: "Linkedin"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/",
    icon: "Twitter"
  },
  {
    name: "Email",
    url: "mailto:gobindapaudelofficial@gmail.com",
    icon: "Mail"
  }
];

export const about = {
  name: 'Gobida Prasad Paudel',
  title: 'Full-Stack Developer',
  description: `I'm a passionate full-stack developer with over 5 years of experience creating web applications. Specializing in React, Node.js, and modern JavaScript frameworks, I focus on building responsive, user-friendly interfaces with clean, maintainable code.`,
  longDescription: `With a background in computer science and a passion for continuous learning, I've worked with startups and established companies to deliver high-quality software solutions. My approach combines technical expertise with an eye for design and user experience.

I enjoy tackling complex problems and turning ideas into reality through code. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge through technical writing and mentoring.`,
  image: '/images/photo1_cropped.jpg',
  location: 'Nepal',
  resumeUrl: '/cv(resume).pdf'
};

export const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 95 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'MongoDB', level: 75 },
  { name: 'PostgreSQL', level: 70 },
  // { name: 'AWS', level: 65 },
  // { name: 'Docker', level: 60 },
];