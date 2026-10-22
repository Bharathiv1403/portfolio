export const personalInfo = {
  name: "Bharathi V",
  role: "Frontend Developer & Full Stack Specialist",
  tagline: "React • Next.js • Vue.js • React Native • TypeScript",
  phone: "+91 93635 24498",
  email: "bharathivragav206@gmail.com",
  location: "Viluppuram, Tamil Nadu, India",
  openToRemote: true,
  summary:
    "Frontend Developer with 2+ years of experience building scalable SaaS products for an email and collaboration platform using React, Next.js, Vue.js, TypeScript and React Native. Hands-on with authentication (OIDC, MFA), API integration, admin dashboards, billing workflows, Cloudflare deployments and mobile app releases. Led a frontend team, designed UI in Figma, and delivered production features across Mail, Admin, Billing, Account and Webmail products.",
  resumeUrl: "/assets/docs/Bharathi-V.pdf",
  profileImage: "/assets/images/profile.jpg",
  socials: {
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/bharathiv-developer",
    email: "mailto:bharathivragav206@gmail.com",
    phone: "tel:+919363524498"
  }
};

export const stats = [
  { label: "Years Experience", value: "2+", desc: "Building scalable production SaaS" },
  { label: "Production Platforms", value: "6+", desc: "Enterprise mail, admin & web apps" },
  { label: "FOSS & Community Events", value: "10+", desc: "Speaker, volunteer & hackathons" },
  { label: "Leadership & Delivery", value: "100%", desc: "Frontend team lead & mentor" }
];

export const experiences = [
  {
    company: "Sagasoft Technologies Pvt Ltd",
    role: "Frontend Developer & UI/UX Developer (Frontend Team Lead)",
    period: "Aug 2024 – Present",
    type: "Full-time",
    location: "Viluppuram / Hybrid",
    description:
      "Promoted to lead the frontend engineering team. Spearheaded the complete re-architecture of frontend systems, streamlined developer workflows, and spearheaded enterprise email & administration platforms.",
    highlights: [
      "Rebuilt the frontend ecosystem in Vue.js for better modularity, performance, and UI consistency across Chat, Mail, Drive, Calendar, Billing, My Account, Organisation, and Dashboard.",
      "Designed responsive Figma UI/UX design systems and prototypes directly aligning with business objectives and product specifications.",
      "Led and mentored junior developers, conducted rigorous PR code reviews, assigned sprints, and guaranteed on-time feature delivery.",
      "Engineered maintainable reusable component libraries, modular folder architectures, and optimized virtualized rendering for large data sets.",
      "Implemented comprehensive UI workflows for Billing, Multi-Tenant Organisation Management, and Granular Role-Based Access Control (RBAC).",
      "Integrated complex backend REST APIs for email migration, domains, groups, aliases, and billing, while diagnosing and resolving CORS, payload serialization, and API race conditions."
    ],
    tech: ["Vue.js", "React.js", "Next.js", "TypeScript", "Tailwind CSS", "Pinia", "Zustand", "Figma", "GitLab CI/CD"]
  },
  {
    company: "Sagasoft Technologies Pvt Ltd",
    role: "Data Analyst Intern",
    period: "Feb 2024 – Jul 2024",
    type: "Internship",
    location: "Viluppuram",
    description:
      "Leveraged statistical background to extract actionable business intelligence, automate reporting workflows, and deliver interactive dashboard visualisations.",
    highlights: [
      "Constructed comprehensive Power BI dashboards for IPL statistical analysis, political sentiment analytics, and corporate business intelligence.",
      "Authored interactive dashboards inside Frappe Insights, optimizing operational reporting turnaround times.",
      "Cleaned, sanitized, validated, and transformed messy data structures into automated reporting pipelines for cross-functional stakeholders."
    ],
    tech: ["Power BI", "Python", "SQL", "Frappe Insights", "Data Modeling", "Excel"]
  }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "mobile-mail", label: "Mobile & Mail (JMAP)" },
  { id: "enterprise-saas", label: "Enterprise SaaS" },
  { id: "auth-security", label: "Security & Auth" },
  { id: "fullstack", label: "Full Stack & Web" }
];

