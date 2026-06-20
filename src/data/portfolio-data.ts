import {
  Bot,
  Brain,
  BrainCircuit,
  Briefcase,
  Camera,
  Code2,
  FileCode2,
  Gauge,
  Globe,
  Headphones,
  ImageIcon,
  LayoutDashboard,
  Mail,
  Megaphone,
  MessageSquare,
  Monitor,
  Package,
  Palette,
  Play,
  Presentation,
  Rocket,
  Search,
  Settings,
  Sparkles,
  Video,
  Workflow,
  MonitorPlay,
  Zap,
  Shield,
  Users,
  ClipboardCheck,
  Building,
  Clock,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";

// ─── NAV ────────────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Services Offered", href: "#services-offered" },
  { label: "Solutions", href: "#solutions" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

// ─── HERO ───────────────────────────────────────────────────────────────────
export const heroData = {
  name: "MUHAMMED RIBIN K P",
  roles: [
    "Automation Developer",
    "Web Developer",
    "AI Solutions Creator",
  ],
  headline:
    "Building Automation Systems, Intelligent Web Applications, AI Solutions, and Digital Experiences.",
  description:
    "I help businesses streamline workflows, automate repetitive tasks, build modern web applications, develop Telegram bots, create AI-powered content, and design professional digital assets that improve productivity and business growth.",
  resumeLink: "/screenshots/resume/Muhammed Ribin KP CV APR 29.pdf",
};

// ─── ABOUT ──────────────────────────────────────────────────────────────────
export const aboutData = {
  paragraphs: [
    "I am a BCA student and Digital Solutions Developer passionate about automation, software development, AI technologies, and digital innovation. My focus is on creating practical solutions that solve real-world problems, improve efficiency, and help businesses leverage technology effectively.",
    "I specialize in workflow automation, Django web development, Telegram bot development, AI content generation, and creative digital design.",
    "I continuously learn and explore emerging technologies to deliver modern, scalable, and impactful digital solutions.",
  ],
  highlights: [
    { label: "Projects", value: "25+", icon: Briefcase },
    { label: "Solutions", value: "15+", icon: Rocket },
    { label: "Clients", value: "10+", icon: Users },
    { label: "Hours Built", value: "2000+", icon: Clock },
  ],
};

// ─── SERVICES ───────────────────────────────────────────────────────────────
export interface Service {
  title: string;
  icon: LucideIcon;
  items: string[];
  gradient: string;
}

export const servicesData: Service[] = [
  {
    title: "Automation Solutions",
    icon: Workflow,
    gradient: "from-indigo-500 to-purple-500",
    items: [
      "Workflow Automation",
      "Business Process Automation",
      "Data Automation",
      "AI Integrations",
      "Productivity Systems",
    ],
  },
  {
    title: "Website Development",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
    items: [
      "Business Websites",
      "Portfolio Websites",
      "Django Applications",
      "Landing Pages",
      "Admin Dashboards",
    ],
  },
  {
    title: "AI Bot Development",
    icon: Bot,
    gradient: "from-purple-500 to-pink-500",
    items: [
      "whatsapp Bots",
      "telegram Bots",
      "Notification Systems",
      "Automated Workflows",
      "Customer Support Bots",
      "API Integrations",
      "Chatbots",
    ],
  },
  {
    title: "AI Content Creation",
    icon: Sparkles,
    gradient: "from-amber-500 to-orange-500",
    items: [
      "AI Video Generation",
      "AI Image Generation",
      "AI Marketing Content",
      "Social Media Content",
      "AI Creative Assets",
    ],
  },
  {
    title: "Graphic Design",
    icon: Palette,
    gradient: "from-rose-500 to-red-500",
    items: [
      "Poster Design",
      "Social Media Creatives",
      "Marketing Materials",
      "Promotional Graphics",
      "Branding Assets",
    ],
  },
];

// ─── SKILLS ─────────────────────────────────────────────────────────────────
export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
  color: string;
}

export const skillsData: SkillCategory[] = [
  {
    title: "Development",
    icon: Code2,
    color: "from-blue-500 to-indigo-500",
    skills: ["Python", "Django", "HTML", "CSS", "JavaScript", "SQLite"],
  },
  {
    title: "Automation",
    icon: Settings,
    color: "from-purple-500 to-violet-500",
    skills: ["n8n", "Make", "Zapier", "API Integration", "Telegram API"],
  },
  {
    title: "AI Tools",
    icon: BrainCircuit,
    color: "from-emerald-500 to-teal-500",
    skills: ["ChatGPT", "Claude", "Gemini", "Runway", "Midjourney"],
  },
  {
    title: "Design",
    icon: ImageIcon,
    color: "from-pink-500 to-rose-500",
    skills: ["Canva", "Photoshop", "Graphic Design", "Visual Branding"],
  },
];

// ─── SOLUTIONS ──────────────────────────────────────────────────────────────
export interface Solution {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const solutionsData: Solution[] = [
  {
    title: "Automated Telegram Notification Systems",
    description:
      "Custom bots that deliver real-time alerts, scheduled updates, and automated responses to keep teams and users informed.",
    icon: MessageSquare,
  },
  {
    title: "Workflow Automation Solutions",
    description:
      "End-to-end process automation using n8n, Make, and custom scripts to eliminate repetitive manual tasks.",
    icon: Workflow,
  },
  {
    title: "AI Video Generation Pipelines",
    description:
      "Automated pipelines that produce professional marketing and social media videos using AI tools.",
    icon: Video,
  },
  {
    title: "Smart Visitor Management Systems",
    description:
      "Digital platforms for visitor registration, tracking, and security monitoring in residential and commercial spaces.",
    icon: Shield,
  },
  {
    title: "Hostel Management Systems",
    description:
      "Centralized solutions for student management, room allocation, and complaint handling in hostel environments.",
    icon: Building,
  },
  {
    title: "Custom Django Applications",
    description:
      "Tailored web applications built with Django for dashboards, management tools, and business operations.",
    icon: FileCode2,
  },
  {
    title: "Social Media Design Packages",
    description:
      "Complete sets of branded social media graphics, stories, and promotional materials for consistent online presence.",
    icon: Palette,
  },
  {
    title: "AI Content Automation Systems",
    description:
      "Integrated systems that generate, schedule, and publish AI-powered content across multiple platforms.",
    icon: Brain,
  },
  {
    title: "Business Management Solutions",
    description:
      "Custom digital tools for inventory, client management, invoicing, and operational efficiency.",
    icon: LayoutDashboard,
  },
];

// ─── PROJECTS ───────────────────────────────────────────────────────────────
export interface Project {
  title: string;
  subtitle: string;
  tech: string[];
  features: string[];
  problem?: string;
  solution?: string;
  liveLink?: string;
  githubLink?: string;
  gradient: string;
  image?: string;
}

export const projectsData: Project[] = [
  {
    title: "URBANEASE",
    subtitle: "Smart Residential Visitor and Security Management System",
    tech: ["Django", "Python", "SQLite", "Bootstrap"],
    features: [
      "Visitor Registration",
      "Security Dashboard",
      "Resident Management",
      "Digital Records",
    ],
    problem: "Manual visitor tracking and security management.",
    solution:
      "Developed a digital platform to streamline visitor monitoring and improve residential security operations.",
    liveLink: "https://urbanease1.onrender.com/",
    githubLink: "https://github.com/ribin405/urbanease1.git",
    gradient: "from-indigo-600 to-blue-600",
    image:"/screenshots/urbaneaseloginpage.png"
  },
  {
    title: "NEXTSTEP",
    subtitle: "Centralized Hostel Administration Platform",
    tech: ["Django", "Python", "SQLite"],
    features: [
      "Student Management",
      "Room Allocation",
      "Complaint Management",
      "Dashboard",
    ],
    problem: "Manual hostel administration and record management.",
    solution: "Built a centralized hostel management system to digitize and streamline all hostel operations.",
    liveLink: "https://nexstep-bmys.onrender.com",
    githubLink: "https://github.com/ribin405/nexstep.git",
    gradient: "from-purple-600 to-pink-600",
    image:"/screenshots/nextstep.png"
  },
  {
    title: "Telegram Automation Bot",
    subtitle: "Intelligent Notification & Automation System",
    tech: ["Python", "Telegram API"],
    features: [
      "Automated Notifications",
      "Scheduled Messages",
      "Command Handling",
      "API Integrations",
    ],
    problem: "Manual communication and repetitive notification tasks.",
    solution:
      "Created an intelligent bot that automates messaging, schedules notifications, and integrates with external APIs.",
    liveLink: "#",
    githubLink: "#",
    gradient: "from-cyan-600 to-teal-600",
  },
  {
    title: "AI Content Creation Projects",
    subtitle: "AI-Powered Content Generation Suite",
    tech: ["Runway", "Midjourney", "ChatGPT", "Python"],
    features: [
      "AI Video Generation",
      "AI Images",
      "Marketing Content",
      "Social Media Assets",
    ],
    problem: "Time-consuming manual content creation for marketing and social media.",
    solution:
      "Built AI-powered pipelines that generate professional videos, images, and marketing copy at scale.",
    liveLink: "#",
    githubLink: "#",
    gradient: "from-amber-600 to-orange-600",
  },
];

// ─── GALLERY CATEGORIES ────────────────────────────────────────────────────
export const galleryCategories = [
  "All",
  "Websites",
  "business Solutions",
  "AI Bots",
  "Posters",
  "Graphic Designs",
  "AI Videos",
] as const;

export interface GalleryItem {
  title: string;
  category: (typeof galleryCategories)[number];
  gradient: string;
  image?: string;
  video?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    title: "Hostel Management Portal",
    category: "Websites",
    gradient: "from-blue-600 to-indigo-700",
    image: "/screenshots/websites/Screenshot 2026-05-24 231938.png",
  },
  {
    title: "Investment Duck",
    category: "business Solutions",
    gradient: "from-emerald-500 to-teal-600", image: "/screenshots/investduck/Screenshot 2026-06-16 124453.png"
  },
  { title: "UrbanEase Login Page", category: "Websites", gradient: "from-purple-600 to-violet-700", image: "/screenshots/urbaneaseloginpage.png" },
  { title: "Portfolio Site Design", category: "Websites", gradient: "from-cyan-600 to-blue-700" ,image:"/screenshots/websites/Screenshot 2026-06-16 123957.png"},
  {title: "AI CV maker", category: "Websites", gradient: "from-emerald-600 to-teal-700" ,image:"/screenshots/websites/Screenshot 2026-05-11 180840.png"},
  { title: "Notification Bot Interface", category: "AI Bots", gradient: "from-teal-600 to-emerald-700" ,image:"/screenshots/aibot/fc85a5642426e91dbf9064d690fbbad1.jpg"},
  { title: "Automation Workflow Bot", category: "AI Bots", gradient: "from-green-600 to-teal-700" ,image:"/screenshots/aibot/73079cb83aedc740eb8daffe2665abcc.jpg"},
  { title: "Event Promotion Poster", category: "Posters", gradient: "from-rose-600 to-pink-700" ,image:"/screenshots/posters/4592cb92e517b63f8daadfe9397625a5.jpg"},
  { title: "Tech Conference Poster", category: "Posters", gradient: "from-amber-600 to-orange-700" ,image:"/screenshots/posters/d615e4f8bf4d29d006bbba3d414a2a87.jpg"},
  { title: "Brand Identity Package", category: "Graphic Designs", gradient: "from-fuchsia-600 to-purple-700" ,image:"/screenshots/graphicdesign/c6f615bb7014a3b02a5aa5a8f4634cca.jpg"},
  { title: "Social Media Kit", category: "Graphic Designs", gradient: "from-indigo-600 to-blue-700" ,image:"/screenshots/graphicdesign/d23f96b096857621f4c4e030e35126a8.jpg"},
  { title: "Marketing Banner Set", category: "Graphic Designs", gradient: "from-pink-600 to-rose-700" ,image:"/screenshots/investduck/5f84abd36a1325e90d965887c457ce9c.jpg"},
  { title: "AI Product Showcase", category: "AI Videos", gradient: "from-violet-600 to-indigo-700" ,video:"/screenshots/AIvedios/finn and juice vedio.mp4", image: "/screenshots/AIvedios/Screenshot 2026-06-16 142547.png"},
  { title: "AI Marketing Reel", category: "AI Videos", gradient: "from-orange-600 to-red-700", video: "/screenshots/AIvedios/VID_20260616_132730.mp4", image: "/screenshots/AIvedios/Screenshot 2026-06-16 135148.png" },
  { title: "Foodtruck Concept", category: "business Solutions", gradient: "from-cyan-600 to-teal-700" ,image:"/screenshots/investduck/concept.png"},
];

// ─── WORK PROCESS ───────────────────────────────────────────────────────────
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Requirement Analysis",
    description: "Deep dive into your business needs, goals, and challenges to define the project scope.",
    icon: Search,
  },
  {
    step: 2,
    title: "Research & Planning",
    description: "Evaluate technologies, design architecture, and create a detailed project roadmap.",
    icon: ClipboardCheck,
  },
  {
    step: 3,
    title: "Design",
    description: "Craft user-centric interfaces and design systems that align with your brand identity.",
    icon: Palette,
  },
  {
    step: 4,
    title: "Development",
    description: "Build scalable, clean, and efficient code using modern technologies and best practices.",
    icon: Code2,
  },
  {
    step: 5,
    title: "Testing",
    description: "Rigorous quality assurance to ensure reliability, performance, and security.",
    icon: CheckCircle,
  },
  {
    step: 6,
    title: "Deployment",
    description: "Launch your solution with proper configuration, hosting, and performance optimization.",
    icon: Rocket,
  },
  {
    step: 7,
    title: "Support & Optimization",
    description: "Ongoing maintenance, updates, and performance improvements to keep your solution running at peak.",
    icon: Settings,
  },
];

