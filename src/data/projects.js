const projects = [
  {
    id: 1,
    slug: "ai-client-sdk",
    title: "AI Client SDK",
    shortTitle: "AI Client",
    category: "AI",
    featured: true,
    status: "Open Source",

    tagline:
      "A provider-agnostic TypeScript SDK for building reliable AI-powered applications.",

    summary:
      "A reusable TypeScript SDK that provides one consistent interface for working with AWS Bedrock, OpenAI, and Anthropic.",

    overview:
      "AI Client SDK was created to simplify the integration of multiple AI providers. Instead of maintaining separate implementations for every provider, developers can use one strongly typed interface for text generation, streaming, structured output, retries, timeouts, and error handling.",

    problem:
      "Applications using multiple AI providers often contain duplicated integration logic. Each provider has different request formats, response structures, streaming behavior, configuration requirements, and error types. This increases maintenance work and makes switching providers difficult.",

    solution:
      "I designed a provider-adapter architecture that normalizes different AI services behind one TypeScript API. The SDK separates application code from provider-specific behavior while maintaining strong typing and predictable error handling.",

    role: "Creator and SDK Developer",

    responsibilities: [
      "Designed the provider-agnostic SDK architecture",
      "Created adapters for AWS Bedrock, OpenAI, and Anthropic",
      "Implemented text generation and streaming interfaces",
      "Added configurable retries and request timeouts",
      "Designed typed and structured error handling",
      "Added support for structured AI output",
      "Prepared the package for npm distribution",
      "Created documentation and usage examples",
    ],

    challenges: [
      {
        title: "Different provider APIs",
        problem:
          "Each AI provider uses different message formats, configuration properties, and response structures.",
        solution:
          "Created provider adapters that translate a shared request format into provider-specific requests and normalize the returned responses.",
      },
      {
        title: "Reliable request handling",
        problem:
          "AI requests can fail because of temporary provider errors, rate limits, network interruptions, or request timeouts.",
        solution:
          "Implemented configurable retry behavior, timeout controls, and typed errors so applications can respond to failures predictably.",
      },
      {
        title: "Maintaining TypeScript safety",
        problem:
          "Supporting multiple providers can easily result in broad or inconsistent types.",
        solution:
          "Designed shared interfaces and provider contracts that preserve useful TypeScript inference throughout the SDK.",
      },
    ],

    architecture: [
      "Application",
      "AI Client",
      "Provider Adapter",
      "AI Provider API",
      "Normalized Response",
    ],

    technologies: [
      "TypeScript",
      "Node.js",
      "AWS Bedrock",
      "OpenAI",
      "Anthropic",
      "Vitest",
      "npm",
    ],

    highlights: [
      "Provider-agnostic architecture",
      "Streaming response support",
      "Structured output support",
      "Configurable retries and timeouts",
      "Typed error handling",
      "Published as a reusable npm package",
    ],

    outcomes: [
      "Created a reusable foundation for multi-provider AI applications",
      "Reduced provider-specific code inside consuming applications",
      "Made switching between supported AI providers easier",
      "Improved reliability through standardized retry and timeout behavior",
    ],

    links: {
      github: "https://github.com/cruzerblade95/ai-client",
      demo: "",
      package:
        "https://www.npmjs.com/package/@cruzerblade95/ai-client",
      caseStudy: "",
    },
  },

  {
    id: 2,
    slug: "web3-ai-portfolio",
    title: "Web3 AI Portfolio",
    shortTitle: "Web3 AI",
    category: "AI",
    featured: true,
    status: "Open Source",

    tagline:
      "An interactive developer portfolio combining Web3 design with generative AI.",

    summary:
      "A React and TypeScript portfolio experience that combines Web3-inspired design, interactive components, and AWS Bedrock AI capabilities.",

    overview:
      "Web3 AI Portfolio explores how generative AI can improve a traditional developer portfolio. Visitors can interact with AI-powered functionality while learning about the developer's projects, technical experience, and areas of expertise.",

    problem:
      "Traditional portfolio websites are usually static and require visitors to manually browse every section to understand a developer's experience.",

    solution:
      "Built an interactive portfolio that combines structured project information with AI-powered experiences, creating a more engaging way to explore technical work.",

    role: "Frontend and AI Integration Developer",

    responsibilities: [
      "Designed the React application structure",
      "Built reusable TypeScript components",
      "Created responsive portfolio layouts",
      "Integrated AWS Bedrock AI capabilities",
      "Developed Web3-inspired visual elements",
      "Implemented interactive user experiences",
      "Prepared the application for cloud deployment",
    ],

    challenges: [
      {
        title: "Combining AI with portfolio content",
        problem:
          "AI responses needed to remain useful and relevant to the developer's actual experience.",
        solution:
          "Structured the portfolio content and AI integration around clearly defined project and experience information.",
      },
      {
        title: "Maintaining frontend performance",
        problem:
          "Animations and interactive visual effects can negatively affect page performance.",
        solution:
          "Used reusable components and controlled effects to balance visual quality with responsiveness.",
      },
    ],

    architecture: [
      "React Interface",
      "TypeScript Components",
      "AI Service Layer",
      "AWS Bedrock",
      "Generated Response",
    ],

    technologies: [
      "React",
      "TypeScript",
      "AWS Bedrock",
      "Web3",
      "CSS",
      "REST API",
    ],

    highlights: [
      "AI-powered portfolio experience",
      "Reusable TypeScript components",
      "Responsive Web3-inspired interface",
      "AWS Bedrock integration",
      "Interactive project presentation",
    ],

    outcomes: [
      "Created a more interactive alternative to a static portfolio",
      "Demonstrated practical AWS Bedrock integration",
      "Showcased frontend architecture and TypeScript experience",
    ],

    links: {
      github: "https://github.com/cruzerblade95/web3-ai-portfolio",
      demo: "",
      package: "",
      caseStudy: "",
    },
  },

  {
    id: 3,
    slug: "e-da-wallet",
    title: "E-DA Digital Wallet",
    shortTitle: "E-DA Wallet",
    category: "Mobile",
    featured: true,
    status: "Case Study",

    tagline:
      "A Flutter digital-wallet application for secure and convenient mobile transactions.",

    summary:
      "A Flutter mobile wallet connected to a Laravel and MySQL backend, supporting authentication, wallet management, QR functionality, and transaction records.",

    overview:
      "E-DA Wallet is a full-stack mobile application designed to give users a convenient way to manage their digital wallet and transaction activity. The Flutter application communicates with a Laravel REST API backed by MySQL.",

    problem:
      "Users needed a mobile-first system for accessing wallet information, performing supported transactions, and reviewing transaction activity from one interface.",

    solution:
      "Developed a cross-platform Flutter application with secure API communication, QR-based functionality, account access, wallet information, and transaction-history features.",

    role: "Mobile Application Developer",

    responsibilities: [
      "Developed the Flutter mobile application",
      "Integrated the application with Laravel REST APIs",
      "Implemented authentication flows",
      "Built wallet and transaction interfaces",
      "Added QR-based functionality",
      "Handled API loading, success, and error states",
      "Created reusable Dart components",
      "Tested mobile behavior across supported devices",
    ],

    challenges: [
      {
        title: "Mobile and backend synchronization",
        problem:
          "Wallet information and transaction records needed to remain consistent between the mobile application and backend.",
        solution:
          "Designed structured API requests and state updates to ensure that the interface reflected current backend data.",
      },
      {
        title: "Transaction feedback",
        problem:
          "Users needed clear feedback during important wallet operations.",
        solution:
          "Added visible loading, confirmation, validation, and error states throughout the transaction flow.",
      },
    ],

    architecture: [
      "Flutter App",
      "REST API",
      "Laravel Backend",
      "MySQL Database",
      "Wallet Services",
    ],

    technologies: [
      "Flutter",
      "Dart",
      "Laravel",
      "PHP",
      "MySQL",
      "REST API",
      "QR Code",
    ],

    highlights: [
      "Cross-platform Flutter application",
      "Laravel REST API integration",
      "Wallet and transaction management",
      "QR-based functionality",
      "Reusable mobile components",
    ],

    outcomes: [
      "Delivered a mobile-first wallet experience",
      "Connected Flutter interfaces with a production backend",
      "Improved access to wallet and transaction information",
    ],

    links: {
      github: "https://github.com/cruzerblade95/E-DA-User-App",
      demo: "",
      package: "",
      caseStudy:
        "https://mybc.tech/cruzerblade95/portfolio/e-da-wallet/225",
    },
  },

  {
    id: 4,
    slug: "penang-smart-kariah",
    title: "Penang Smart Kariah",
    shortTitle: "Smart Kariah",
    category: "Mobile",
    featured: true,
    status: "Production",

    tagline:
      "A community-focused mobile platform built with Flutter and Firebase.",

    summary:
      "A Flutter mobile application that helps communities access information and digital services through an organized, mobile-friendly experience.",

    overview:
      "Penang Smart Kariah is a production mobile application created to improve access to community-related information and services. It combines Flutter interfaces with Firebase and REST API integrations.",

    problem:
      "Community information and services can be distributed across different channels, making them difficult for users to discover and access consistently.",

    solution:
      "Created a centralized mobile experience where users can access supported community information and services through clear navigation and responsive Flutter screens.",

    role: "Flutter Developer",

    responsibilities: [
      "Developed responsive Flutter interfaces",
      "Integrated Firebase services",
      "Connected the application to REST APIs",
      "Created reusable widgets and navigation flows",
      "Handled loading and error states",
      "Supported application testing and release preparation",
      "Contributed to Google Play and Apple App Store delivery",
    ],

    challenges: [
      {
        title: "Serving different user needs",
        problem:
          "The application needed to organize several types of community information without making navigation confusing.",
        solution:
          "Used clear feature grouping, reusable layouts, and consistent navigation patterns across the application.",
      },
      {
        title: "Cross-platform consistency",
        problem:
          "The application needed to behave consistently across Android and iOS devices.",
        solution:
          "Tested responsive layouts and platform behavior while keeping shared Flutter components reusable.",
      },
    ],

    architecture: [
      "Flutter App",
      "Firebase Services",
      "REST APIs",
      "Application Backend",
      "Community Data",
    ],

    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "REST API",
      "Android",
      "iOS",
    ],

    highlights: [
      "Production Flutter application",
      "Firebase integration",
      "Android and iOS support",
      "Community-focused user experience",
      "Reusable mobile architecture",
    ],

    outcomes: [
      "Centralized supported community information and services",
      "Delivered the application across major mobile platforms",
      "Created a consistent experience for Android and iOS users",
    ],

    links: {
      github: "",
      demo: "",
      package: "",
      caseStudy: "",
    },
  },

  {
    id: 5,
    slug: "spb-mainpp",
    title: "SPB MAINPP",
    shortTitle: "SPB MAINPP",
    category: "Web",
    featured: false,
    status: "Production",

    tagline:
      "A Laravel-based management information system for structured operational workflows.",

    summary:
      "A production web management system built with Laravel, PHP, MySQL, JavaScript, and REST APIs.",

    overview:
      "SPB MAINPP is a web-based information system created to support structured operational processes. The application combines Laravel backend services with database-driven workflows and responsive administrative interfaces.",

    problem:
      "Operational information and workflows needed to be managed through a centralized system instead of disconnected or manual processes.",

    solution:
      "Built and maintained Laravel features that organize information, support authenticated workflows, and provide database-backed management interfaces.",

    role: "Full-Stack Web Developer",

    responsibilities: [
      "Developed Laravel application features",
      "Created and maintained MySQL database integrations",
      "Built responsive frontend interfaces",
      "Implemented authenticated workflows",
      "Integrated internal REST API functionality",
      "Fixed application issues and improved existing modules",
      "Supported deployment and production maintenance",
    ],

    challenges: [
      {
        title: "Complex operational workflows",
        problem:
          "Different processes required structured validation, permissions, and status management.",
        solution:
          "Implemented backend validation and organized workflow states through maintainable Laravel modules.",
      },
      {
        title: "Maintaining production stability",
        problem:
          "New improvements needed to work without disrupting existing system users.",
        solution:
          "Applied incremental changes, tested affected workflows, and preserved compatibility with existing data.",
      },
    ],

    architecture: [
      "Web Browser",
      "Laravel Application",
      "REST Services",
      "MySQL Database",
      "Administrative Modules",
    ],

    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "JavaScript",
      "Bootstrap",
      "REST API",
    ],

    highlights: [
      "Production information system",
      "Database-driven workflows",
      "Authentication and authorization",
      "Administrative interfaces",
      "Ongoing application maintenance",
    ],

    outcomes: [
      "Centralized supported operational information",
      "Improved access to structured management workflows",
      "Maintained and expanded an active production application",
    ],

    links: {
      github: "",
      demo: "https://mims.mainpp.gov.my/",
      package: "",
      caseStudy: "",
    },
  },

  {
    id: 6,
    slug: "aws-portfolio-deployment",
    title: "AWS Portfolio Deployment",
    shortTitle: "AWS Deployment",
    category: "Cloud",
    featured: false,
    status: "Live",

    tagline:
      "A production React portfolio deployed on an AWS-hosted Linux environment.",

    summary:
      "A React portfolio deployed using AWS EC2, Linux, HestiaCP, Nginx, DNS configuration, and HTTPS.",

    overview:
      "This project covers the infrastructure and deployment work behind hosting a production portfolio. It includes server configuration, domain management, HTTPS setup, web-server routing, application builds, and deployment maintenance.",

    problem:
      "The React portfolio required a reliable production environment with domain routing, HTTPS, correct single-page application behavior, and maintainable deployment processes.",

    solution:
      "Configured an AWS EC2 Linux server with HestiaCP and Nginx, connected the domain, enabled HTTPS, and prepared routing rules for the React single-page application.",

    role: "Cloud and Deployment Engineer",

    responsibilities: [
      "Configured the AWS EC2 hosting environment",
      "Managed the Linux server",
      "Configured HestiaCP and Nginx",
      "Connected domain and DNS records",
      "Enabled HTTPS for secure access",
      "Deployed optimized React production builds",
      "Configured single-page application routing",
      "Maintained the live deployment",
    ],

    challenges: [
      {
        title: "React route refreshes",
        problem:
          "Directly opening nested React routes could return a server-level 404 response.",
        solution:
          "Configured Nginx fallback routing so application routes resolve through the React entry file.",
      },
      {
        title: "Secure domain configuration",
        problem:
          "The domain, server, and HTTPS certificate needed to work together correctly.",
        solution:
          "Configured DNS records, virtual-host settings, and SSL support for the production domain.",
      },
    ],

    architecture: [
      "GitHub Repository",
      "React Build",
      "AWS EC2",
      "Nginx",
      "Production Domain",
    ],

    technologies: [
      "React",
      "AWS EC2",
      "Linux",
      "HestiaCP",
      "Nginx",
      "DNS",
      "HTTPS",
    ],

    highlights: [
      "AWS EC2 deployment",
      "Linux server administration",
      "Nginx configuration",
      "HTTPS-enabled production domain",
      "React SPA routing support",
    ],

    outcomes: [
      "Created a live production environment for the portfolio",
      "Enabled secure access through HTTPS",
      "Improved reliability of direct React route navigation",
      "Demonstrated practical cloud deployment experience",
    ],

    links: {
      github:
        "https://github.com/cruzerblade95/cruzerblade95_portfolio",
      demo: "https://mybc.tech",
      package: "",
      caseStudy: "",
    },
  },
];

export const projectCategories = [
  "All",
  "AI",
  "Mobile",
  "Web",
  "Cloud",
];

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);

export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);

export default projects;