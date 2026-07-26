import React from "react";
import {
  FiBox,
  FiCloud,
  FiCode,
  FiLayers,
  FiSmartphone,
  FiTrendingUp,
} from "react-icons/fi";

import projects from "../../data/projects";

function ProjectOverviewStats() {
  const categoryCount = new Set(
    projects.map((project) => project.category)
  ).size;

  const productionProjectCount = projects.filter((project) =>
    ["Production", "Live"].includes(project.status)
  ).length;

  const technologyCount = new Set(
    projects.flatMap((project) => project.technologies)
  ).size;

  const overviewItems = [
    {
      id: "case-studies",
      value: `${projects.length}`,
      label: "Detailed case studies",
      description:
        "Projects covering technical decisions, responsibilities, and outcomes.",
      icon: <FiLayers aria-hidden="true" />,
      accent: "purple",
    },
    {
      id: "specializations",
      value: `${categoryCount}`,
      label: "Project specializations",
      description:
        "Artificial intelligence, mobile, web, and cloud engineering.",
      icon: <FiCode aria-hidden="true" />,
      accent: "blue",
    },
    {
      id: "production",
      value: `${productionProjectCount}`,
      label: "Production systems",
      description:
        "Selected applications and infrastructure delivered to live environments.",
      icon: <FiTrendingUp aria-hidden="true" />,
      accent: "green",
    },
    {
      id: "technologies",
      value: `${technologyCount}+`,
      label: "Technologies demonstrated",
      description:
        "Languages, frameworks, services, platforms, and development tools.",
      icon: <FiBox aria-hidden="true" />,
      accent: "orange",
    },
  ];

  const capabilityItems = [
    {
      title: "Mobile engineering",
      description:
        "Cross-platform Flutter applications for Android and iOS.",
      icon: <FiSmartphone aria-hidden="true" />,
    },
    {
      title: "Full-stack systems",
      description:
        "Frontend interfaces, backend services, databases, and REST APIs.",
      icon: <FiCode aria-hidden="true" />,
    },
    {
      title: "Cloud and AI",
      description:
        "AWS deployments, AI-provider integrations, and production infrastructure.",
      icon: <FiCloud aria-hidden="true" />,
    },
  ];

  return (
    <section
      className="project-overview-stats"
      aria-labelledby="project-overview-title"
    >
      <div className="project-overview-stats-heading">
        <span className="section-eyebrow">
          Engineering portfolio
        </span>

        <h2 id="project-overview-title">
          Experience across the complete product lifecycle.
        </h2>

        <p>
          From mobile interfaces and backend APIs to AI integrations
          and production cloud deployments.
        </p>
      </div>

      <div className="project-stat-grid">
        {overviewItems.map((item) => (
          <article
            key={item.id}
            className={`project-stat-card accent-${item.accent}`}
          >
            <div className="project-stat-icon">{item.icon}</div>

            <strong>{item.value}</strong>
            <span>{item.label}</span>
            <p>{item.description}</p>
          </article>
        ))}
      </div>

      <div className="project-capability-grid">
        {capabilityItems.map((item) => (
          <article
            key={item.title}
            className="project-capability-item"
          >
            <div className="project-capability-icon">
              {item.icon}
            </div>

            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectOverviewStats;