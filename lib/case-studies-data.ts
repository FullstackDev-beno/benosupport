export type CaseStudyChallenge = {
  title: string
  description: string
  icon?: "database" | "uptime" | "mobile" | "comms" | "search" | "shield"
}

export type CaseStudySolution = {
  title: string
  description: string
  highlights: string[]
  outcome?: string
  image?: string
  imageAlt?: string
  /** text-left (image right) | text-right (image left) */
  mediaSide?: "left" | "right"
}

export type CaseStudyMetric = {
  value: string
  label: string
  description?: string
}

export type TechnologyGroup = {
  label: string
  technologies: string[]
}

export type CaseStudyDetail = {
  slug: string
  listingTag: string
  listingTitle: string
  listingExcerpt: string
  /** overlay = Bihar full-bleed; split = NOIDA card; bleed = WARS LAB 100vh bg */
  layout: "overlay" | "split" | "bleed"
  hero: {
    eyebrow: string
    title: string
    description: string
    image: string
    imageAlt: string
    logo?: string
    logoAlt?: string
    duration?: string
    stackSummary?: string
    primaryCta?: { label: string; href: string }
    secondaryCta?: { label: string; href: string }
  }
  overview: {
    client: string
    industry: string
    duration: string
    services: string
  }
  vision: {
    title: string
    paragraphs: string[]
    image: string
    imageAlt: string
    theme?: "light" | "dark"
    badge?: {
      value: string
      label: string
      description: string
    }
  }
  challenges: {
    title: string
    description: string
    variant?: "columns" | "cards"
    items: CaseStudyChallenge[]
  }
  solutions: {
    title: string
    description: string
    variant?: "grid" | "alternating"
    items: CaseStudySolution[]
  }
  metrics: CaseStudyMetric[]
  metricsIntro?: string
  metricsTitle?: string
  /** cards = numeric grid; table = category / outcome rows */
  metricsVariant?: "cards" | "table"
  technologyTitle?: string
  technologyGroups: TechnologyGroup[]
  businessOutcome: string[]
  /** light = centered white; dark = full-bleed navy banner */
  businessOutcomeTheme?: "light" | "dark"
  testimonial?: string
  cta: {
    title: string
    description: string
    buttonLabel: string
  }
}

export const CASE_STUDIES_INDEX = {
  label: "CASE STUDIES",
  title: "See How Strategy and Technology Create Measurable Impact",
  description:
    "Explore client success stories that show how modern engineering, cloud platforms, and digital experiences solve complex business challenges.",
}

