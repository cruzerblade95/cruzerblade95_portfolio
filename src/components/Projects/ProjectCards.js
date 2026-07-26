import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiExternalLink,
  FiGithub,
  FiPackage,
} from "react-icons/fi";

function ProjectCards({ project }) {
  const {
    slug,
    title,
    category,
    status,
    tagline,
    technologies,
    links,
  } = project;

  const visibleTechnologies = technologies.slice(0, 4);
  const remainingTechnologyCount =
    technologies.length - visibleTechnologies.length;

  return (
    <article className={`modern-project-card category-${category.toLowerCase()}`}>
      <div className="project-card-glow" aria-hidden="true" />

      <div className="project-card-top">
        <div className="project-card-labels">
          <span className="project-card-category">{category}</span>
          <span className="project-card-status">{status}</span>
        </div>

        <span className="project-card-number" aria-hidden="true">
          {String(project.id).padStart(2, "0")}
        </span>
      </div>

      <div className="project-card-visual" aria-hidden="true">
        <div className="project-visual-grid" />

        <div className="project-visual-orbit project-visual-orbit-one" />
        <div className="project-visual-orbit project-visual-orbit-two" />

        <div className="project-visual-code">
          <span>&lt;</span>
          <span>/</span>
          <span>&gt;</span>
        </div>

        <div className="project-visual-dot project-visual-dot-one" />
        <div className="project-visual-dot project-visual-dot-two" />
        <div className="project-visual-dot project-visual-dot-three" />
      </div>

      <div className="project-card-body">
        <h2 className="project-card-title">{title}</h2>

        <p className="project-card-tagline">{tagline}</p>

        <div
          className="project-card-technologies"
          aria-label="Project technologies"
        >
          {visibleTechnologies.map((technology) => (
            <span key={technology} className="project-technology-tag">
              {technology}
            </span>
          ))}

          {remainingTechnologyCount > 0 && (
            <span className="project-technology-tag project-technology-more">
              +{remainingTechnologyCount}
            </span>
          )}
        </div>
      </div>

      <footer className="project-card-footer">
        <Link
          to={`/project/${slug}`}
          className="project-details-link"
          aria-label={`View ${title} case study`}
        >
          View case study
          <FiArrowRight aria-hidden="true" />
        </Link>

        <div className="project-card-external-links">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-icon-link"
              aria-label={`View ${title} source code on GitHub`}
              title="GitHub repository"
            >
              <FiGithub aria-hidden="true" />
            </a>
          )}

          {links.package && (
            <a
              href={links.package}
              target="_blank"
              rel="noopener noreferrer"
              className="project-icon-link"
              aria-label={`View ${title} package`}
              title="Package"
            >
              <FiPackage aria-hidden="true" />
            </a>
          )}

          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-icon-link"
              aria-label={`Open ${title} live website`}
              title="Live website"
            >
              <FiExternalLink aria-hidden="true" />
            </a>
          )}

          {!links.demo && links.caseStudy && (
            <a
              href={links.caseStudy}
              target="_blank"
              rel="noopener noreferrer"
              className="project-icon-link"
              aria-label={`Open external ${title} case study`}
              title="External case study"
            >
              <FiExternalLink aria-hidden="true" />
            </a>
          )}
        </div>
      </footer>
    </article>
  );
}

export default ProjectCards;