// ─── ACHIEVEMENTS ───────────────────────────────────────────────────────────
export interface Achievement {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
}

export const achievementsData: Achievement[] = [
  { value: 25, suffix: "+", label: "Projects Completed", icon: Briefcase },
  { value: 15, suffix: "+", label: "Solutions Developed", icon: Rocket },
  { value: 10, suffix: "+", label: "Automation Systems Built", icon: Zap },
  { value: 100, suffix: "+", label: "Design Assets Created", icon: Palette },
  { value: 2000, suffix: "+", label: "Hours of Development", icon: Clock },
];

// ─── CERTIFICATIONS ─────────────────────────────────────────────────────────
export interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: LucideIcon;
}

export const certificationsData: Certification[] = [
  {
    title: "Python Programming",
    issuer: "Certification Authority",
    date: "Coming Soon",
    icon: Code2,
  },
  {
    title: "Web Development",
    issuer: "Certification Authority",
    date: "Coming Soon",
    icon: Globe,
  },
  {
    title: "AI & Machine Learning",
    issuer: "Certification Authority",
    date: "Coming Soon",
    icon: BrainCircuit,
  },
  {
    title: "Digital Marketing",
    issuer: "Certification Authority",
    date: "Coming Soon",
    icon: Gauge,
  },
];

