// All site copy lives here so it can be updated without touching layout code.
// Keep every entry factual: only list work and technologies that appear in the projects.

export type NavLink = { label: string; href: string };

export type SkillGroup = {
  title: string;
  icon: "server" | "code" | "database" | "window" | "shield";
  items: string[];
  /** Spans two grid columns on larger screens (for longer lists). */
  wide?: boolean;
};

export type Screenshot = {
  src: string;
  alt: string;
  /** Short name shown on the gallery button, e.g. "Dashboard". */
  label: string;
  /** One or two sentences shown under the preview. */
  caption?: string;
  width: number;
  height: number;
  /** CSS object-position for the small thumbnail crop (the part that tells the shots apart). */
  thumbFocus?: string;
};

export type Highlight = {
  title: string;
  /** Shown after the title as "Title — detail", so it starts in lower case. */
  detail?: string;
  items?: string[];
};

export type OverviewRow = {
  label: string;
  items: string[];
  /** "flow" joins items with arrows, "status" colours Achieved / Warning / Critical. */
  variant: "flow" | "list" | "status";
};

export type ContactLink = {
  label: string;
  /** Text shown for the link. */
  value: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
};

export type Project = {
  id: string;
  label: string;
  title: string;
  /** Used in the screenshot frame's title bar when the full title is too long for it. */
  shortTitle?: string;
  /** One line used in the hero's "Selected work" panel. */
  tagline: string;
  context?: string;
  summary: string;
  role?: string;
  roleNote?: string;
  stack: string[];
  highlightsHeading: string;
  highlightsNote?: string;
  highlights: Highlight[];
  links: NavLink[];
  /** Screenshots shown in the gallery. Leave empty to show `overview` instead. */
  screenshots: Screenshot[];
  overview?: { title: string; rows: OverviewRow[] };
  featured?: boolean;
};

export const profile = {
  name: "Naif Albanaqi",
  title: "Information Technology Professional",
  eyebrow: "Information Technology",
  intro:
    "I build practical technology solutions across backend systems, databases, infrastructure, security, and cloud-ready applications.",
  focusAreas: ["IT Systems", "Backend", "Databases", "Cloud", "Security", "Problem Solving"],
  availability: "Open to roles in IT, systems and backend development",
  github: "https://github.com/Naifalbnaqi",
  githubHandle: "Naifalbnaqi",
  location: "Saudi Arabia",
};