export const projects = [
  {
    id: "saga-mail-client",
    title: "Saga Mail Client – Native Mobile & Web",
    category: "mobile-mail",
    badge: "Enterprise Flagship",
    period: "Sep 2026 – Oct 2026",
    tagline: "High-performance enterprise cross-platform email client with Stalwart JMAP synchronization and real-time push relay.",
    stack: ["TypeScript", "React Native (Expo)", "Next.js", "JMAP", "Stalwart Mail Server"],
    tools: ["Firebase FCM", "Cloudflare Workers (OpenNext)", "Hermes", "Google Play Console", "Xcode / TestFlight", "GitLab"],
    overview:
      "Engineered and modernized a production-ready enterprise email client across Android, iOS, and Webmail, powered by Stalwart Mail Server and JMAP protocol.",
    highlights: [
      "Store Release Engineering: Generated 4096-bit RSA production keystores, applied Android manifest security hardening, Apple export-compliance, and optimized Android App Bundles (.aab) with Hermes bytecode.",
      "Real-time Push Relay: Integrated Firebase Cloud Messaging (FCM) and verified a custom TypeScript push relay bridging Stalwart JMAP push events to mobile devices seamlessly.",
      "Polished UI/UX: 4-tier glanceable email list with preheader sanitization, HSL keyword-tag color hashing matching webmail, quick-filter chips, and persistent sidebar tag state management.",
      "Cloudflare Workers Deployment: Deployed webmail on Cloudflare Workers (OpenNext); diagnosed and fixed Stalwart TLS / 525 handshake errors and CORS limitations.",
      "Productivity Protocols: Verified CalDAV, CardDAV, and WebDAV calendar/contacts synchronization; evaluated Tauri 2 for lightweight native desktop distribution."
    ],
    featured: true
  },
  {
    id: "sagaid-admin-console",
    title: "SagaID Mail Admin Console",
    category: "enterprise-saas",
    badge: "Admin & DevOps",
    period: "Apr 2026 – Sep 2026",
    tagline: "Multi-tenant email administration platform with domain verification, billing, and automated DNS rule routing.",
    stack: ["TypeScript", "React", "TanStack React Query", "Axios", "Tailwind CSS", "Vite", "i18next"],
    tools: ["Sentry", "Playwright", "jsPDF", "html2canvas", "ResellerClub API", "GitLab"],
    overview:
      "Constructed a comprehensive admin console allowing enterprise organizations to manage thousands of user mailboxes, domain health, email aliases, and automated billing invoices.",
    highlights: [
      "Built email routing and rule management interfaces: email forwarding rules, team aliases, group distribution lists, with server-side debounced search and infinite pagination.",
      "Engineered automated domain verification workflows for MX, SPF, DKIM, and DMARC records with real-time registrar error diagnostics and nameserver guidance.",
      "Full Billing Suite: client-side dynamic invoice generation with PDF export (jsPDF/html2canvas), wallet top-ups, recurring auto-payments, and plan tier upgrades.",
      "Quality & Reliability: Weekly and hourly load metric graphs, Sentry exception telemetry, and end-to-end automated testing with Playwright."
    ],
    featured: true
  },
  {
    id: "saga-auth-sso",
    title: "Saga Auth, Profile & Single Sign-On (OIDC / MFA)",
    category: "auth-security",
    badge: "Security Core",
    period: "Mar 2026 – Sep 2026",
    tagline: "Zero-trust identity bridge with Authentik OIDC, TOTP MFA, and seamless Web-to-Mobile credential handover.",
    stack: ["TypeScript", "React", "SCSS Modules", "Turborepo", "Authentik OIDC"],
    tools: ["Vitest", "Axios", "Cloudflare Pages", "GitLab", "Web Crypto API"],
    overview:
      "Hardened authentication and single sign-on architecture securing the entire Saga product ecosystem with industry-grade cryptography and zero-downtime token handovers.",
    highlights: [
      "Web-to-Mobile OIDC Handover Bridge: Built an intelligent bridge detecting mobile user agents, intercepting OAuth redirects, securing tokens, and dispatching credentials to native apps via postMessage/JS channel.",
      "Multi-Factor Authentication (MFA): Implemented TOTP MFA enrollment and emergency reset with active-device verification and SMS OTP recovery fallbacks.",
      "Active Session Control: Built session dashboards displaying connected devices, geographical IP audit logs, and instant 'Sign out everywhere' revocation.",
      "Security Defenses: Neutralized stale-cookie race conditions during MFA steps, configured global 401 Axios interceptors with token refresh, and enforced strict Content Security Policies on Cloudflare Pages."
    ],
    featured: true
  },
  {
    id: "sagaid-marketing-site",
    title: "SagaID Marketing & Product Websites",
    category: "enterprise-saas",
    badge: "Growth & SEO",
    period: "May 2026 – Sep 2026",
    tagline: "High-conversion Next.js marketing ecosystem with interactive ROI calculator and automated demo scheduling.",
    stack: ["TypeScript", "Next.js (App Router)", "Tailwind CSS", "Framer Motion"],
    tools: ["OpenNext", "SonarQube", "Calendly", "Live Chat", "GitLab"],
    overview:
      "Engineered SEO-optimized, blazing-fast product landing pages with interactive cost comparison calculators and seamless enterprise demo scheduling.",
    highlights: [
      "Interactive Pricing Matrix: dynamic multi-tier slider and savings calculator comparing SagaMail to Google Workspace and Microsoft 365.",
      "Enterprise Conversion: embedded Calendly automated demo scheduling, live chat support widgets, and responsive mobile-first animations.",
      "Compliance & Trust: Developed GDPR/Privacy, Terms of Service, Cookie Consent, Mail Usage, and Anti-Abuse policy portals.",
      "Code Health: Audited and resolved SonarQube accessibility violations, code smells, and performance bottlenecks to achieve 98+ Google Lighthouse scores."
    ],
    featured: false
  },
  {
    id: "saga-billing-erpnext",
    title: "Saga Billing & ERPNext Integration",
    category: "enterprise-saas",
    badge: "Backend & ERP",
    period: "May 2026",
    tagline: "Automated billing and ledger synchronization linking SaaS customer actions directly with Frappe ERPNext.",
    stack: ["JavaScript", "TypeScript", "REST APIs", "Frappe / ERPNext"],
    tools: ["Postman", "Axios", "PDF Engine", "GitLab"],
    overview:
      "Deeply connected SaaS subscription events, prepaid wallet deductions, and tax compliance to enterprise ERP backend structures.",
    highlights: [
      "Integrated Frappe/ERPNext REST APIs for automated invoice lifecycle generation and tax calculations.",
      "Designed transaction ledger history and automatic wallet balance deductions on recurring subscription renewals.",
      "Crafted standardized corporate invoice PDF templates conforming to Indian GST and international billing compliance."
    ],
    featured: false
  },
  {
    id: "adspectra-naama-ooru",
    title: "Adspectra & Naama Ooru Platforms",
    category: "fullstack",
    badge: "Full Stack / Freelance",
    period: "Personal & Client Projects",
    tagline: "Custom web development for corporate digital presence and hyper-local service commerce.",
    stack: ["React", "FastAPI (Python)", "MySQL", "HTML5", "CSS3", "JavaScript"],
    tools: ["Nginx", "Linux Server", "Vite", "RESTful Architecture"],
    overview:
      "Delivered end-to-end full stack web platforms ranging from corporate agency marketing to hyperlocal commerce.",
    highlights: [
      "Adspectra (adspectra.in): Architected, built, hosted, and deployed high-performance digital marketing agency website with optimized assets.",
      "Naama Ooru: Built a hyper-local commerce and service-booking web platform featuring a React frontend, scalable Python FastAPI microservice, and relational MySQL database.",
      "Engineered secure authentication, booking workflows, catalog filtering, and transactional API endpoints."
    ],
    featured: true
  }
];

