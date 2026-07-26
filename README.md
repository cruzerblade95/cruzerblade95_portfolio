# Nabil Ajwad Rosedi — Software Engineering Portfolio

A modern, responsive software engineering portfolio showcasing my experience in full-stack development, Flutter mobile applications, artificial intelligence integrations, REST APIs, blockchain systems, and AWS cloud infrastructure.

The portfolio is designed to give recruiters and engineering teams a clear understanding of the problems I have worked on, my responsibilities, technical decisions, challenges, solutions, and project outcomes.

## Live Portfolio

[View the live portfolio](https://mybc.tech)

## Professional Profiles

- [GitHub](https://github.com/cruzerblade95)
- [LinkedIn](https://www.linkedin.com/in/nabil-ajwad-rosedi-4bbb621a2/)
- [npm](https://www.npmjs.com/~cruzerblade95)

## About Me

I am Nabil Ajwad Rosedi, a Senior Software Engineer and Full-Stack Developer from Malaysia.

My experience includes building and maintaining:

- Cross-platform Flutter applications
- React and TypeScript web applications
- Laravel and PHP backend systems
- REST APIs and third-party integrations
- Firebase-powered mobile applications
- AI-powered applications using AWS Bedrock
- Provider-agnostic AI SDKs
- Blockchain and digital-wallet integrations
- AWS-hosted production environments
- CI/CD and automated testing workflows

I enjoy transforming business requirements into reliable software that is maintainable, scalable, and useful to real users.

## Portfolio Highlights

- Responsive recruiter-focused design
- Animated landing and content sections
- Scroll-based reveal animations
- Interactive project cards
- Searchable project gallery
- Category-based project filtering
- Dedicated project case-study pages
- Project architecture visualization
- Engineering challenges and solutions
- Technology and responsibility summaries
- Project outcome sections
- Dynamic project statistics
- LinkedIn and native project sharing
- Dynamic SEO metadata
- Open Graph social previews
- JSON-LD structured data
- Accessible keyboard navigation
- Reduced-motion accessibility support
- Mobile, tablet, and desktop layouts
- Automated project-data and filtering tests

## Technology Stack

### Frontend

- React
- JavaScript
- React Router
- React Bootstrap
- Bootstrap
- CSS
- React Icons

### Development and Quality

- Jest
- React Testing Library
- Git
- GitHub
- npm
- Create React App

### Deployment

- AWS EC2
- Linux
- HestiaCP
- Nginx
- DNS
- HTTPS

## Featured Projects

### AI Client SDK

A provider-agnostic TypeScript SDK that provides one interface for AWS Bedrock, OpenAI, and Anthropic.

Key capabilities:

- Text generation
- Streaming responses
- Structured output
- Configurable retries
- Request timeouts
- Typed error handling
- Provider-adapter architecture

Links:

- [GitHub repository](https://github.com/cruzerblade95/ai-client)
- [npm package](https://www.npmjs.com/package/@cruzerblade95/ai-client)

### Web3 AI Portfolio

An interactive React and TypeScript portfolio that combines Web3-inspired interfaces with AWS Bedrock AI capabilities.

Key capabilities:

- React and TypeScript components
- AWS Bedrock integration
- Responsive Web3-inspired interface
- AI-powered portfolio experiences
- Reusable frontend architecture

[View the GitHub repository](https://github.com/cruzerblade95/web3-ai-portfolio)

### E-DA Digital Wallet

A Flutter mobile wallet connected to a Laravel and MySQL backend.

Key capabilities:

- User authentication
- Wallet management
- Transaction records
- QR-based functionality
- Laravel REST API integration
- Reusable Flutter components

Links:

- [GitHub repository](https://github.com/cruzerblade95/E-DA-User-App)
- [External case study](https://mybc.tech/cruzerblade95/portfolio/e-da-wallet/225)

### Penang Smart Kariah

A production Flutter application that helps communities access information and digital services.

Key capabilities:

- Flutter and Dart
- Firebase integration
- REST API integration
- Android and iOS support
- Google Play and Apple App Store delivery

### SPB MAINPP

A Laravel-based management information system supporting structured operational workflows.

Key capabilities:

- Laravel and PHP backend
- MySQL database integration
- Authenticated workflows
- Administrative interfaces
- REST API functionality
- Production maintenance

[View the production system](https://mims.mainpp.gov.my/)

### AWS Portfolio Deployment

A production React deployment running on an AWS-hosted Linux environment.

Key capabilities:

- AWS EC2
- Linux server administration
- HestiaCP
- Nginx configuration
- DNS management
- HTTPS
- React single-page application routing

## Project Case Studies

Every project can contain:

- Project overview
- Business or user problem
- Implemented solution
- Developer role
- Responsibilities
- Technical architecture
- Engineering challenges
- Engineering solutions
- Technology stack
- Project highlights
- Outcomes
- GitHub, npm, live-site, and external links

Project content is managed from one central file:

```text
src/data/projects.js
```

To add a project, add another object to the `projects` array. The project gallery, search system, category results, statistics, SEO metadata, structured data, and case-study route will update from the same project object.

## Project Search

Visitors can search projects using information such as:

- Project names
- Technology names
- Frameworks
- Project categories
- Project status
- Responsibilities
- Architecture components
- Challenges
- Solutions
- Outcomes

The reusable search logic is located at:

```text
src/utils/filterProjects.js
```

## Application Routes

| Route | Description |
|---|---|
| `/` | Portfolio homepage |
| `/about` | Experience, skills, tools, and profile |
| `/project` | Searchable and filterable project gallery |
| `/project/:slug` | Individual project case study |
| `/resume` | Resume page |
| `/404` | Custom page-not-found screen |

Available case-study routes include:

```text
/project/ai-client-sdk
/project/web3-ai-portfolio
/project/e-da-wallet
/project/penang-smart-kariah
/project/spb-mainpp
/project/aws-portfolio-deployment
```

## Project Structure

```text
src/
├── Assets/
├── components/
│   ├── About/
│   ├── Home/
│   ├── Projects/
│   │   ├── ProjectCards.js
│   │   ├── ProjectDetail.js
│   │   ├── ProjectFilters.js
│   │   ├── ProjectOverviewStats.js
│   │   ├── ProjectShare.js
│   │   ├── ProjectStructuredData.js
│   │   └── Projects.js
│   ├── Resume/
│   ├── Footer.js
│   ├── Navbar.js
│   ├── PageMeta.js
│   ├── Particle.js
│   ├── Pre.js
│   ├── Reveal.js
│   ├── ScrollProgress.js
│   └── ScrollToTop.js
├── data/
│   ├── projects.js
│   └── projects.test.js
├── utils/
│   ├── filterProjects.js
│   └── filterProjects.test.js
├── App.css
├── App.js
├── index.css
├── index.js
└── style.css
```

## Getting Started

### Requirements

Install the following before starting:

- Node.js
- npm
- Git

### Clone the repository

```bash
git clone https://github.com/cruzerblade95/cruzerblade95_portfolio.git
```

Enter the project directory:

```bash
cd cruzerblade95_portfolio
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm start
```

Open:

```text
http://localhost:3000
```

The page automatically reloads when source files are updated.

## Testing

Run the automated test suite:

```bash
npm test -- --watchAll=false
```

The tests validate:

- Unique project IDs
- Unique and URL-safe project slugs
- Required project information
- Project responsibilities
- Challenges and solutions
- Architecture information
- Technologies
- Outcomes
- Supported project categories
- Featured project selection
- Secure HTTPS project links
- Search normalization
- Title-based searching
- Technology-based searching
- Category filtering
- Combined search and category filtering
- Empty search results

## Production Build

Create an optimized production build:

```bash
npm run build
```

The generated production files will be available inside:

```text
build/
```

## AWS Deployment

This portfolio can be deployed to an AWS EC2 Linux server using HestiaCP and Nginx.

Basic deployment flow:

```text
GitHub repository
        ↓
npm install
        ↓
npm run build
        ↓
React build directory
        ↓
AWS EC2 Linux server
        ↓
HestiaCP and Nginx
        ↓
HTTPS production domain
```

When using React Router, Nginx must send unknown frontend routes to `index.html`.

Example Nginx fallback:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

This allows direct access to routes such as:

```text
/project/ai-client-sdk
```

without receiving a server-level 404 error.

## SEO Features

The portfolio includes:

- Dynamic browser titles
- Dynamic descriptions
- Canonical URLs
- Open Graph metadata
- LinkedIn preview metadata
- X/Twitter preview metadata
- Person structured data
- Software-project structured data
- Breadcrumb structured data
- Search-engine indexing instructions

The reusable metadata component is located at:

```text
src/components/PageMeta.js
```

Project structured data is located at:

```text
src/components/Projects/ProjectStructuredData.js
```

## Accessibility

Accessibility features include:

- Semantic page structure
- Accessible navigation labels
- Keyboard-friendly buttons and links
- Search result announcements
- Breadcrumb navigation
- Descriptive external-link labels
- Visible focus-compatible controls
- Reduced-motion support
- Responsive text and layouts

Users who enable reduced motion in their operating system will receive a simplified animation experience.

## Updating Project Information

Open:

```text
src/data/projects.js
```

Each project uses this general structure:

```javascript
{
  id: 7,
  slug: "new-project",
  title: "New Project",
  shortTitle: "New Project",
  category: "Web",
  featured: true,
  status: "Production",

  tagline: "A short project headline.",
  summary: "A recruiter-friendly project summary.",
  overview: "A detailed explanation of the project.",
  problem: "The problem the project needed to solve.",
  solution: "How the problem was solved.",
  role: "Full-Stack Developer",

  responsibilities: [
    "First responsibility",
    "Second responsibility"
  ],

  challenges: [
    {
      title: "Engineering challenge",
      problem: "What made the task difficult.",
      solution: "How the challenge was solved."
    }
  ],

  architecture: [
    "Frontend",
    "REST API",
    "Backend",
    "Database"
  ],

  technologies: [
    "React",
    "Node.js",
    "MySQL"
  ],

  highlights: [
    "Important project capability"
  ],

  outcomes: [
    "A truthful project outcome"
  ],

  links: {
    github: "",
    demo: "",
    package: "",
    caseStudy: ""
  }
}
```

Use lowercase words separated by hyphens for the slug:

```text
correct-project-slug
```

Avoid:

```text
Incorrect Project Slug
incorrect_project_slug
```

## Updating Categories

Open:

```text
src/data/projects.js
```

Update:

```javascript
export const projectCategories = [
  "All",
  "AI",
  "Mobile",
  "Web",
  "Cloud",
];
```

When adding a new category, ensure that the project uses the exact same category value.

## Release History

### Version 1.1 — Project Case Studies

Completed:

- Centralized project content
- Searchable project gallery
- Category filtering
- Animated project cards
- Dedicated case-study routes
- Project overview sections
- Responsibility sections
- Architecture visualization
- Challenge and solution sections
- Technology and outcome panels
- Dynamic project statistics
- Recruiter-friendly navigation
- Project sharing
- Dynamic SEO metadata
- Structured project data
- Breadcrumb navigation
- Automated data tests
- Automated filtering tests
- Responsive case-study design
- Reduced-motion accessibility

### Version 1.0 — Portfolio Redesign

Completed:

- Professional visual redesign
- Responsive navigation
- Scroll progress indicator
- Scroll reveal animations
- Updated home page
- Updated about page
- Updated skill and tool sections
- Updated project presentation
- Updated resume page
- Updated footer
- Responsive desktop and mobile layouts

## Upcoming Features

### Version 1.2 — Project Media and Experience

Planned:

- Project screenshot galleries
- Device mockups for Flutter projects
- Before-and-after project comparisons
- Expandable architecture diagrams
- Project development timelines
- Video demonstrations
- Lightbox image previews
- Improved project transition animations

### Version 1.3 — Recruiter Experience

Planned:

- Downloadable one-page recruiter profile
- Printable case-study layouts
- Role-based project filtering
- Skills-to-project mapping
- Experience timeline improvements
- Featured achievement section
- Availability and preferred-role section
- Recruiter contact form

### Version 1.4 — Performance and Analytics

Planned:

- Image optimization
- Route-based code splitting
- Lazy-loaded project pages
- Web performance monitoring
- Privacy-friendly portfolio analytics
- Core Web Vitals reporting
- Automated Lighthouse checks
- Bundle-size monitoring

### Version 1.5 — Content Management

Planned:

- Easier project-content management
- Markdown-powered case studies
- Project draft and published states
- Automated sitemap generation
- Automated social-preview images
- Project tags and advanced filtering
- Project sorting controls
- Multilingual portfolio support

### Future AI Features

Planned:

- AI portfolio assistant
- Recruiter-focused project questions
- Natural-language project searching
- AI-generated project summaries
- Skills and experience matching
- AWS Bedrock-powered portfolio chat
- Guardrails for project-information accuracy

## Design Principles

The portfolio follows these principles:

1. Make important experience easy to discover.
2. Explain the problem before describing the technology.
3. Show responsibilities clearly.
4. Present technical decisions without unnecessary complexity.
5. Use outcomes that are accurate and verifiable.
6. Keep the interface responsive and accessible.
7. Use animation to support the content rather than distract from it.
8. Keep project information maintainable from one source.

## Author

**Nabil Ajwad Rosedi**

Senior Software Engineer | Full-Stack Developer | Flutter Developer

- GitHub: [cruzerblade95](https://github.com/cruzerblade95)
- LinkedIn: [Nabil Ajwad Rosedi](https://www.linkedin.com/in/nabil-ajwad-rosedi-4bbb621a2/)
- npm: [cruzerblade95](https://www.npmjs.com/~cruzerblade95)

---

If you find this portfolio useful or interesting, consider visiting my GitHub profile and exploring the project repositories.