const BIHAR_TOURISM_DETAIL: CaseStudyDetail = {
  slug: "bihar-tourism-digital-ecosystem",
  listingTag: "Government · Tourism",
  listingTitle: "Modernizing Bihar's Digital Tourism Ecosystem",
  listingExcerpt:
    "A three-year digital transformation engagement uniting Adobe Experience Cloud, a custom Laravel CMS, mobile experiences, and performance marketing.",
  layout: "overlay",
  hero: {
    eyebrow: "Case Study · Government & Tourism",
    title: "Modernizing Bihar's Digital Tourism Ecosystem",
    description:
      "A three-year engagement with the Bihar Department of Tourism—uniting Adobe Experience Cloud, a custom Laravel CMS, a Flutter mobile app, and performance marketing into one ecosystem serving millions of travelers.",
    image: "/assets/case_study/bihar_tourism/hero.png",
    imageAlt: "Mahabodhi Temple illuminated at night in Bihar",
    logo: "/assets/case_study/bihar_tourism/logo_bihar_tourisampng.png",
    logoAlt: "Bihar Tourism",
    duration: "Mar 2020 — Mar 2023",
    stackSummary: "Adobe Experience Cloud · Flutter · Laravel",
  },
  overview: {
    client: "Bihar Department of Tourism",
    industry: "Government & Tourism",
    duration: "March 2020 — March 2023",
    services:
      "Adobe Experience Cloud, Custom CMS, Flutter App, UI/UX, SEO, Photography & Drone, PPC",
  },
  vision: {
    title: "Building a Digital-First Tourism Experience",
    paragraphs: [
      "Bihar is home to some of the world's most significant spiritual and cultural destinations, including Bodh Gaya, Nalanda, Rajgir, Vaishali, and Patna Sahib. Despite its global importance, travelers often faced fragmented digital experiences, outdated information systems, and limited online accessibility.",
      "The Bihar Department of Tourism partnered with Beno Support Technologies to create a unified digital ecosystem capable of serving millions of domestic and international travelers while increasing tourism engagement, bookings, and revenue.",
    ],
    image: "/assets/case_study/bihar_tourism/vision_1.png",
    imageAlt:
      "A digital-first Bihar tourism experience connecting heritage destinations with mobile technology",
    theme: "light",
  },
  challenges: {
    title: "Challenges Limiting Tourism Growth",
    description:
      "Managing tourism information across hundreds of destinations, events, accommodations, and travel routes created operational complexities. Key challenges included:",
    variant: "columns",
    items: [
      {
        title: "Content Fragmentation",
        description:
          "Tourism information was distributed across multiple systems, making updates difficult and time-consuming.",
      },
      {
        title: "Mobile Accessibility",
        description:
          "Travelers lacked reliable access to maps, destination information, and event details while on the move.",
      },
      {
        title: "Booking Conversions",
        description:
          "The absence of streamlined booking workflows reduced online transactions for hotels, tour packages, and government-managed events.",
      },
      {
        title: "Search Visibility",
        description:
          "High-value tourism keywords were underperforming in search rankings, limiting organic discovery.",
      },
      {
        title: "User Experience",
        description:
          "Visitors encountered disconnected experiences across web, mobile, and marketing channels.",
      },
    ],
  },
  solutions: {
    title: "Engineering the Future of Tourism",
    description:
      "Beno Support designed and implemented a complete tourism technology ecosystem centered around content management, experience delivery, and digital engagement.",
    variant: "grid",
    items: [
      {
        title: "Adobe Experience Cloud Implementation",
        description:
          "Adobe Experience Cloud became the foundation for personalized and scalable digital experiences.",
        highlights: [
          "Centralized experience management",
          "Personalized content delivery",
          "Faster content publishing workflows",
          "Improved user journey orchestration",
          "Consistent experiences across devices",
        ],
        outcome:
          "This enabled Bihar Tourism to deliver a premium, enterprise-grade experience to visitors worldwide.",
      },
      {
        title: "Custom Tourism CMS Development",
        description:
          "A secure Laravel and MySQL-based CMS was developed to simplify content operations.",
        highlights: [
          "Destination management",
          "Event management",
          "Tourism package administration",
          "Travel advisories management",
          "Interactive maps",
        ],
      },
      {
        title: "Mobile App Development",
        description:
          "A Flutter-based mobile application was developed for both Android and iOS.",
        highlights: [
          "Offline mode for remote locations",
          "Destination discovery",
          "Interactive navigation",
          "Event updates",
          "Real-time tourism information",
        ],
      },
      {
        title: "Digital Marketing & Brand Amplification",
        description:
          "A large-scale marketing initiative increased visibility and engagement across channels.",
        highlights: [
          "Professional photography and drone footage",
          "Google Ads and Meta Ads campaigns",
          "Audience segmentation and SEO optimization",
          "Continuous publishing across social channels",
          "Competitive intelligence and performance reporting",
        ],
      },
    ],
  },
  metrics: [
    { value: "+50%", label: "Organic traffic growth" },
    { value: "10K+", label: "App downloads in 3 months" },
    { value: "#1", label: 'Rank for "Bodh Gaya Tourism"' },
    { value: "-20%", label: "Bounce rate reduction" },
    { value: "+35%", label: "User engagement uplift" },
    { value: "+30%", label: "Online bookings increase" },
    { value: "+25%", label: "Event participation (Sonepur Mela)" },
    { value: "1M+", label: "Views on social campaigns" },
  ],
  technologyGroups: [
    {
      label: "Experience Management",
      technologies: [
        "Adobe Experience Cloud",
        "Adobe Experience Manager",
        "Adobe Analytics",
        "Adobe Target",
        "Adobe Campaign",
      ],
    },
    {
      label: "Back-end & Database",
      technologies: ["Laravel", "PHP", "MySQL", "REST APIs", "Redis"],
    },
    {
      label: "Mobile Platforms",
      technologies: ["Flutter", "Dart", "Android", "iOS", "Firebase"],
    },
    {
      label: "Marketing & SEO",
      technologies: [
        "Google Ads",
        "Meta Ads",
        "Google Analytics",
        "Google Search Console",
        "SEMrush",
      ],
    },
    {
      label: "Media Production",
      technologies: [
        "Adobe Photoshop",
        "Adobe Premiere Pro",
        "Adobe After Effects",
        "Drone Photography",
        "360° Virtual Tours",
      ],
    },
  ],
  businessOutcome: [
    "The initiative transformed Bihar Tourism from a fragmented digital presence into a modern, scalable tourism ecosystem. By combining enterprise technology, mobile accessibility, and performance marketing, Bihar Tourism strengthened visitor engagement and expanded its digital reach.",
    "The project demonstrates how government organizations can leverage modern digital infrastructure to deliver exceptional citizen and traveler experiences while achieving measurable business outcomes.",
  ],
  cta: {
    title: "Let's Build Your Digital Transformation Blueprint",
    description:
      "We turn complex organizational hurdles into scalable, enterprise-grade digital realities. Whether you are revitalizing a public platform, deploying cloud infrastructure, or redesigning your customer journey, our team can help deliver measurable results.",
    buttonLabel: "Talk To Our Experts",
  },
}