// ─── TESTIMONIALS ───────────────────────────────────────────────────────────
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export const testimonialsData: Testimonial[] = [
  {
    quote:
      "Ribin built an automation system that saved us hours of manual work every week. His technical skills and professionalism are outstanding.",
    name: "Client Name",
    role: "Business Owner",
    avatar: "CN",
  },
  {
    quote:
      "The Telegram bot he developed for our team completely transformed our communication workflow. Highly recommend his services.",
    name: "Client Name",
    role: "Project Manager",
    avatar: "CN",
  },
  {
    quote:
      "Exceptional web development work. The Django application he built was clean, fast, and exactly what we needed for our operations.",
    name: "Client Name",
    role: "Startup Founder",
    avatar: "CN",
  },
];

// ─── SOCIAL LINKS ───────────────────────────────────────────────────────────
export const socialLinks = {
  email: "mribin405@gmail.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
  telegram: "https://t.me/",
  whatsapp: "https://wa.me/",
};

// ─── CONTACT ────────────────────────────────────────────────────────────────
export const contactData = {
  headline: "Let's Build Something Amazing Together",
  description:
    "Have a project in mind or need a digital solution? Let's connect and discuss how I can help you achieve your goals.",
};

// ─── SERVICES OFFERED ──────────────────────────────────────────────────────
export interface ServiceOffered {
  title: string;
  icon: LucideIcon;
  items: string[];
  gradient: string;
}