export const skillCategories = [
  {
    category: "Frontend Development",
    icon: "code",
    skills: [
      { name: "React.js", level: "Expert", highlight: "Hooks, Context, Custom Architectures" },
      { name: "Next.js", level: "Advanced", highlight: "App Router, SSR, OpenNext Cloudflare" },
      { name: "Vue.js", level: "Advanced", highlight: "Composition API, Pinia, Component Ecosystem" },
      { name: "TypeScript", level: "Advanced", highlight: "Type Safety, Generics, Interfaces" },
      { name: "JavaScript (ES6+)", level: "Expert", highlight: "Async/Await, DOM, Event Loop, Closures" },
      { name: "Tailwind CSS & SCSS", level: "Expert", highlight: "Responsive Systems, Custom Tokens" },
      { name: "Framer Motion", level: "Intermediate", highlight: "Fluid Micro-Interactions & Transitions" }
    ]
  },
  {
    category: "Mobile & Real-Time",
    icon: "smartphone",
    skills: [
      { name: "React Native (Expo)", level: "Advanced", highlight: "Cross-platform Android & iOS Apps" },
      { name: "Hermes Bytecode", level: "Advanced", highlight: "AAB Optimization & Binary Hardening" },
      { name: "Firebase Cloud Messaging", level: "Advanced", highlight: "Background & Foreground Push Relays" },
      { name: "Google Play & TestFlight", level: "Advanced", highlight: "Production Keystores & Store Deployments" },
      { name: "JMAP Protocol", level: "Intermediate", highlight: "Modern Mail Synchronization Standards" }
    ]
  },
  {
    category: "State, APIs & Security",
    icon: "shield-check",
    skills: [
      { name: "TanStack React Query", level: "Expert", highlight: "Server-State Caching, Invalidation" },
      { name: "Zustand & Pinia", level: "Expert", highlight: "Predictable Global State Stores" },
      { name: "REST APIs & Axios", level: "Expert", highlight: "Interceptors, Retry Logic, Error Normalization" },
      { name: "OIDC & OAuth2", level: "Advanced", highlight: "Authentik, Web-to-Mobile Handover" },
      { name: "TOTP MFA & Security", level: "Advanced", highlight: "Active Verification & Security Headers" }
    ]
  },
  {
    category: "AI Tools & Workflows",
    icon: "sparkles",
    skills: [
      { name: "Antigravity", level: "Expert", highlight: "Agentic AI Workflows, Subagent Orchestration & Automated Coding" },
      { name: "ChatGPT & Claude", level: "Expert", highlight: "Architecture Analysis, Prompt Engineering & Code Gen" },
      { name: "GitHub Copilot & Cursor", level: "Advanced", highlight: "AI-Assisted Pair Programming & Fast Prototyping" },
      { name: "Gemini & DeepSeek APIs", level: "Advanced", highlight: "LLM API Integrations & Automation Pipelines" }
    ]
  },
  {
    category: "DevOps & Cloud",
    icon: "cloud",
    skills: [
      { name: "Cloudflare Workers & Pages", level: "Advanced", highlight: "Edge Deployments, OpenNext" },
      { name: "GitLab CI/CD & Git", level: "Advanced", highlight: "Pipelines, Trunk-based Delivery, Reviews" },
      { name: "Turborepo & Vite", level: "Advanced", highlight: "Monorepo Workspaces & Instant HMR" },
      { name: "Docker", level: "Intermediate", highlight: "Containerized Environments & Local Testing" },
      { name: "Linux CLI", level: "Advanced", highlight: "Shell Scripting, Server Configuration" },
      { name: "Playwright & Vitest", level: "Intermediate", highlight: "End-to-End & Unit Testing" }
    ]
  },
  {
    category: "Design & Workflow",
    icon: "figma",
    skills: [
      { name: "Figma UI/UX", level: "Advanced", highlight: "Design Systems, High-Fidelity Prototypes" },
      { name: "Sentry & SonarQube", level: "Advanced", highlight: "Telemetry, Error Audits, Clean Code" },
      { name: "Browser DevTools", level: "Expert", highlight: "Memory Profiling, Network Performance" },
      { name: "AI-Assisted Dev", level: "Advanced", highlight: "Prompt Engineering, Workflow Acceleration" }
    ]
  }
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Alagappa University",
    period: "2024 – 2026",
    logo: "/assets/logos/alagappa-university.png",
    detail: "Focus on Advanced Software Architecture, Enterprise Systems, and Web Technologies."
  },
  {
    degree: "B.Sc Statistics",
    institution: "Thiruvalluvar University",
    period: "2020 – 2023",
    logo: "/assets/logos/thiruvalluvar-university.png",
    detail: "Statistical analysis, probability modeling, linear regression, and analytical problem-solving foundation."
  }
];

