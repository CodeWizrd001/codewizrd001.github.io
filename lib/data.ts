import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  GraduationCap,
  Code2,
  Cpu,
  Sparkles,
  ShieldCheck,
  Smartphone,
  Terminal,
  Braces,
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

export const profile = {
  name: "Ajay P Sakthikumar",
  handle: "CodeWizrd001",
  role: "Developer Associate",
  company: "SAP Labs India",
  location: "Bengaluru, India",
  email: "sakthikumarajay@gmail.com",
  resumeUrl: "/resume/resume.pdf",
  tagline: "Fullstack developer, app tinkerer & security enthusiast.",
  bio: [
    "I'm a developer who enjoys shaping ideas into shipped products — from crafting responsive frontends to wiring up the systems behind them.",
    "I studied Computer Science at NIT Calicut, and I've been building at SAP Labs India since 2022, working across full-stack engineering and cloud platforms.",
    "Outside of work I dabble in mobile apps, application security, and the occasional side project that starts with a terminal prompt.",
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
    id: "sap-2022",
    kind: "work",
    title: "Developer Associate",
    organization: "SAP Labs India",
    location: "Bengaluru, India",
    start: "2022",
    end: "Present",
    isCurrent: true,
    description:
      "Building enterprise-grade features across the SAP stack — designing services, shipping product experiences, and collaborating with global teams.",
    highlights: [
      "Contributing to product engineering across frontend and backend",
      "Working with cloud-native tools and internal platforms",
      "Partnering with cross-functional teams to ship customer-facing features",
    ],
    tags: ["Fullstack", "Cloud", "Enterprise"],
    icon: Briefcase,
    accent: "accent-mint",
  },
  {
    id: "nitc-2018",
    kind: "education",
    title: "B.Tech, Computer Science and Engineering",
    organization: "National Institute of Technology, Calicut",
    location: "Kozhikode, India",
    start: "2018",
    end: "2022",
    description:
      "Explored the breadth of computer science — from operating systems and networks to machine learning and application security.",
    highlights: [
      "Coursework across systems, algorithms and machine learning",
      "Hands-on projects in fullstack, mobile and security domains",
      "Deep dive into neural networks via Coursera specializations",
    ],
    tags: ["Computer Science", "ML", "Systems"],
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
    items: ["Python", "C / C++", "C#", "JavaScript / TypeScript", "R"],
  },
  {
    title: "Frameworks & Tools",
    icon: Code2,
    accent: "accent-sand",
    items: ["Next.js", "React", "Node.js", "Flutter", "Tailwind CSS"],
  },
  {
    title: "Platforms",
    icon: Cpu,
    accent: "accent-sky",
    items: ["Linux", "Docker", "Cloud Foundry", "Git"],
  },
  {
    title: "Interests",
    icon: Sparkles,
    accent: "accent-coral",
    items: [
      "Fullstack Development",
      "App Development",
      "Application Security",
      "Machine Learning",
    ],
  },
];

export const focusAreas = [
  {
    title: "Fullstack Engineering",
    description:
      "End-to-end features across UI, APIs and data — with an eye on developer experience.",
    icon: Terminal,
    accent: "accent-mint",
  },
  {
    title: "App Development",
    description:
      "Cross-platform mobile experiences with Flutter and native tooling.",
    icon: Smartphone,
    accent: "accent-sand",
  },
  {
    title: "Security Enthusiast",
    description:
      "Curious about the how and why of breaking (and defending) modern software.",
    icon: ShieldCheck,
    accent: "accent-rose",
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
  { href: "#skills", label: "Skills" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];
