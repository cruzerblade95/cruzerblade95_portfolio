import React, { useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";

import PageMeta from "../PageMeta";
import Particle from "../Particle";
import Reveal from "../Reveal";

import ProjectCards from "./ProjectCards";
import ProjectFilters from "./ProjectFilters";
import ProjectOverviewStats from "./ProjectOverviewStats";

import projects from "../../data/projects";
import { filterProjects } from "../../utils/filterProjects";

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const filteredProjects = useMemo(
    () =>
      filterProjects(
        projects,
        searchTerm,
        selectedCategory
      ),
    [searchTerm, selectedCategory]
  );

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
  };

  return (
    <main className="project-page">
      <PageMeta
        title="Software Development Projects"
        description="Explore Nabil Ajwad Rosedi's AI, Flutter, full-stack, Laravel, React, TypeScript, API integration, and AWS cloud development projects."
        canonicalPath="/project"
      />

      <Particle />

      <Container className="project-section">
        <Reveal>
          <header className="project-page-header">
            <span className="section-eyebrow">
              Selected work
            </span>

            <h1 className="project-heading">
              Projects built to solve{" "}
              <span className="purple">
                real problems.
              </span>
            </h1>

            <p className="project-page-description">
              Explore my work across artificial intelligence,
              mobile development, full-stack systems, and cloud
              infrastructure. Each project includes its technical
              decisions, responsibilities, challenges, and
              outcomes.
            </p>
          </header>
        </Reveal>

        <Reveal delay={80}>
          <ProjectOverviewStats />
        </Reveal>

        <Reveal delay={100}>
          <ProjectFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            projectCount={filteredProjects.length}
          />
        </Reveal>

        {filteredProjects.length > 0 ? (
          <Row className="project-grid">
            {filteredProjects.map((project, index) => (
              <Col
                key={project.slug}
                xs={12}
                md={6}
                xl={4}
                className="project-card-column"
              >
                <Reveal delay={(index % 3) * 100}>
                  <ProjectCards project={project} />
                </Reveal>
              </Col>
            ))}
          </Row>
        ) : (
          <Reveal>
            <div className="project-empty-state">
              <div className="project-empty-icon">
                <FiSearch aria-hidden="true" />
              </div>

              <h2>No matching projects found</h2>

              <p>
                Try another keyword or select a different
                project category.
              </p>

              <button
                type="button"
                className="project-empty-reset"
                onClick={resetFilters}
              >
                Show all projects
              </button>
            </div>
          </Reveal>
        )}

        <Reveal>
          <section className="project-contact-banner">
            <div className="project-contact-content">
              <span className="section-eyebrow">
                Have a project in mind?
              </span>

              <h2>
                Let&apos;s build something useful together.
              </h2>

              <p>
                I&apos;m interested in opportunities involving
                full-stack development, Flutter applications,
                AI integrations, APIs, and AWS cloud systems.
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/nabil-ajwad-rosedi-4bbb621a2/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-contact-button"
            >
              Contact on LinkedIn
            </a>
          </section>
        </Reveal>
      </Container>
    </main>
  );
}

export default Projects;