export const servicesOfferedData: ServiceOffered[] = [
  {
    title: "Short-Form Video Creation",
    icon: Play,
    gradient: "from-rose-500 to-pink-500",
    items: [
      "Instagram Reels",
      "YouTube Shorts",
      "LinkedIn videos",
      "Product videos",
    ],
  },
  {
    title: "Social Media Management",
    icon: Megaphone,
    gradient: "from-blue-500 to-cyan-500",
    items: [
      "Content planning",
      "Post design",
      "Video editing",
      "Scheduling",
    ],
  },
  {
    title: "AI-Powered Ad Creatives",
    icon: Sparkles,
    gradient: "from-violet-500 to-purple-500",
    items: [
      "Facebook ads",
      "Instagram ads",
      "Google display creatives",
      "Video ads",
    ],
  },
  {
    title: "Product Photography & Editing",
    icon: Camera,
    gradient: "from-amber-500 to-orange-500",
    items: [
      "Background removal",
      "AI enhancement",
      "Marketplace images",
    ],
  },
  {
    title: "Website Design & Maintenance",
    icon: Monitor,
    gradient: "from-emerald-500 to-teal-500",
    items: [
      "Business websites",
      "Portfolio websites",
      "Landing pages",
    ],
  },
  {
    title: "AI Chatbot & Customer Support Setup",
    icon: Headphones,
    gradient: "from-indigo-500 to-blue-500",
    items: [
      "WhatsApp bots",
      "Website chatbots",
      "Lead collection systems",
    ],
  },
  {
    title: "Corporate Presentation Design",
    icon: Presentation,
    gradient: "from-sky-500 to-indigo-500",
    items: [
      "Pitch decks",
      "Investor presentations",
      "Training materials",
    ],
  },
  {
    title: "YouTube Channel Management",
    icon: MonitorPlay,
    gradient: "from-red-500 to-rose-500",
    items: [
      "Editing",
      "Thumbnails",
      "SEO",
      "Uploading",
    ],
  },
  {
    title: "AI Automation Services",
    icon: Mail,
    gradient: "from-fuchsia-500 to-pink-500",
    items: [
      "Email automation",
      "CRM automation",
      "Lead generation workflows",
    ],
  },
  {
    title: "Branding Package Service",
    icon: Package,
    gradient: "from-teal-500 to-emerald-500",
    items: [
      "Logo",
      "Brand kit",
      "Social media creatives",
      "Promotional videos",
      "Website",
    ],
  },
];