const NOIDA_WATER_BILLING_DETAIL: CaseStudyDetail = {
  slug: "noida-water-billing-amc",
  listingTag: "Government · Urban Utilities",
  listingTitle:
    "Water Billing Software AMC & Facility Management for NOIDA Authority",
  listingExcerpt:
    "Optimizing urban infrastructure and citizen services through modernized software maintenance and lifecycle management — powering 85,000+ water consumers with 99.9% uptime.",
  layout: "split",
  hero: {
    eyebrow: "Case Study • Government & Urban Development • India",
    title:
      "Water Billing Software AMC & Facility Management for NOIDA Authority",
    description:
      "Optimizing urban infrastructure and citizen services through modernized software maintenance and lifecycle management — powering 85,000+ water consumers with 99.9% uptime.",
    image: "/assets/case_study/Water_Billing/hero-photo.png",
    imageAlt:
      "NOIDA Authority complex illuminated at night along a busy urban corridor",
    primaryCta: {
      label: "Talk To Our Experts",
      href: "/contact#contact-form",
    },
  },
  overview: {
    client: "New Okhla Industrial Development Authority (NOIDA)",
    industry: "Government & Urban Development",
    duration: "2025 – 2026",
    services:
      "Water Billing AMC, Mobile App Upgrades, Database Maintenance, Digitization & Communication Services",
  },
  vision: {
    title: "Building a Resilient, Smart-City Framework for Public Utilities",
    paragraphs: [
      "Established in 1976 under the Uttar Pradesh Industrial Area Development Act, the New Okhla Industrial Development Authority (NOIDA) is a premier urban development agency in the National Capital Region (NCR). As one of the highest revenue-generating authorities for the state of Uttar Pradesh, NOIDA stands as a massive economic hub for IT, software, and hardware enterprises. Alongside fostering commercial growth, NOIDA manages extensive public infrastructure, housing, power distribution, and civic utilities including critical water supply systems.",
      "To support its vast population and corporate network, NOIDA partnered with Beno Support Technologies Pvt. Ltd. to take over the Annual Maintenance Contract (AMC) and Facility Management for its Water Billing Software/System. The ultimate vision was to build an uninterrupted, highly transparent, and robust utility framework that guarantees 24/7 reliability, automates complex payment workflows, and upgrades citizen engagement channels to match modern, smart-city standards.",
    ],
    image: "/assets/case_study/Water_Billing/vision.png",
    imageAlt: "Illuminated NOIDA landmark letters against the night skyline",
    theme: "dark",
    badge: {
      value: "1976",
      label: "YEAR ESTABLISHED",
      description:
        "One of the highest revenue-generating authorities in India, managing critical urban infrastructure in the NCR.",
    },
  },
  challenges: {
    title: "Overcoming Infrastructure Vulnerabilities and Data Fragmentation",
    description:
      "Maintaining stable public utility systems across a highly populated industrial area introduces intense administrative and technological pressure. Key challenges included:",
    variant: "cards",
    items: [
      {
        title: "High Volume of Consumer Data",
        description:
          "Managing, securing, and maintaining records for over 85,000 active water consumers alongside processing 90,000 legacy physical documents without an integrated Document Management System created significant tracking friction.",
        icon: "database",
      },
      {
        title: "Strict System Uptime Requirements",
        description:
          "Utility billing operations demand 24/7 availability. NOIDA had zero tolerance for system downtime, meaning any software glitch directly delayed revenue collection and degraded public trust.",
        icon: "uptime",
      },
      {
        title: "Mobile App Reliability Hurdles",
        description:
          "Legacy versions of the Android and iOS consumer applications suffered from sluggish navigation and functional limitations, failing to meet the expectations of tech-savvy citizens.",
        icon: "mobile",
      },
      {
        title: "Communication Inefficiencies",
        description:
          "Relaying real-time billing updates, late reminders, and critical service alerts manually or via fractured pipelines slowed down payment collections and lowered consumer response rates.",
        icon: "comms",
      },
    ],
  },
  solutions: {
    title:
      "Engineering an Agile Digital Ecosystem for End-to-End Utility Management",
    description:
      "Beno Support Technologies deployed a multi-layered operations and engineering model to stabilize NOIDA's water billing stack, modernize citizen channels, and digitize decades of paper-bound records.",
    variant: "alternating",
    items: [
      {
        title: "Targeted Workforce Deployment & Systems Monitoring",
        description:
          "A dedicated on-site and remote engineering footprint was established to eliminate system crashes and keep utility workflows running around the clock.",
        highlights: [
          "12 Data Entry Operators: Deployed on-site for day-to-day data updates.",
          "3 Software Developers: Dedicated to 24/7 background maintenance and troubleshooting.",
        ],
        image: "/assets/case_study/Water_Billing/Solution_bg_1.png",
        imageAlt:
          "Command-center style operations floor monitoring NOIDA utility systems",
        mediaSide: "right",
      },
      {
        title: "Jal Software & Application Management Upgrades",
        description:
          "The core Water Billing Software (Jal Software) was overhauled and maintained to manage critical utility workflows through a single, dashboard-driven platform. Delivered capabilities included:",
        highlights: [
          "Comprehensive application processing for validating new water connections and issuing digital No Dues Certificates.",
          "Execution of online challan generation, real-time bill creation, and live tracking of payments (paid versus overdue status).",
          "Strategic integration of reliable email services directly into core billing workflows to dispatch instant summaries and correspondence logs.",
          "Continuous generation of customized payment plans, demand letters, and late-fee reminders with end-to-end version history tracking.",
        ],
        image: "/assets/case_study/Water_Billing/Solution_bg_2.png",
        imageAlt:
          "Operator reviewing Jal Software dashboards and consumer records on dual monitors",
        mediaSide: "left",
      },
      {
        title: "Mobile Application Refinement",
        description:
          "Both native mobile applications were re-engineered to deliver seamless mobile access for users on the go:",
        highlights: [
          "Enhanced user interfaces (UI) on both Android and iOS versions to offer intuitive, clean navigation paths.",
          "Rigorous bug-fixing schedules to guarantee system stability during peak monthly billing periods.",
          "Accelerated workflows for checking current billing metrics and executing secure online payments instantly.",
        ],
        image: "/assets/case_study/Water_Billing/Solution_bg_3.png",
        imageAlt:
          "NOIDA water billing mobile app screens showing dashboard and bill details",
        mediaSide: "right",
      },
      {
        title: "Digitalization & Data Lifecycle Management",
        description:
          "Transitioning NOIDA to a completely digital footprint required massive data structuring and infrastructure hosting:",
        highlights: [
          "Established a dedicated, high-speed scanning center inside the NOIDA premises equipped with advanced hardware to handle A4/Legal papers as well as large-format A0/A1 engineering drawings.",
          "Successfully digitized, categorized, and indexed 90,000 legacy consumer records into a secure Document Management System (DMS).",
          "Transitioned and managed the primary database records of over 85,000 citizens through highly secure web hosting environments.",
          "Integrated automated SMS alert pipelines that triggered real-time notifications, dispatching over 1.62 lakh text alerts annually for billing reminders and utility alerts.",
        ],
        image: "/assets/case_study/Water_Billing/Solution_bg_4.png",
        imageAlt:
          "On-site scanning center digitizing large-format drawings and consumer records",
        mediaSide: "left",
      },
    ],
  },
  metricsIntro:
    "The transformation delivered measurable improvements across acquisition, engagement, and conversion metrics:",
  metrics: [
    {
      value: "99.9%",
      label: "System Uptime",
      description: "Zero-interruption utility workflows across the year.",
    },
    {
      value: "1.62 L+",
      label: "Automated SMS Alerts",
      description: "Delivered annually to drive rapid consumer response.",
    },
    {
      value: "+30%",
      label: "Mobile App Usage",
      description: "Increase in adoption and citizen satisfaction scores.",
    },
    {
      value: "100%",
      label: "Data Accuracy",
      description: "Maintained across 85,000+ consumer profiles.",
    },
    {
      value: "90,000+",
      label: "Documents Digitized",
      description: "Scanned, indexed, and archived in a secure DMS.",
    },
    {
      value: "Faster",
      label: "Process Optimization",
      description:
        "Reduced admin delay for connections, challans, and certificates.",
    },
  ],
  technologyGroups: [
    {
      label: "Front-End Frameworks",
      technologies: [
        "Visual Studio",
        ".NET",
        "ASP.NET",
        "HTML5",
        "Bootstrap",
      ],
    },
    {
      label: "Back-end & Database",
      technologies: [
        "C#",
        "SQL Server",
        ".NET Framework",
        "Entity Framework",
        "IIS",
      ],
    },
    {
      label: "Infrastructure Operating Systems",
      technologies: [
        "Windows Server",
        "Linux",
        "IIS",
        "Web Hosting",
        "SSL/TLS",
      ],
    },
    {
      label: "Data Interoperability & Scripting",
      technologies: ["XML", "JSON", "JavaScript", "jQuery", "PowerShell"],
    },
    {
      label: "Reporting & Interface Layout",
      technologies: [
        "Crystal Reports",
        "HTML5",
        "CSS",
        "Bootstrap",
        "Email/SMS Gateways",
      ],
    },
  ],
  businessOutcome: [
    "The collaboration between NOIDA Authority and Beno Support Technologies Pvt. Ltd. converted a fragile, paper-heavy utility stack into a secure, always-on digital operations model. Continuous AMC coverage, mobile refinement, and large-scale digitization raised municipal transparency while protecting revenue collection for more than 85,000 consumers.",
    "By pairing dedicated on-site talent with automated communication pipelines and hardened hosting, NOIDA now operates water billing as a smart-city utility service — measurable, auditable, and ready to scale with NCR growth.",
  ],
  testimonial:
    "Benosupport gave us the reliability, automation, and digital footprint we needed to serve 85,000+ consumers without a single day of downtime — the new benchmark for our operations.",
  cta: {
    title: "Let's Build Your Digital Transformation Blueprint",
    description:
      "At Benosupport Technologies, we turn complex organizational hurdles into scalable, enterprise-grade digital realities. Whether you are looking to revitalize a public platform, seamlessly deploy robust infrastructure, or completely redesign your customer journey, we have the proven expertise to deliver high-impact results.",
    buttonLabel: "Talk To Our Experts",
  },
}

