import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          Selected <strong className="purple">Projects</strong>
        </h1>

        <p style={{ color: "white" }}>
          Production work and open-source projects across AI, fintech, mobile,
          enterprise software, Web3, and cloud deployment.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="@cruzerblade95/ai-client"
              description="A TypeScript-first and provider-agnostic AI SDK with AWS Bedrock, OpenAI, and Anthropic support. It includes retries, timeouts, streaming, structured output, typed errors, and automated tests."
              technologies={[
                "TypeScript",
                "AWS Bedrock",
                "OpenAI",
                "Anthropic",
                "Vitest",
              ]}
              ghLink="https://github.com/cruzerblade95/ai-client"
              demoLink="https://www.npmjs.com/package/@cruzerblade95/ai-client"
              demoLabel="npm"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Web3 AI Portfolio"
              description="An AI-powered multi-chain portfolio analytics platform that combines blockchain wallet data with generative AI insights through a React frontend and AWS-backed API."
              technologies={[
                "React",
                "TypeScript",
                "AWS",
                "Amazon Bedrock",
                "Web3",
              ]}
              ghLink="https://github.com/cruzerblade95/web3-ai-portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="E-DA Wallet"
              description="An enterprise e-wallet platform featuring secure authentication, wallet management, QR payments, transaction history, and mobile-to-backend API integration."
              technologies={[
                "Flutter",
                "Dart",
                "Laravel",
                "MySQL",
                "REST API",
              ]}
              ghLink="https://github.com/cruzerblade95/E-DA-User-App"
              demoLink="https://mybc.tech/cruzerblade95/portfolio/e-da-wallet/225"
              demoLabel="Portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Penang Smart Kariah"
              description="A production Flutter application developed for community and mosque services. It integrates with backend APIs and has been released and maintained on Google Play and the Apple App Store."
              technologies={[
                "Flutter",
                "Dart",
                "Firebase",
                "REST API",
                "App Stores",
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="SPB MAINPP"
              description="A Laravel-based integrated management system developed for MAINPP to support organizational workflows through maintainable web modules and API-connected services."
              technologies={[
                "Laravel",
                "PHP",
                "MySQL",
                "JavaScript",
                "REST API",
              ]}
              demoLink="https://mims.mainpp.gov.my/"
              demoLabel="Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="AWS Portfolio Deployment"
              description="This React portfolio is deployed on a self-managed AWS EC2 Linux server using HestiaCP, Nginx, Apache, DNS configuration, HTTPS, and a custom domain."
              technologies={[
                "React",
                "AWS EC2",
                "Linux",
                "HestiaCP",
                "Nginx",
              ]}
              ghLink="https://github.com/cruzerblade95/cruzerblade95_portfolio"
              demoLink="https://mybc.tech"
              demoLabel="Live Website"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;