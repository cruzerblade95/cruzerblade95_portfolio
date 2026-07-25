import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import Toolstack from "./Toolstack";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <>
      <Particle />

      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1
                style={{
                  fontSize: "2.1em",
                  paddingBottom: "20px",
                }}
              >
                Know Who <strong className="purple">I&apos;M</strong>
              </h1>

              <AboutCard />
            </Col>

            <Col
              md={5}
              style={{
                paddingTop: "120px",
                paddingBottom: "50px",
              }}
              className="about-img"
            >
              <img
                src={laptopImg}
                alt="Software development workspace"
                className="img-fluid"
              />
            </Col>
          </Row>

          <h1 className="project-heading">
            Professional <strong className="purple">Skillset</strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I Use
          </h1>

          <Toolstack />

          <h1 className="project-heading">
            Career <strong className="purple">Experience</strong>
          </h1>

          <Row className="experience-grid">
            <Col md={6}>
              <div className="experience-card">
                <span className="experience-date">
                  January 2025 – June 2026
                </span>

                <h3>Senior Software Engineer</h3>

                <h4>Megah Fintech Sdn. Bhd.</h4>

                <p>
                  Led the development of fintech features, designed secure
                  payment-related APIs, integrated blockchain workflows, and
                  contributed to software architecture planning and code
                  reviews.
                </p>
              </div>
            </Col>

            <Col md={6}>
              <div className="experience-card">
                <span className="experience-date">
                  February 2023 – December 2024
                </span>

                <h3>Software Engineer</h3>

                <h4>MyRich Dynasty Networks Sdn. Bhd.</h4>

                <p>
                  Built enterprise systems using Laravel, developed
                  cross-platform Flutter applications, improved existing
                  features, and contributed to a React application deployed
                  through AWS Amplify and GitHub-based CI/CD.
                </p>
              </div>
            </Col>

            <Col md={6}>
              <div className="experience-card">
                <span className="experience-date">
                  March 2022 – September 2022
                </span>

                <h3>Full-Stack Developer</h3>

                <h4>AdEasy</h4>

                <p>
                  Translated business and departmental requirements into tested
                  website improvements while collaborating through sprint
                  planning and iterative software delivery.
                </p>
              </div>
            </Col>

            <Col md={6}>
              <div className="experience-card">
                <span className="experience-date">
                  December 2020 – February 2022
                </span>

                <h3>Programmer</h3>

                <h4>PocketData (M) Sdn. Bhd.</h4>

                <p>
                  Developed and maintained application features in a Scrum
                  environment, analyzed user requirements, and delivered
                  reliable and tested software solutions.
                </p>
              </div>
            </Col>
          </Row>

          <h1 className="project-heading">
            Certifications &amp;{" "}
            <strong className="purple">Professional Learning</strong>
          </h1>

          <Row className="certification-grid">
            <Col md={4}>
              <div className="certification-card">
                <h3>AWS Cloud Practitioner Essentials</h3>

                <p>
                  Covered foundational AWS cloud concepts, core services,
                  security, architecture, support, and pricing.
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="certification-card">
                <h3>End User Computing on AWS</h3>

                <p>
                  Completed advanced learning covering AWS end-user computing
                  services and cloud-based workspace solutions.
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="certification-card">
                <h3>CCNA Routing and Switching</h3>

                <p>
                  Learned networking fundamentals, IPv4 and IPv6, VLANs,
                  routing, switching, security, and network troubleshooting.
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="certification-card">
                <h3>Designing RESTful APIs</h3>

                <p>
                  Studied resource-oriented API design, HTTP methods,
                  authentication, response structures, and maintainability.
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="certification-card">
                <h3>Flutter Essential Training</h3>

                <p>
                  Covered cross-platform application development using Flutter,
                  Dart, responsive interfaces, and reusable widgets.
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="certification-card">
                <h3>Database Design Fundamentals</h3>

                <p>
                  Studied relational database design, data relationships,
                  normalization, queries, and maintainable data structures.
                </p>
              </div>
            </Col>
          </Row>

          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;