export const certifications = [
  { name: "Power BI", issuer: "Great Learning, Jobaaj", year: "2024", badge: "Data & BI" },
  { name: "Python & AI/ML", issuer: "VGLUG", year: "2024", badge: "AI & Programming" },
  { name: "SQL Mastery", issuer: "Udemy", year: "2023", badge: "Databases" },
  { name: "Excel with AI", issuer: "Office Master", year: "2023", badge: "Productivity" },
  { name: "Digital Marketing Bootcamp", issuer: "BTREE", year: "2023", badge: "Marketing" },
  { name: "Problem Solving", issuer: "HackerRank", year: "2023", badge: "Algorithms" }
];

export const fossContributions = [
  {
    title: "VGLUG Volunteer",
    period: "2023 – Present",
    desc: "Active volunteer organizing Linux and open-source software education workshops for students and enthusiasts in Villupuram."
  },
  {
    title: "Hacktoberfest Contributor",
    period: "2023 & 2024",
    desc: "Earned official Hacktoberfest badges contributing validated code pull requests to international open source repositories."
  },
  {
    title: "FOSS Tools Talk Speaker",
    period: "2023",
    desc: "Presented developer talks on modern open-source toolchains and contributed to Software Freedom Day celebrations."
  },
  {
    title: "Raspberry Pi Showcase & Tamil TTS",
    period: "2024",
    desc: "Exhibited custom hardware solutions at Raspberry Pi Stall and participated in the FOSS Hackathon building Tamil Text-to-Speech tools."
  },
  {
    title: "FOSS Conferences Participant",
    period: "2023 – 2024",
    desc: "Engaged in India FOSS 3.0 (Bengaluru) and Chennai FOSS 2.0, connecting with core contributors and developers across India."
  }
];
