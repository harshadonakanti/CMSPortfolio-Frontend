import {  
  FaReact, 
  FaServer, 
  FaMobileAlt, 
  FaTools, 
  FaNodeJs, 
  FaDatabase, 
  FaCloud 
} from 'react-icons/fa';

import p1 from "../assets/project1.png";

export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'Vue.js', 'Angular', 'TypeScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'Django', 'Laravel']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
  },
  {
    title: 'Mobile Development',
    icon: FaMobileAlt,
    description: 'Building cross-platform mobile applications with modern tools.',
    tags: ['React Native', 'Flutter', 'Ionic', 'Swift']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments. Still at learning phase.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Figma']
  }
];

export const projects = [
  {
    title: "Election Survey through Advanced Voting System",
    description:
      "I built a secure online voting system using Bcrypt and AES-256 encryption, with multi-factor authentication and role-based access. The responsive UI provides smooth workflows, real-time validation, and trusted voting integrity.",
    image: p1,  
    tech: ["React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase], 
    demo: "https://electionfrontend-five.vercel.app/admin_login",
    code: "#",
  },
  {
    title: "Airbnb Clone — JavaScript, Node.js, MongoDB, Express",
    description:
      "I built a scalable full-stack web application using the MVC architecture and RESTful APIs. It includes secure authentication, efficient listing management, and a clean, responsive interface built with Bootstrap.",
    image:
      "https://images.unsplash.com/photo-1600132806608-231446b2e7af?q=80&w=1074&auto=format&fit=crop",
    tech: ["JavaScript", "Node.js", "MongoDB", "Express"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "https://github.com/harshadonakanti/airbnb-clone",
    code: "",
  }
];
