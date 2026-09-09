
const profile = {
  name: "Vasundhara S R",
  title: "Web Developer",
  tagline: "Final-Year CSE Undergrad · MBCET '27 · Trivandrum",
  bio: "Final-year CSE student building impactful software, exploring new technologies and emerging fields. AI enthusiast and Chief Vibe Officer at Catalyst IEDC - I thrive at the intersection of code and leadership.",
  summary: "I am a final-year Computer Science Engineering student with hands-on experience across four internships spanning AI engineering, full-stack development, and cryptography research. With experience in building impactful projects and internships at organisations like IBS Software and Triassic Solutions, I have honed my programming and problem-solving skills. I thrive in collaborative environments and utilize my technical and leadership abilities to deliver innovative solutions effectively.",
  email: "vasundharasr.331@gmail.com",
  phone: "+919539010497",
  phoneDisplay: "+91 95390 10497",
  github: "https://github.com/Vasundhara-331",
  linkedin: "https://www.linkedin.com/in/vasundhara-s-r/",
  resume: "resume.pdf",
  photo: "images/profile.png",
};

const stats = [
  { value: "4", label: "Internships" },
  { value: "5", label: "Hackathons" },
  { value: "7", label: "Projects" },
  { value: "6", label: "Certifications" },
];

const highlights = [
  { title: "What I Build", desc: "Web applications, IoT systems, Fintech tools, AI-powered automation." },
  { title: "What I Research", desc: "Artificial Intelligence" },
  { title: "How I Lead", desc: "Chief Vibe Officer ,former CEO of Catalyst IEDC" },
];

// Ordered list — a learning path (sequence matters).
const learningPath = ["Artificial Intelligence", "System Design", "Scalable Architecture"];

// Unordered list — tools & languages (order doesn't matter).
const skillTools = [
  "JavaScript", "React", "TypeScript", "Python", "Node.js", "Flask",
  "HTML5", "CSS3", "Java", "MySQL", "MongoDB", "Firebase", "Git / GitHub",
];

// Description list — skill/proficiency pairs.
const skillProficiency = [
  { skill: "JavaScript & React", level: "Advanced" },
  { skill: "HTML5 & CSS3", level: "Advanced" },
  { skill: "Python & Flask", level: "Intermediate" },
  { skill: "Node.js & REST APIs", level: "Intermediate" },
  { skill: "SQL / NoSQL Databases", level: "Intermediate" },
  { skill: "IoT (ESP32) & Embedded C", level: "Beginner" },
];

const softSkills = ["Teamwork", "Leadership", "Content Writing", "Project Coordination", "AI/ML Exposure"];