// Shown in the Contact section. To change a link, edit `value` and `href` here.
export const contactLinks: ContactLink[] = [
  {
    label: "GitHub",
    value: "github.com/Naifalbnaqi",
    href: "https://github.com/Naifalbnaqi",
    icon: "github",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/naif-albanaqi-94bb40351",
    href: "https://www.linkedin.com/in/naif-albanaqi-94bb40351",
    icon: "linkedin",
  },
  {
    label: "Email",
    value: "Naifss499@gmail.com",
    href: "mailto:Naifss499@gmail.com",
    icon: "mail",
  },
];

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  paragraph:
    "I'm interested in how technology systems are built, operated and kept running — and in understanding them well enough to troubleshoot them when something breaks. My work spans backend services, databases, infrastructure and security: designing APIs and data models, containerising multi-service applications, and building in safeguards such as authentication, access control and health monitoring.",
  pillars: [
    { title: "Build", detail: "Backend services, APIs and relational data models." },
    { title: "Operate", detail: "Containerised services with health checks and graceful shutdown." },
    { title: "Secure", detail: "Authentication, role-based access control and rate limiting." },
    { title: "Troubleshoot", detail: "Tracing problems to their root cause across application, data and infrastructure." },
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Systems & Infrastructure",
    icon: "server",
    items: ["Docker", "Linux fundamentals", "nginx", "S3-compatible object storage", "Cloud-ready architecture"],
  },
  {
    title: "Backend",
    icon: "code",
    items: ["TypeScript", "Node.js", "Fastify", "PHP", "BullMQ job queues"],
  },
  {
    title: "Data",
    icon: "database",
    items: ["PostgreSQL", "MySQL", "Redis", "Prisma"],
  },
  {
    title: "Web",
    icon: "window",
    items: ["Next.js", "React", "JavaScript", "HTML / CSS"],
  },
  {
    title: "Security & Reliability",
    icon: "shield",
    wide: true,
    items: [
      "Authentication",
      "Role-based access control (RBAC)",
      "CSRF protection",
      "Rate limiting",
      "Health checks",
      "Graceful shutdown",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "mediaforge",
    label: "Featured Project",
    title: "MediaForge",
    tagline: "Cloud-ready media processing platform",
    summary:
      "A cloud-ready media processing platform built around asynchronous background jobs, secure object storage, media workers, authentication, and reliable processing workflows.",
    stack: [
      "TypeScript",
      "Next.js",
      "Fastify",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "Docker",
      "S3-compatible storage",
      "FFmpeg",
      "LibreOffice",
    ],
    highlightsHeading: "Engineering highlights",
    highlights: [
      {
        title: "Asynchronous processing",
        detail: "background jobs on a Redis / BullMQ queue, with retries and crash recovery.",
      },
      {
        title: "API and worker separation",
        detail: "the API validates and queues work; separate worker containers run the processing.",
      },
      {
        title: "Data and storage",
        detail: "PostgreSQL as the source of truth; files in S3-compatible storage behind presigned URLs.",
      },
      {
        title: "Security",
        detail: "rotating refresh tokens, role-based access control, CSRF protection and rate limiting.",
      },
      {
        title: "Operability",
        detail: "health and readiness endpoints, graceful worker shutdown, Dockerized multi-service setup.",
      },
      {
        title: "Media and document processing",
        detail: "FFmpeg video and audio operations and PDF conversion, covered by automated tests.",
      },
    ],
    links: [{ label: "View on GitHub", href: "https://github.com/Naifalbnaqi/MediaForge" }],
    screenshots: [
      {
        src: "/projects/mediaforge-dashboard.png",
        alt: "MediaForge dashboard showing the file upload panel, PDF tools and the list of uploaded files with their processing status",
        label: "Dashboard",
        width: 661,
        height: 619,
        thumbFocus: "50% 12%",
      },
      {
        src: "/projects/mediaforge-process.png",
        alt: "MediaForge processing menu listing video tools (convert to MP4, compress, resize, trim) and audio extraction to MP3",
        label: "Processing Tools",
        width: 657,
        height: 699,
        thumbFocus: "25% 88%",
      },
    ],
    featured: true,
  },
  {
    id: "academic-performance",
    label: "Graduation Project",
    title: "Academic Performance Monitoring System",
    shortTitle: "KPI Monitoring System",
    tagline: "University KPI monitoring · Northern Border University",
    context: "Northern Border University",
    summary:
      "A university KPI monitoring system that automates academic performance measurement, role-based workflows, gap analysis, action plans, evidence tracking, and academic quality reporting.",
    role: "Backend Development and KPI Calculation Engine",
    roleNote: "Team graduation project. The capabilities below describe the complete system.",
    stack: ["PHP", "MySQL", "HTML / CSS", "JavaScript", "Chart.js", "FPDF", "RBAC"],
    highlightsHeading: "System capabilities",
    highlightsNote: "Complete system · team project",
    highlights: [
      {
        title: "KPI calculation engine",
        items: [
          "KPI target and actual-value management",
          "Automatic achievement and variance calculation",
          "Automatic Achieved / Warning / Critical status",
        ],
      },
      {
        title: "Access and structure",
        items: [
          "Role-based access control",
          "University, college and program hierarchy",
          "QA review workflow",
        ],
      },
      {
        title: "Quality improvement",
        items: ["Evidence uploads", "Gap analysis and corrective action plans", "PDF reporting"],
      },
    ],
    links: [
      {
        label: "View on GitHub",
        href: "https://github.com/Naifalbnaqi/Academic-Performance-Monitoring-System",
      },
    ],
    screenshots: [
      {
        src: "/projects/kpi-auditor-dashboard.png",
        alt: "Auditor dashboard of the KPI system: totals of 6 KPIs with 2 achieved and 3 critical, a status distribution doughnut chart, and tables of action plans in progress and recent evidence uploads",
        label: "Auditor Dashboard",
        caption:
          "KPI totals by status, a status-distribution chart, action plans in progress and recent evidence uploads.",
        width: 1357,
        height: 696,
        thumbFocus: "50% 38%",
      },
      {
        src: "/projects/kpi-review-data.png",
        alt: "Review Data page for KPI-P-01: a table of values entered by faculty, the calculated average of 4.40 against a target of 5.00, 88.06% achievement, Critical status, and Approve Data and Return with Note buttons",
        label: "Review Data",
        caption:
          "Entered values for KPI-P-01 averaged into a calculated value, with target, achievement and status; approve or return with a note.",
        width: 1252,
        height: 871,
        thumbFocus: "50% 40%",
      },
      {
        src: "/projects/kpi-gap-analysis.png",
        alt: "Gap Analysis and Action Plan form for KPI-P-01 with fields for issue description, root cause analysis, corrective action plan, responsible person and completion deadline",
        label: "Gap Analysis",
        caption:
          "Gap analysis and action-plan form: issue, root cause, corrective action, responsible person and deadline.",
        width: 1126,
        height: 820,
        thumbFocus: "50% 45%",
      },
    ],
    overview: {
      title: "System overview",
      rows: [
        { label: "Organisational scope", items: ["University", "College", "Program"], variant: "flow" },
        {
          label: "KPI evaluation",
          items: ["Target & actual values", "Achievement & variance", "Status"],
          variant: "flow",
        },
        { label: "Performance status", items: ["Achieved", "Warning", "Critical"], variant: "status" },
        {
          label: "Quality workflow",
          items: ["Evidence uploads", "QA review", "Gap analysis", "Action plans", "PDF reports"],
          variant: "list",
        },
      ],
    },
  },
];