const WARS_LAB_DETAIL: CaseStudyDetail = {
  slug: "wars-lab-ubs-scheduling-biometrics",
  listingTag: "Government · Public Health",
  listingTitle:
    "WARS LAB (Stelmat), Brazil — UBS Scheduling & Biometric Validation System",
  listingExcerpt:
    "Optimizing healthcare infrastructure and citizen services through hybrid cloud integration and biometric compliance for municipal Basic Health Units (UBS).",
  layout: "bleed",
  hero: {
    eyebrow: "Case Study : Government & Tourism",
    title:
      "WARS LAB (Stelmat), Brazil — UBS Scheduling & Biometric Validation System.",
    description:
      "Optimizing Healthcare Infrastructure and Citizen Services Through Hybrid Cloud Integration & Biometric Compliance.",
    image: "/assets/case_study/wars_lab/hero.png",
    imageAlt:
      "Professional holding a tablet with a double-exposure city skyline overlay",
    primaryCta: {
      label: "Talk To Our Experts",
      href: "/contact#contact-form",
    },
  },
  overview: {
    client: "WARS LAB (Stelmat) — Municipal Public Health, Brazil",
    industry: "Public Health & GovTech",
    duration: "15–17 Weeks (Fixed-Fee, Milestone-Based)",
    services:
      "Patient App, Reception Portal, Integration Layer, Government Identity, LGPD Biometrics & Operational Alerts",
  },
  vision: {
    title: "Digital Innovation for Brazil's Public Health",
    paragraphs: [
      "Operating within the strict parameters of Brazil's public health ecosystem, municipal networks require highly secure, efficient, and transparent infrastructure to serve citizens effectively. Basic Health Units (UBS) form the frontline of civic care, processing millions of citizen medical interactions daily.",
      "To transform this vital touchpoint, WARS LAB (Stelmat) partnered with Beno Support Technologies Pvt. Ltd. to engineer a modernized scheduling and biometric verification ecosystem. The ultimate vision was to eliminate operational bottlenecks, ensure strict compliance with Brazil's General Data Protection Law (LGPD), and bridge the gap between legacy government backbones and modern, mobile-first citizen experiences.",
    ],
    image: "/assets/case_study/wars_lab/vision.png",
    imageAlt:
      "Hands holding a smartphone with holographic healthcare and identity icons above it",
    theme: "dark",
  },
  challenges: {
    title: "Overcoming Infrastructure Vulnerabilities and Data Fragmentation",
    description:
      "Maintaining stable public healthcare scheduling across municipal zones introduces intense administrative and technological pressure. Key challenges included:",
    variant: "cards",
    items: [
      {
        title: "Fragmented Scheduling & Attendance Leakage",
        description:
          "UBS facilities faced persistent operational friction due to unverified patient attendance, untracked no-shows, and zero systematic verification tools at reception desks to ensure the person arriving was the individual who booked.",
        icon: "search",
      },
      {
        title: "Legacy System Isolation",
        description:
          "Critical government databases—CADSUS/PDQ for national identity and e-SUS APS/PEC for official scheduling—resided inside protected, internal City Hall networks. These backbones could not be directly exposed to the cloud, preventing standard integration.",
        icon: "uptime",
      },
      {
        title: "Staff Utilization Blindspots",
        description:
          "Municipal managers lacked data-driven visibility into floor activity, staff zoning distributions (productive zones versus break areas), and actual resource availability.",
        icon: "mobile",
      },
      {
        title: "Intense Biometric Compliance Standards",
        description:
          "Handling public health and biometric identity records demanded strict alignment with LGPD legal frameworks, requiring top-tier cryptographic security without introducing user friction.",
        icon: "shield",
      },
    ],
  },
  solutions: {
    title:
      "Engineering a Hybrid Cloud Ecosystem for Scheduling & Biometric Verification",
    description:
      "Beno Support Technologies designed and implemented a complete hybrid cloud/on-premise technology architecture centered around experience delivery, secure data decoupling, and strict regulatory compliance.",
    variant: "grid",
    items: [
      {
        title: "Multi-Tiered Application Refinement",
        description:
          "Elevating citizen engagement and operational efficiency through a dual-interface experience.",
        highlights: [
          "Patient Mobile Application (React Native): A native app for biometric enrollment and appointment scheduling with real-time push notifications.",
          "Reception & Management Web Portal (Angular SPA): A portal for front-desk teams featuring real-time arrival alerts and a human-in-the-loop confirmation flow.",
        ],
      },
      {
        title: "On-Premise Integration & Legacy Hardening",
        description:
          "A secure intermediary layer built to bridge locked government infrastructure without exposing municipal backbones.",
        highlights: [
          "Listener Service: Deployed on an internal Virtual Machine (VM) to ingest camera metadata via JSON/webhook pipelines.",
          "Integration Wrapper (Anti-Corruption Layer): Insulates the new platform from legacy systems, using JDBC for slot availability and internal APIs for bookings.",
          "Government Identity Connectivity: Uses secure CADSUS/PDQ resolution with two-way SSL and Type A1 digital certificates.",
        ],
      },
      {
        title: "Security & Compliance by Design",
        description:
          "An ironclad data protection blueprint for LGPD and global health standards.",
        highlights: [
          "Biometric Hashing: Processes and stores biometric hashes instead of raw images.",
          "Advanced Encryption & Access: Uses TLS 1.2+, Role-Based Access Control (RBAC), JWT/OAuth2, and Multi-Factor Authentication (MFA).",
          "Interoperability Compliance: Aligned with HL7/FHIR, ISO/IEC 19794-5 biometric standards, and IEEE 830 documentation practices.",
        ],
      },
      {
        title: "De-risked Milestone Delivery Mode",
        description:
          "A fixed-fee engagement structured for early risk discovery and acceptance-gated progress.",
        highlights: [
          "A 15–17 week timeline divided into five acceptance-gated milestones.",
          "Integration risks addressed early (Week 1) with a contingency buffer for e-SUS system updates.",
        ],
      },
    ],
  },
  metricsTitle:
    "Measurable outcomes across architecture, compliance and delivery.",
  metricsVariant: "table",
  metrics: [
    {
      value: "Hybrid",
      label: "System Architecture",
      description:
        "Hybrid Cloud/On-Premise delivery successfully bridging cloud UX with locked municipal networks.",
    },
    {
      value: "100%",
      label: "Data Security & Compliance",
      description:
        "100% LGPD compliance achieved via biometric hashing and immutable audit logging.",
    },
    {
      value: "Live",
      label: "Operational Visibility",
      description:
        "Live floor tracking enabled via automated staff zoning and real-time management alerts.",
    },
    {
      value: "Zero-trust",
      label: "Identity Verification",
      description:
        "Zero-trust verification achieved via two-way SSL and Type A1 Digital Certificate integration.",
    },
    {
      value: "Week 1",
      label: "Risk Mitigation",
      description:
        "De-risked delivery with integration discovery accelerated to Week 1 of execution.",
    },
  ],
  technologyTitle: "The stack that shipped it.",
  technologyGroups: [
    {
      label: "Backend & Event Architecture",
      technologies: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "RabbitMQ",
        "Redis",
      ],
    },
    {
      label: "Front-End Frameworks",
      technologies: [
        "React Native",
        "Angular",
        "TypeScript",
        "HTML5",
        "CSS",
      ],
    },
    {
      label: "Integration & Interoperability",
      technologies: [
        "OpenJDK",
        "Spring Boot",
        "JSON",
        "Docker",
        "NGINX",
      ],
    },
    {
      label: "Security & Authentication",
      technologies: [
        "OpenSSL",
        "JSON Web Tokens",
        "Auth0",
        "Keycloak",
        "Let's Encrypt",
      ],
    },
    {
      label: "Compliance Frameworks",
      technologies: [
        "IEEE",
        "OpenAPI Initiative",
        "WebAuthn",
        "HL7 FHIR",
        "LGPD",
      ],
    },
  ],
  businessOutcome: [
    "The collaborative effort between WARS LAB (Stelmat) and Beno Support Technologies Pvt. Ltd. has successfully transformed a fractured municipal operation into a secure, biometrically verified GovTech ecosystem. By eliminating legacy data isolation without disrupting the government backbone, the project established a high-security, future-proof public health standard.",
    "This modernization initiative not only reduced administrative overheads and maximized municipal transparency, but also reinforced the municipality's digital capabilities, providing a clear reference model for smart, citizen-first urban governance across Brazil.",
  ],
  businessOutcomeTheme: "dark",
  cta: {
    title: "Let's Build Your Digital Transformation Blueprint",
    description:
      "At Benosupport Technologies, we turn complex organizational hurdles into scalable, enterprise-grade digital realities. Whether you are looking to revitalize a public platform, seamlessly deploy robust infrastructure, or completely redesign your customer journey, we have the proven expertise to deliver high-impact results.",
    buttonLabel: "Talk To Our Experts",
  },
}