// Projects: array of objects — rendered into cards dynamically by script.js.
const projects = [
  {
    id: "novara",
    title: "Novara",
    subtitle: "Self-Learning Middleware for Token Optimization (Capstone)",
    description: "Middleware gateway that routes requests across multiple LLM providers to optimize cost, response quality, and governance for enterprise applications.",
    longDescription: "Novara architects a middleware gateway that routes requests across multiple LLM providers (OpenAI, Claude, Gemini) to optimize cost, response quality, and governance for enterprise applications. It includes a self-learning optimizer that auto-tunes prompt compression, retrieval depth, and model selection.",
    image: "images/project-novara.svg",
    tags: ["Python", "FastAPI", "Docker", "PostgreSQL", "LiteLLM"],
    github: "",
    demo: "",
    featured: true,
  },
  {
    id: "zyra",
    title: "ZYRA",
    subtitle: "AI-Driven Web Development Agent",
    description: "Full-stack AI platform that generates responsive websites through guided requirement gathering, UI/UX recommendations, and automated code generation.",
    longDescription: "ZYRA streamlines website development end-to-end: an Automated SRS Generator, a prompt-based colour-palette engine, and a multi-stack frontend code generator (HTML/CSS, React JSX, React TSX) turn natural-language requirements into production-ready landing pages in under three minutes.",
    image: "images/project-zyra.svg",
    tags: ["React", "TypeScript", "Next.js", "NLP", "Firebase"],
    github: "https://github.com/Vasundhara-331/ZYRA-SRS-Generation-Module",
    demo: "",
    featured: true,
  },
  {
    id: "project-e",
    title: "Project E",
    subtitle: "IoT Server Room Monitoring",
    description: "Real-time server room monitoring with automated alerts and dashboard visualization.",
    longDescription: "An ESP32 microcontroller fitted with temperature and humidity sensors streams live environmental data to a Firebase backend. When thresholds are exceeded, automated alerts are dispatched to administrators to prevent hardware failure.",
    image: "images/project-e.svg",
    tags: ["ESP32", "TypeScript", "CSS", "Firebase"],
    github: "https://github.com/Vasundhara-331/Project-E",
    demo: "https://server-room-monitoring-project-e.vercel.app",
    featured: false,
  },
  {
    id: "sentry",
    title: "Sentry",
    subtitle: "Smart Document Automation for KMRL",
    description: "AI-powered document automation with OCR extraction, auto-classification, and full-text search.",
    longDescription: "Sentry modernises document management for Kochi Metro Rail Limited by combining Tesseract OCR with NLP. It extracts key details from varied document formats, classifies them, and enables precise full-text semantic search behind role-based access control.",
    image: "images/project-sentry.svg",
    tags: ["Python", "TypeScript", "NLP", "Supabase"],
    github: "https://github.com/Vasundhara-331/Kochi_Metro_Document_Automation",
    demo: "",
    featured: false,
  },
  {
    id: "maxprofit",
    title: "MaxProfit",
    subtitle: "Financial Metrics Tracking",
    description: "Dashboard for tracking and comparing organizational financial metrics.",
    longDescription: "Built during my internship, MaxProfit lets analysts calculate, project, and report on profitability across organizational units, transforming raw financial data into interactive, comparative charts.",
    image: "images/project-maxprofit.svg",
    tags: ["React", "Flask", "Python", "MySQL"],
    github: "https://github.com/niranj-r/MaxProfit",
    demo: "",
    featured: false,
  },
  {
    id: "streetsafe",
    title: "StreetSafe",
    subtitle: "IoT Overhead Cable Fault Monitoring",
    description: "Fault detection system integrating hardware sensors with real-time mobile and web dashboards.",
    longDescription: "An end-to-end overhead cable fault detection system integrating hardware sensors with Firebase and Blynk for continuous infrastructure monitoring. Machine-learning models analyse fault patterns, classify high-risk zones, and support predictive maintenance.",
    image: "images/project-streetsafe.svg",
    tags: ["ESP32", "IoT", "Firebase", "Machine Learning"],
    github: "",
    demo: "",
    featured: false,
  },
  {
    id: "sharensplit",
    title: "ShareNSplit",
    subtitle: "FinTech Expense Splitting",
    description: "Multi-user expense splitting with real-time balances and flexible split logic.",
    longDescription: "ShareNSplit lets groups track shared costs, log expenses, and settle debts with minimal transactions using equal, percentage, share-based, or custom split methods, backed by a relational schema for partial payments.",
    image: "images/project-sharensplit.svg",
    tags: ["HTML/CSS", "MySQL"],
    github: "https://github.com/Vasundhara-331/",
    demo: "",
    featured: false,
  },
];

// Internships: rendered into a <table>.
const internships = [
  {
    role: "Artificial Intelligence Intern",
    org: "IBS Software, Trivandrum",
    period: "Jun 2026 – Jul 2026",
    description: "Built REST APIs with FastAPI integrating a LiteLLM-based gateway for unified LLM routing, authentication, and token management with real-time response streaming (SSE); evaluated FalkorDB, KuzuDB, and LadybugDB before migrating to Neo4j to index a 1000+ file enterprise repository into queryable code graphs; ran a comparative study of debugging methods that directly informed the team's tool-selection guidance for large-repository maintenance.",
  },
  {
    role: "In-House Intern",
    org: "Mar Baselios College of Engineering and Technology",
    period: "Jul 2025 – Jan 2026",
    description: "Developed the department website and alumni website for the CSE Department at MBCET.",
  },
  {
    role: "Full-Stack Intern",
    org: "Triassic Solutions Private Limited",
    period: "Jun 2025 – Jun 2025",
    description: "Built a web application for calculating, projecting, and reporting organizational profitability within a 3-week timeline.",
  },
  {
    role: "Research Intern",
    org: "Indian Institute of Space Science and Technology (IIST)",
    period: "Dec 2024 – Jan 2025",
    description: "Researched lattice-based cryptography and cyber security, exploring applications in blockchain and IoT systems.",
  },
];

// Education: rendered into a <table>.
const education = [
  {
    institution: "Mar Baselios College of Engineering and Technology, Trivandrum",
    degree: "B.Tech, Computer Science & Engineering",
    period: "2023 – 2027",
    description: "Coursework: DSA, OOP, DBMS, Operating Systems, Computer Networks, ML (in progress).",
  },
];

const certifications = [
  { name: "From Learner to Builder: AI Agent Architect", issuer: "IBM SkillsBuild" },
  { name: "5-Day Hands-on Python Workshop", issuer: "CSE Dept, MBCET" },
  { name: "Networking Basics", issuer: "Cisco Networking Academy" },
  { name: "Getting Started with Artificial Intelligence", issuer: "IBM SkillsBuild" },
  { name: "Introduction to Internet of Things", issuer: "Cisco Networking Academy" },
  { name: "Web Design with HTML, CSS & WordPress", issuer: "Online Course" },
];
