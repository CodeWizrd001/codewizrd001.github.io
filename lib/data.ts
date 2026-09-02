import type { LucideIcon } from "lucide-react";
import {
  Award,
  Bot,
  Braces,
  Briefcase,
  Bug,
  Code2,
  Cpu,
  Database,
  Flag,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Rocket,
  ServerCog,
  ShieldCheck,
  Terminal,
  Twitter,
} from "lucide-react";

export const profile = {
  name: "Ajay P Sakthikumar",
  handle: "codewizard",
  role: "Fullstack Developer",
  company: "ex-FlyFin AI · Harness · SAP",
  location: "Bengaluru, India",
  phone: "+91 80892 67125",
  email: "sakthikumarajay@gmail.com",
  resumeUrl: "/resume/resume.pdf",
  tagline:
    "Fullstack developer, app tinkerer & security enthusiast.",
  bio: [
    "I build across the stack — from Next.js frontends and Python/Django backends to Electron desktop apps and offensive security tooling.",
    "Most recently I worked on AutoTax at FlyFin AI, an AI-powered US tax preparation product. Before that, I was a Security Research Engineer at Traceable (acquired by Harness), running pentests for enterprise clients like Walmart, Morgan Stanley, and Disney, and shipping tooling that halved analysis time.",
    "I started my career at SAP Labs India, where I automated CRM regression, built GPT-driven prototypes for service workflows, and co-authored a filed patent.",
  ],
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/CodeWizrd001/",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ajay-sakthikumar-015a28b5/",
    icon: Linkedin,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/Ajay_PS_001",
    icon: Twitter,
  },
  {
    label: "Email",
    href: "mailto:sakthikumarajay@gmail.com",
    icon: Mail,
  },
];

export type TimelineItem = {
  id: string;
  kind: "work" | "education";
  title: string;
  organization: string;
  location?: string;
  start: string;
  end: string;
  isCurrent?: boolean;
  description: string;
  highlights: string[];
  tags: string[];
  icon: LucideIcon;
  accent: string;
};