const ROTA_LEGAL_DETAIL: CaseStudyDetail = {
  slug: "rota-legal-lpr-traffic-operations",
  listingTag: "Government · Smart Cities",
  listingTitle:
    "Rota Legal, Brazil — Intelligent Traffic Operations Platform (LPR)",
  listingExcerpt:
    "Turning high-volume License Plate Recognition camera streams into real-time, actionable field intelligence for public safety.",
  layout: "split",
  hero: {
    eyebrow: "Case Study · GovTech & Smart Cities · Brazil",
    title: "Rota Legal, Brazil — Intelligent Traffic Operations Platform (LPR).",
    description:
      "Turning high-volume License Plate Recognition camera streams into real-time, actionable field intelligence for public safety.",
    image: "/assets/case_study/rota_Legal/hero-photo.png",
    imageAlt:
      "Night highway traffic with LPR camera scanning vehicles highlighted in cyan wireframes",
    primaryCta: {
      label: "Talk To Our Experts",
      href: "/contact#contact-form",
    },
  },
  overview: {
    client: "Rota Legal — Public Safety, Brazil",
    industry: "GovTech & Smart Cities",
    duration: "5–6 Weeks (Fixed-Fee MVP Delivery Framework)",
    services:
      "Consumer Service, Backend APIs, Web Console, Mobile App, Database Design, Listener Integration, LGPD Compliance & Government Integration",
  },
  vision: {
    title: "Real-Time Intelligence for Public Safety Operations",
    paragraphs: [
      "Operating within the high-stakes environment of public safety and military policing, field units require instant access to accurate vehicle data to enforce the law effectively. Vehicle sweeps, traffic checkpoints, and proactive patrols form the frontline of urban security, handling millions of data points daily across transit networks.",
      "To transform this vital capability, the client partnered with Beno Support Technologies Pvt. Ltd. to engineer the Rota Legal platform. The ultimate vision was to convert continuous License Plate Recognition (LPR) camera feeds—from both fixed city checkpoints and mobile units—into instantaneous, actionable intelligence for officers on the move. By eliminating manual plate check delays, the system drastically increases the odds of intercepting stolen vehicles and flagging outstanding citations before suspects leave the area.",
    ],
    image: "/assets/case_study/rota_Legal/vision.png",
    imageAlt:
      "Public safety command center with operators monitoring maps and surveillance feeds",
    theme: "dark",
  },
  challenges: {
    title: "Overcoming Infrastructure Vulnerabilities and Data Fragmentation",
    description:
      "Traditional traffic operations and vehicle verification methods across Brazilian municipalities introduced intense operational bottlenecks. Key challenges included:",
    variant: "cards",
    items: [
      {
        title: "Manual Bottlenecks & Interception Delays",
        description:
          "Field officers relied heavily on slow, manual radio lookups to check license plates. Every minute spent waiting for dispatch response allowed stolen or high-risk vehicles to escape tracking windows.",
        icon: "search",
      },
      {
        title: "High-Volume Streaming Throughput",
        description:
          "Continuous event streams generated by widespread LPR camera networks threatened to choke standard databases, requiring an ingestion pipeline capable of sustained, sub-second processing.",
        icon: "uptime",
      },
      {
        title: "Patchy Field Connectivity",
        description:
          "Mobile tactical teams frequently operated in areas with unreliable cellular networks, causing standard cloud-dependent applications to fail at critical operational moments.",
        icon: "mobile",
      },
      {
        title: "Stringent Data Privacy Laws",
        description:
          "Processing public vehicle transit records and linking plate numbers to owner information demanded absolute alignment with Brazil's General Data Protection Law (LGPD) without impacting system latency.",
        icon: "shield",
      },
    ],
  },
  solutions: {
    title:
      "Engineering a Real-Time LPR Intelligence Platform for Field Operations",
    description:
      "Beno Support Technologies designed and delivered a fixed-fee MVP architecture centered on event-driven ingestion, offline-capable field apps, and LGPD-aligned identity workflows for public safety teams.",
    variant: "grid",
    items: [
      {
        title: "Multi-Tiered Application Refinement",
        description:
          "Dual interfaces for officers in the field and command staff monitoring operations.",
        highlights: [
          "Hybrid Mobile Application: Offline-first Flutter app for plate lookups, alerts, and checkpoint workflows under unreliable cellular coverage.",
          "Web Management Console: Operations dashboard for live camera events, hit lists, audit trails, and role-based team administration.",
        ],
      },
      {
        title: "Event-Driven Pipeline & Legacy Integration",
        description:
          "A high-throughput bridge between LPR camera listeners and actionable APIs.",
        highlights: [
          "High-Performance Consumer (Golang): Sustained sub-second ingestion of dense LPR event streams via RabbitMQ.",
          "Enterprise API Layer (Java Spring Boot): Secure services for plate resolution, alerts, and integration with client-provided listener modules.",
        ],
      },
      {
        title: "Security & Compliance by Design",
        description:
          "Privacy-preserving plate handling without sacrificing operational speed.",
        highlights: [
          "Layered Security Architecture: TLS, JWT/OAuth, MFA, and RBAC/ABAC perimeter controls across mobile and console surfaces.",
          "Hybrid Storage Model: Separates hot operational events from encrypted long-term identity records.",
          "LGPD-Aligned Data Minimization: Stores only fields required for enforcement outcomes with immutable audit logging.",
        ],
      },
      {
        title: "De-risked Milestone Delivery Mode",
        description:
          "A 5–6 week fixed-fee MVP window executed by a focused team of 3–5 engineers, with early integration of client listener modules and acceptance-gated milestones to keep delivery risk contained.",
        highlights: [
          "5–6 week fixed-fee MVP execution window with clear acceptance gates.",
          "Core architecture blended with client-provided listener modules from week one.",
        ],
      },
    ],
  },
  metricsTitle:
    "Measurable outcomes across architecture, compliance and delivery.",
  metricsVariant: "table",
  metrics: [
    {
      value: "Sub-second",
      label: "System Architecture",
      description:
        "Sub-second event-driven pipeline handling dense LPR streams using Golang and RabbitMQ.",
    },
    {
      value: "LGPD",
      label: "Data Security & Compliance",
      description:
        "Full LGPD compliance via encrypted plate handling, data minimization, and MFA audit trails.",
    },
    {
      value: "<300ms",
      label: "Operational Visibility",
      description:
        "Real-time field alerts delivered under p95 latency thresholds of less than 300ms.",
    },
    {
      value: "JWT/OAuth",
      label: "Identity Verification",
      description:
        "Granular perimeter control via multi-layered JWT/OAuth and RBAC/ABAC protocols.",
    },
    {
      value: "Integrated",
      label: "Risk Mitigation",
      description:
        "Seamless integration blending Beno's core architecture with client-provided listener modules.",
    },
  ],
  technologyTitle: "The stack that shipped it.",
  technologyGroups: [
    {
      label: "Backend & Event Architecture",
      technologies: [
        "Spring Boot",
        "Go",
        "RabbitMQ",
        "Apache Kafka",
        "OpenJDK",
      ],
    },
    {
      label: "Front-End Frameworks",
      technologies: ["Flutter", "Dart", "React", "TypeScript", "Android"],
    },
    {
      label: "Data & Storage Layer",
      technologies: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Elasticsearch",
        "SQLite",
      ],
    },
    {
      label: "Security & Authentication",
      technologies: [
        "OpenSSL",
        "JSON Web Tokens",
        "Auth0",
        "Keycloak",
        "Let's Encrypt",
      ],
    },
    {
      label: "Compliance & Specifications",
      technologies: [
        "IEEE",
        "OpenAPI Initiative",
        "Docker",
        "Kubernetes",
        "LGPD",
      ],
    },
  ],
  businessOutcome: [
    "The collaboration between Rota Legal and Beno Support Technologies Pvt. Ltd. transformed manual, radio-bound vehicle verification into a real-time public safety intelligence engine for Brazilian field operations. Dense LPR streams now resolve into actionable alerts that officers can trust under pressure.",
    "By pairing an event-driven core with offline-capable mobile workflows and LGPD-aligned data handling, the platform shortened interception windows, reduced communication lag with dispatch, and established a repeatable blueprint for smart-city traffic enforcement.",
  ],
  businessOutcomeTheme: "dark",
  cta: {
    title: "Let's Build Your Digital Transformation Blueprint",
    description:
      "Whether you're revitalizing a public platform, deploying robust infrastructure, or redesigning your customer journey — Beno Support Technologies delivers high-impact results.",
    buttonLabel: "Talk To Our Experts",
  },
}

export const CASE_STUDY_DETAILS: CaseStudyDetail[] = [
  BIHAR_TOURISM_DETAIL,
  NOIDA_WATER_BILLING_DETAIL,
  WARS_LAB_DETAIL,
  ROTA_LEGAL_DETAIL,
]

export const CASE_STUDY_LISTINGS = CASE_STUDY_DETAILS.map((detail) => ({
  slug: detail.slug,
  tag: detail.listingTag,
  title: detail.listingTitle,
  excerpt: detail.listingExcerpt,
  image: detail.hero.image,
  imageAlt: detail.hero.imageAlt,
}))

export function getCaseStudyDetailBySlug(slug: string) {
  return CASE_STUDY_DETAILS.find((detail) => detail.slug === slug)
}
