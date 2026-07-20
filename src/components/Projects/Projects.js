import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Selected <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          A few examples of the products and platforms I’ve helped build.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Fintech Payments Platform"
              description="Built secure payment-related features and RESTful APIs that improved user engagement and system reliability for a fintech product."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Cross-platform Mobile App"
              description="Developed a Flutter mobile application with REST API integration and Firebase support for a modern digital experience, with deployment to app stores."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Enterprise Web Portal"
              description="Delivered Laravel-based web applications with improved performance, usability, and maintainability for business operations."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="AI-enabled Digital Solution"
              description="Integrated AI-assisted features and cloud deployment practices to help automate workflows and enhance product capabilities."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