// Timeline is rendered newest-first.
export const timeline: TimelineItem[] = [
  {
    id: "flyfin-2025",
    kind: "work",
    title: "Fullstack Developer",
    organization: "FlyFin AI",
    location: "Bengaluru, India",
    start: "Nov 2025",
    end: "Aug 2026",
    description:
      "Worked end-to-end on AutoTax — FlyFin's AI tax preparation product — across the Next.js frontend, Python/Django backend, and Electron desktop app.",
    highlights: [
      "Expanded support for additional U.S. tax forms and mappings",
      "Built integrations with Lacerte, Drake, ProSeries, and CCH tax software",
      "Shipped features across web, backend, and desktop from a single stack",
    ],
    tags: ["Next.js", "Django", "Electron", "AI"],
    icon: Rocket,
    accent: "accent-mint",
  },
  {
    id: "traceable-2024",
    kind: "work",
    title: "Security Research Engineer",
    organization: "Traceable Software India (acquired by Harness)",
    location: "Bengaluru, India",
    start: "May 2024",
    end: "Jul 2025",
    description:
      "Built custom security testing tools and led penetration tests across services for enterprise customers.",
    highlights: [
      "Developed and deployed custom security testing tools",
      "Cut API / microservice analysis time by ~50% (2 days → 20 hrs)",
      "Pentested services for 10+ enterprise clients including Walmart, Morgan Stanley, and Disney",
      "Fed findings back into product workflows, reducing recurring vulnerabilities pre-release",
    ],
    tags: ["Pentesting", "Security Tooling", "API Security"],
    icon: ShieldCheck,
    accent: "accent-rose",
  },
  {
    id: "sap-2022",
    kind: "work",
    title: "Developer Associate",
    organization: "SAP Labs India",
    location: "Bengaluru, India",
    start: "May 2022",
    end: "May 2024",
    description:
      "Worked on SAP S/4 CRM Service Management — automation, tooling, and GPT-driven service workflow prototypes.",
    highlights: [
      "Automated regression and workflow testing in S/4 CRM Service Management, cutting manual QA effort by ~30%",
      "Designed GPT-driven prototypes for intelligent automation in service workflows",
      "Improved internal tooling and CRM service reliability",
    ],
    tags: ["SAP S/4", "Automation", "GPT"],
    icon: Briefcase,
    accent: "accent-sand",
  },
  {
    id: "sap-intern-2021",
    kind: "work",
    title: "Intern",
    organization: "SAP Labs India",
    location: "Bengaluru, India",
    start: "May 2021",
    end: "Jul 2021",
    description:
      "Summer internship focused on test automation and internal tooling for CRM modules.",
    highlights: [
      "Automated tests using qmate (wdio), reducing regression effort for CRM modules",
      "Improved API validation coverage by ~15% through new internal tools",
    ],
    tags: ["wdio", "qmate", "Automation"],
    icon: Briefcase,
    accent: "accent-sand",
  },
  {
    id: "nitc-2018",
    kind: "education",
    title: "B.Tech, Computer Science and Engineering",
    organization: "National Institute of Technology, Calicut",
    location: "Kozhikode, India",
    start: "2018",
    end: "May 2022",
    description:
      "Graduated with an 8.16 CGPA. Coursework spanned systems, algorithms, ML, and security.",
    highlights: [
      "Data Structures & Algorithms, Operating Systems, DBMS",
      "Artificial Intelligence, Machine Learning Lab, Computer Networks",
      "Computer Security Lab, Number Theory & Cryptography",
    ],
    tags: ["Computer Science", "8.16 CGPA"],
    icon: GraduationCap,
    accent: "accent-sky",
  },
];

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  accent: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: Braces,
    accent: "accent-mint",
    items: ["Python", "TypeScript", "JavaScript", "Bash", "Shell scripting"],
  },
  {
    title: "Frameworks",
    icon: Code2,
    accent: "accent-sand",
    items: [
      "Next.js",
      "Django",
      "Flask",
      "Sanic",
      "Angular",
      "Flutter",
      "Electron",
    ],
  },
  {
    title: "Databases & Data",
    icon: Database,
    accent: "accent-sky",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Qdrant", "Kafka"],
  },
  {
    title: "AI & LLMs",
    icon: Bot,
    accent: "accent-plum",
    items: [
      "GPT APIs",
      "RAG pipelines",
      "Ollama",
      "PyTorch",
      "TensorFlow",
      "Keras",
    ],
  },
  {
    title: "Security",
    icon: ShieldCheck,
    accent: "accent-rose",
    items: ["Burp Suite", "Metasploit", "Wireshark", "tcpdump", "nmap", "pfSense"],
  },
  {
    title: "Infra & Tooling",
    icon: ServerCog,
    accent: "accent-coral",
    items: [
      "Docker",
      "AWS DevOps",
      "Git / GitHub",
      "WebSockets",
      "wdio",
      "qmate",
    ],
  },
];

export const focusAreas = [
  {
    title: "Fullstack Engineering",
    description:
      "End-to-end features across UI, APIs, data, and desktop — with an eye on DX.",
    icon: Terminal,
    accent: "accent-mint",
  },
  {
    title: "AI & LLM Systems",
    description:
      "GPT-powered products, RAG pipelines, and intelligent workflow automation.",
    icon: Bot,
    accent: "accent-plum",
  },
  {
    title: "Application Security",
    description:
      "Pentesting, offensive tooling, and shipping fixes back into the product lifecycle.",
    icon: ShieldCheck,
    accent: "accent-rose",
  },
];

