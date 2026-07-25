import React from "react";
import {
  BsArrowUpRight,
  BsGithub,
} from "react-icons/bs";
import Reveal from "../Reveal";

function ProjectCard({
  index,
  title,
  category,
  description,
  technologies,
  ghLink,
  demoLink,
  demoLabel = "Live project",
  accent = "blue",
  featured = false,
}) {
  return (
    <Reveal
      className={`project-showcase-card accent-${accent} ${
        featured ? "project-featured" : ""
      }`}
      delay={(index % 3) * 80}
    >
      <div className="project-card-visual">
        <span className="project-card-index">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div
          className="project-visual-lines"
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
        </div>

        <div className="project-visual-label">
          {category}
        </div>
      </div>

      <div className="project-card-content">
        <div className="project-card-heading">
          <span>{category}</span>

          {featured && (
            <strong>Featured</strong>
          )}
        </div>

        <h2>{title}</h2>

        <p>{description}</p>

        <div className="tag-list">
          {technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        <div className="project-card-links">
          {ghLink && (
            <a
              href={ghLink}
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
              Source code
            </a>
          )}

          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noreferrer"
            >
              {demoLabel}
              <BsArrowUpRight />
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default ProjectCard;