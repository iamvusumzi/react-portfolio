export interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
  tech: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  githubLink: string;
  liveDemoLink?: string;
  image?: string;
}

export const experience: Experience[] = [
  {
    company: "Amazon Web Services",
    role: "Software Development Engineer",
    period: "07/2022 — 03/2024",
    achievements: [
      'Modernised & Scaled Legacy Infrastructure: Spearheaded the migration of the core "Service States" feature from a regional Ruby on Rails package to a global, cloud-native Python/Flask architecture, unifying the dashboard experience across all AWS regions.',
      'Prevented Production Outages: Led the end-to-end delivery of the "Maintenance Events Visibility" system (React/Python), providing operators with proactive alerts and remedial workflows to identify and fix at-risk hosts before availability was impacted.',
      'Reduced Engineering Support Load: Designed and built the "Workflow Blockage Signaling" feature, which analyzed complex error states and guided customers to self-resolution, significantly reducing the volume of manual support tickets.',
      "Enhanced System Reliability: Improved critical operational hygiene by refactoring legacy Java logic and implementing automated self-healing fixes for recurring host errors, creating a more predictable and resilient control plane.",
    ],
    tech: [
      "Java",
      "Python",
      "Rugby on Rails",
      "React",
      "CI/CD",
      "Linux",
      "Bash",
      "JSON Query Language",
    ],
  },
  {
    company: "University of the Western Cape",
    role: "Tutor - Statistics Department",
    period: "09/2021 — 12/2021",
    achievements: [
      "Tutored first year students in statistics, improving understanding and problem-solving skills.",
      "Supported coursework and exam prep in a collaborative learning environment.",
    ],
    tech: ["Microsoft Office", "Excel", "WhatsApp"],
  },
];

export const education: Education[] = [
  {
    institution: "University of the Western Cape",
    degree: "BSc Computer Science",
    period: "2017 — 2021",
    description: "Data Structures, Algorithms, Databases, Software Engineering",
  },
  {
    institution: "Malikhanye Senior Secondary School",
    degree: "National Senior Certificate",
    period: "2016 — 2017",
    description:
      "Distinction in Mathematics, Physical Sciences and Life Sciences",
  },
];

export const projects: Project[] = [
  {
    title: "JobHunter ",
    description:
      "A serverless, event-driven job discovery and scoring platform featuring cost-optimised edge delivery, asynchronous ingestion and processing, resilient data pipelines, and quota-aware AI integration designed for reliability and observability.",
    tech: [
      "Java (Spring Boot)",
      "Python",
      "React, AWS Lambda, SQS, CloudFront",
      "Neon (PostgreSQL)",
      "Gemini AI",
    ],
    githubLink: "https://github.com/iamvusumzi/jobhunter-system",
    liveDemoLink: "https://dczhxohh0tth3.cloudfront.net/",
    image:
      "https://res.cloudinary.com/dmux2iw2e/image/upload/v1768744749/jobhunter-landing_p3nsj2.png",
  },
  {
    title: "Pizza Pulse",
    description:
      "A fast, API-driven pizza ordering application that allows users to browse a live menu, manage a cart, place priority or standard orders, and track deliveries by order ID, delivering a complete end-to-end ordering experience without authentication or online payments.",
    tech: ["JavaScript", "React", "React Router", "Redux", "Tailwind CSS"],
    githubLink: "https://github.com/iamvusumzi/react-pizza-pulse",
    liveDemoLink: "https://react-pizza-pulse.netlify.app/",
    image:
      "https://res.cloudinary.com/dmux2iw2e/image/upload/v1768746869/getulio-moraes-Wz3u9_GtkWc-unsplash_dah9fn.jpg",
  },
  {
    title: "DevHub CLI",
    description:
      "A developer-focused command-line tool for capturing, organising, and retrieving technical knowledge, enabling engineers to store insights locally and seamlessly sync notes, decisions, and ideas to Notion for easy reference.",
    tech: ["Python", "FastAPI", "Notion API", "JSON"],
    githubLink: "https://github.com/iamvusumzi/devhub",
    liveDemoLink: "https://github.com/iamvusumzi/devhub/blob/main/README.md",
    image:
      "https://res.cloudinary.com/dmux2iw2e/image/upload/v1768746436/dh_kx13tx.png",
  },
];

export const skills: string[] = [
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "Spring Boot",
  "FastAPI",
  "React",
  "HTML",
  "CSS",
  "AWS",
  "Linux",
  "Docker",
  "PostgreSQL",
  "Distributed Systems",
  "High Scale Systems",
  "Cloud Computing",
  "RESTful APIs",
  "Agile Methodologies",
  "Git",
  "Github",
  "Tailwind CSS",
];

export const contactInfo = {
  email: "vmsengana2@gmail.com",
  github: "https://github.com/iamvusumzi",
  linkedin: "https://linkedin.com/in/iamvusumzi",
  twitter: "https://x.com/iamvusumzi",
};