export type Project = {
  id: string;
  title: string;
  period: string;
  kind: string;
  description: string;
  highlights: string[];
  tags: string[];
  href?: string;
  icon: LucideIcon;
  accent: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "echelon",
    title: "The Echelon Engine",
    period: "Jun 2025 — Present",
    kind: "Personal Project",
    description:
      "A modular Agent-Based Modeling framework in Python with JSON-composable scenarios and reinforcement-learning-style reward loops.",
    highlights: [
      "Multi-agent interactions and simulation → narrative conversion",
      "Extensible into behaviour-driven decision making and game-style simulations",
      "Generic enough for medical, military, strategy, and other niche use cases",
      "Scales to ~10k agents (RAM-limited)",
    ],
    tags: ["Python", "ABM", "Reinforcement Learning", "Simulation"],
    icon: Rocket,
    accent: "accent-mint",
    featured: true,
  },
  {
    id: "juris",
    title: "Juris",
    period: "May 2025",
    kind: "Personal Project",
    description:
      "AI assistant for legal guidance (Indian Penal Code) built on a RAG pipeline with Ollama, Flask, and Qdrant.",
    highlights: [
      "Scalable embeddings storage and retrieval with semantic search",
      "End-to-end RAG stack — from ingestion to answer synthesis",
    ],
    tags: ["RAG", "Ollama", "Qdrant", "Flask"],
    href: "https://github.com/Fabrum-Codex/Juris",
    icon: Bot,
    accent: "accent-plum",
    featured: true,
  },
  {
    id: "metasploit-wrapper",
    title: "Metasploit Mass-Exploit Framework",
    period: "Apr 2022",
    kind: "Course Project",
    description:
      "A framework wrapping Metasploit for mass exploit execution across a network, with automatic shell handling on compromised systems.",
    highlights: [
      "Network-wide scanning (up to 255⁴ addresses, RAM-limited)",
      "Automatic exploit execution and shell connection to targets",
    ],
    tags: ["Metasploit", "Offensive Security", "Python"],
    icon: Bug,
    accent: "accent-rose",
  },
  {
    id: "ctf-nitc",
    title: "Capture The Flag — IEEE NITC",
    period: "May 2020",
    kind: "Event",
    description:
      "Conducted an entry-level CTF hosted on CTFd with ~60 participants, featuring internally hosted challenges and shell simulations.",
    highlights: [
      "Designed and built challenges spanning multiple security domains",
      "Custom shell simulations for interactive challenges",
    ],
    tags: ["CTF", "CTFd", "Security"],
    icon: Flag,
    accent: "accent-sand",
  },
  {
    id: "expos",
    title: "eXpOS — Experimental Operating System",
    period: "Jan 2020",
    kind: "Course Project",
    description:
      "Built an experimental OS in C, implementing core kernel functionality from the ground up.",
    highlights: [
      "Demand paging, kernel stacks, procedure calls, semaphores",
      "Disk access and low-level OS primitives",
    ],
    tags: ["C", "OS", "Systems"],
    icon: Cpu,
    accent: "accent-sky",
  },
];

export type Accolade = {
  title: string;
  organization: string;
  date: string;
  description: string;
  href?: string;
  icon: LucideIcon;
  accent: string;
};

export const accolades: Accolade[] = [
  {
    title: "Patent Filed — Service Assistant using ChatGPT",
    organization: "SAP Labs India",
    date: "May 2023",
    description:
      "Co-inventor on a patent for an intelligent assistant built with Python and the GPT API for SAP Service Management use cases.",
    href: "https://patents.justia.com/patent/20250104087",
    icon: Award,
    accent: "accent-sand",
  },
];

export type Certificate = {
  title: string;
  issuer: string;
  href: string;
};

export const certificates: Certificate[] = [
  {
    title: "Neural Networks and Deep Learning",
    issuer: "Coursera · deeplearning.ai",
    href: "/certificates/coursera-neural-networks-and-deep-learning.pdf",
  },
  {
    title: "Convolutional Neural Networks",
    issuer: "Coursera · deeplearning.ai",
    href: "/certificates/coursera-convolutional-neural-networks.pdf",
  },
  {
    title: "Deep Neural Networks",
    issuer: "Coursera · deeplearning.ai",
    href: "/certificates/coursera-deep-neural-networks.pdf",
  },
  {
    title: "Structuring Machine Learning Projects",
    issuer: "Coursera · deeplearning.ai",
    href: "/certificates/coursera-structuring-machine-learning-projects.pdf",
  },
  {
    title: "Mastering Common Interview Questions",
    issuer: "LinkedIn Learning",
    href: "/certificates/mastering-common-interview-questions.pdf",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#timeline", label: "Timeline" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];
