import React from "react";
import { Container } from "react-bootstrap";
import { BsArrowUpRight } from "react-icons/bs";
import Particle from "../Particle";
import Reveal from "../Reveal";
import ProjectCard from "./ProjectCards";

const projects = [
  {
    title: "@cruzerblade95/ai-client",
    category: "Developer Platform",
    description:
      "A TypeScript-first, provider-agnostic AI SDK supporting AWS Bedrock, OpenAI, and Anthropic. Built with retries, timeouts, streaming, structured output, typed errors, tests, and a clean provider architecture.",
    technologies: [
      "TypeScript",
      "AWS Bedrock",
      "OpenAI",
      "Anthropic",
      "Vitest",
    ],
    ghLink:
      "https://github.com/cruzerblade95/ai-client",
    demoLink:
      "https://www.npmjs.com/package/@cruzerblade95/ai-client",
    demoLabel: "View on npm",
    accent: "blue",
    featured: true,
  },
  {
    title: "Web3 AI Portfolio",
    category: "AI · Web3",
    description:
      "A multi-chain portfolio analytics platform that combines blockchain wallet data with generative AI insights through a responsive React experience and AWS-backed API.",
    technologies: [
      "React",
      "TypeScript",
      "AWS",
      "Bedrock",
      "Web3",
    ],
    ghLink:
      "https://github.com/cruzerblade95/web3-ai-portfolio",
    accent: "violet",
    featured: true,
  },
  {
    title: "E-DA Wallet",
    category: "Fintech · Mobile",
    description:
      "An enterprise e-wallet platform with secure authentication, wallet management, QR payments, transaction history, and dependable mobile-to-backend API integration.",
    technologies: [
      "Flutter",
      "Dart",
      "Laravel",
      "MySQL",
      "REST API",
    ],
    ghLink:
      "https://github.com/cruzerblade95/E-DA-User-App",
    demoLink:
      "https://mybc.tech/cruzerblade95/portfolio/e-da-wallet/225",
    demoLabel: "Case study",
    accent: "cyan",
  },
  {
    title: "Penang Smart Kariah",
    category: "Civic · Mobile",
    description:
      "A production Flutter application for community and mosque services, integrated with backend APIs and maintained through releases on Google Play and the Apple App Store.",
    technologies: [
      "Flutter",
      "Firebase",
      "REST API",
      "App Stores",
    ],
    accent: "green",
  },
  {
    title: "SPB MAINPP",
    category: "Enterprise Platform",
    description:
      "A Laravel-based integrated management system supporting organizational workflows through maintainable web modules, structured data, and API-connected services.",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "JavaScript",
      "REST API",
    ],
    demoLink: "https://mims.mainpp.gov.my/",
    demoLabel: "Visit platform",
    accent: "orange",
  },
  {
    title: "AWS Portfolio Deployment",
    category: "Cloud · DevOps",
    description:
      "A complete production deployment on a self-managed AWS EC2 Linux server using HestiaCP, Nginx, Apache, DNS, HTTPS, and a custom domain.",
    technologies: [
      "React",
      "AWS EC2",
      "Linux",
      "HestiaCP",
      "Nginx",
    ],
    ghLink:
      "https://github.com/cruzerblade95/cruzerblade95_portfolio",
    demoLink: "https://mybc.tech",
    demoLabel: "Live website",
    accent: "pink",
  },
];

function Projects() {
  return (
    <main className="page">
      <section className="page-hero projects-hero">
        <Particle />

        <Container>
          <Reveal>
            <span className="eyebrow">
              Selected work
            </span>

            <h1>
              Products built for
              <span className="gradient-text">
                {" "}
                real-world use.
              </span>
            </h1>

            <p>
              A selection of open-source and
              professional work across AI, fintech,
              mobile, enterprise software, Web3, and
              cloud delivery.
            </p>
          </Reveal>

          <Reveal
            className="project-hero-note"
            delay={150}
          >
            <span>01 — 06</span>

            <p>
              Each project reflects a different part
              of my engineering range: product
              thinking, system design, development,
              integration, testing, or production
              delivery.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section project-list-section">
        <Container>
          <div className="project-showcase-grid">
            {projects.map((project, index) => (
              <ProjectCard
                {...project}
                index={index}
                key={project.title}
              />
            ))}
          </div>

          <Reveal className="github-cta">
            <div>
              <span className="eyebrow">
                More engineering work
              </span>

              <h2>
                Explore experiments, learning
                projects, and source code.
              </h2>
            </div>

            <a
              className="button button-light"
              href="https://github.com/cruzerblade95"
              target="_blank"
              rel="noreferrer"
            >
              Open GitHub
              <BsArrowUpRight />
            </a>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}

export default Projects;