import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiExternalLink,
  FiGithub,
  FiPackage,
  FiTarget,
  FiUser,
  FiZap,
} from "react-icons/fi";

import Particle from "../Particle";
import PageMeta from "../PageMeta";
import Reveal from "../Reveal";

import projects, { getProjectBySlug } from "../../data/projects";
import ProjectStructuredData from "./ProjectStructuredData";
import ProjectShare from "./ProjectShare";

function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
    });
  }, [slug]);

  if (!project) {
    return (
        <main className="project-detail-page">
            <PageMeta
            title="Project Not Found"
            description="The requested portfolio project could not be found."
            canonicalPath="/404"
            />

            <Particle />

        <Container className="project-not-found-container">
          <Reveal>
            <div className="project-not-found">
              <span className="project-not-found-code">404</span>

              <h1>Project not found</h1>

              <p>
                The project you are looking for may have been moved or
                does not exist.
              </p>

              <Link to="/project" className="project-primary-button">
                <FiArrowLeft aria-hidden="true" />
                Return to projects
              </Link>
            </div>
          </Reveal>
        </Container>
      </main>
    );
  }

  const currentProjectIndex = projects.findIndex(
    (item) => item.slug === project.slug
  );

  const nextProject =
    projects[(currentProjectIndex + 1) % projects.length];

  return (
    <main className="project-detail-page">
        <PageMeta
        title={`${project.title} Case Study`}
        description={project.summary}
        canonicalPath={`/project/${project.slug}`}
        type="article"
        />

        <ProjectStructuredData project={project} />

        <Particle />

      <section className="project-detail-hero">
        <Container>
          <Reveal>
            <div className="project-detail-navigation">
                <nav
                className="project-breadcrumbs"
                aria-label="Project breadcrumb"
                >
                <Link to="/">Home</Link>

                <span aria-hidden="true">/</span>

                <Link to="/project">Projects</Link>

                <span aria-hidden="true">/</span>

                <span aria-current="page">{project.title}</span>
                </nav>

                <Link to="/project" className="project-back-link">
                <FiArrowLeft aria-hidden="true" />
                All projects
                </Link>
            </div>
            </Reveal>

          <Row className="align-items-center project-detail-hero-row">
            <Col lg={8}>
              <Reveal delay={80}>
                <div className="project-detail-labels">
                  <span className="project-detail-category">
                    {project.category}
                  </span>

                  <span className="project-detail-status">
                    <span className="project-status-dot" />
                    {project.status}
                  </span>
                </div>

                <h1 className="project-detail-title">
                  {project.title}
                </h1>

                <p className="project-detail-tagline">
                  {project.tagline}
                </p>

                <div className="project-detail-actions">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-primary-button"
                    >
                      <FiGithub aria-hidden="true" />
                      View source
                    </a>
                  )}

                  {project.links.package && (
                    <a
                      href={project.links.package}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-secondary-button"
                    >
                      <FiPackage aria-hidden="true" />
                      View package
                    </a>
                  )}

                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-secondary-button"
                    >
                      <FiExternalLink aria-hidden="true" />
                      Live website
                    </a>
                  )}

                  {project.links.caseStudy && (
                    <a
                      href={project.links.caseStudy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-secondary-button"
                    >
                      <FiExternalLink aria-hidden="true" />
                      External case study
                    </a>
                  )}
                </div>
              </Reveal>
            </Col>

            <Col lg={4}>
              <Reveal delay={160}>
                <div
                  className={`project-detail-visual category-${project.category.toLowerCase()}`}
                  aria-hidden="true"
                >
                  <div className="project-detail-visual-grid" />

                  <div className="project-detail-orbit project-detail-orbit-one" />
                  <div className="project-detail-orbit project-detail-orbit-two" />

                  <div className="project-detail-code">
                    <span>&lt;</span>
                    <span>/</span>
                    <span>&gt;</span>
                  </div>

                  <span className="project-detail-visual-number">
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="project-detail-content">
        <Reveal>
          <section className="project-case-section project-overview-section">
            <div className="project-section-heading">
              <span className="project-section-number">01</span>

              <div>
                <span className="section-eyebrow">Project overview</span>
                <h2>Understanding the project</h2>
              </div>
            </div>

            <p className="project-overview-text">
              {project.overview}
            </p>
          </section>
        </Reveal>

        <Row className="project-summary-grid">
          <Col lg={4}>
            <Reveal delay={50}>
              <article className="project-summary-card">
                <div className="project-summary-icon">
                  <FiTarget aria-hidden="true" />
                </div>

                <span>Problem</span>
                <h3>What needed to be solved</h3>
                <p>{project.problem}</p>
              </article>
            </Reveal>
          </Col>

          <Col lg={4}>
            <Reveal delay={100}>
              <article className="project-summary-card">
                <div className="project-summary-icon">
                  <FiZap aria-hidden="true" />
                </div>

                <span>Solution</span>
                <h3>How I approached it</h3>
                <p>{project.solution}</p>
              </article>
            </Reveal>
          </Col>

          <Col lg={4}>
            <Reveal delay={150}>
              <article className="project-summary-card">
                <div className="project-summary-icon">
                  <FiUser aria-hidden="true" />
                </div>

                <span>My role</span>
                <h3>{project.role}</h3>

                <p>
                  I contributed across planning, implementation,
                  integration, testing, and delivery based on the
                  project&apos;s requirements.
                </p>
              </article>
            </Reveal>
          </Col>
        </Row>

        <Reveal>
          <section className="project-case-section">
            <div className="project-section-heading">
              <span className="project-section-number">02</span>

              <div>
                <span className="section-eyebrow">
                  Responsibilities
                </span>
                <h2>What I worked on</h2>
              </div>
            </div>

            <div className="project-responsibility-grid">
              {project.responsibilities.map(
                (responsibility, index) => (
                  <div
                    key={responsibility}
                    className="project-responsibility-item"
                  >
                    <span className="project-responsibility-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p>{responsibility}</p>
                  </div>
                )
              )}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="project-case-section">
            <div className="project-section-heading">
              <span className="project-section-number">03</span>

              <div>
                <span className="section-eyebrow">
                  Technical architecture
                </span>
                <h2>How the system works</h2>
              </div>
            </div>

            <div className="project-architecture">
              {project.architecture.map((item, index) => (
                <React.Fragment key={`${item}-${index}`}>
                  <div className="project-architecture-node">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                  </div>

                  {index < project.architecture.length - 1 && (
                    <div
                      className="project-architecture-connector"
                      aria-hidden="true"
                    >
                      <FiArrowRight />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="project-case-section">
            <div className="project-section-heading">
              <span className="project-section-number">04</span>

              <div>
                <span className="section-eyebrow">
                  Engineering decisions
                </span>
                <h2>Challenges and solutions</h2>
              </div>
            </div>

            <div className="project-challenges-list">
              {project.challenges.map((challenge, index) => (
                <article
                  key={challenge.title}
                  className="project-challenge-card"
                >
                  <div className="project-challenge-header">
                    <span>
                      Challenge{" "}
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>{challenge.title}</h3>
                  </div>

                  <div className="project-challenge-content">
                    <div>
                      <span className="project-challenge-label">
                        The problem
                      </span>

                      <p>{challenge.problem}</p>
                    </div>

                    <div>
                      <span className="project-challenge-label">
                        The solution
                      </span>

                      <p>{challenge.solution}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Row className="project-technology-outcome-row">
          <Col lg={6}>
            <Reveal delay={50}>
              <section className="project-case-panel">
                <span className="section-eyebrow">
                  Technology stack
                </span>

                <h2>Tools and technologies</h2>

                <div className="project-detail-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </section>
            </Reveal>
          </Col>

          <Col lg={6}>
            <Reveal delay={100}>
              <section className="project-case-panel">
                <span className="section-eyebrow">
                  Project outcomes
                </span>

                <h2>What the project delivered</h2>

                <ul className="project-outcome-list">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome}>
                      <FiCheckCircle aria-hidden="true" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </Col>
        </Row>

        <Reveal>
        <ProjectShare project={project} />
        </Reveal>

        <Reveal>
        <section className="project-next-project">
            <div>
              <span className="section-eyebrow">
                Continue exploring
              </span>

              <p>Next project</p>
              <h2>{nextProject.title}</h2>
            </div>

            <Link
              to={`/project/${nextProject.slug}`}
              className="project-next-link"
              aria-label={`View ${nextProject.title} case study`}
            >
              View case study
              <FiArrowRight aria-hidden="true" />
            </Link>
          </section>
        </Reveal>
      </Container>
    </main>
  );
}

export default ProjectDetail;