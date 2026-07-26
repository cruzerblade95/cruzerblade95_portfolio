import React from "react";

function getProjectSchemaType(category) {
  switch (category) {
    case "Mobile":
      return "MobileApplication";

    case "Web":
    case "AI":
      return "WebApplication";

    default:
      return "SoftwareSourceCode";
  }
}

function ProjectStructuredData({ project }) {
  if (!project) {
    return null;
  }

  const projectUrl = `${window.location.origin}/project/${project.slug}`;

  const externalProjectUrl =
    project.links.demo ||
    project.links.package ||
    project.links.github ||
    project.links.caseStudy ||
    projectUrl;

  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Person",
        "@id": `${window.location.origin}/#nabil-ajwad-rosedi`,
        name: "Nabil Ajwad Rosedi",
        url: window.location.origin,
        jobTitle: "Senior Software Engineer",
        description:
          "Senior Software Engineer and Full-Stack Developer specializing in Flutter, React, TypeScript, Laravel, AI integrations, APIs, and AWS cloud systems.",
        sameAs: [
          "https://github.com/cruzerblade95",
          "https://www.linkedin.com/in/nabil-ajwad-rosedi-4bbb621a2/",
          "https://www.npmjs.com/~cruzerblade95",
        ],
        knowsAbout: [
          "Full-Stack Software Development",
          "Flutter",
          "Dart",
          "React",
          "TypeScript",
          "JavaScript",
          "Laravel",
          "PHP",
          "Node.js",
          "REST APIs",
          "Firebase",
          "Amazon Web Services",
          "AWS Bedrock",
          "Artificial Intelligence Integration",
          "Blockchain Integration",
          "Mobile Application Development",
        ],
      },

      {
        "@type": getProjectSchemaType(project.category),
        "@id": `${projectUrl}#project`,
        name: project.title,
        headline: project.tagline,
        description: project.summary,
        url: projectUrl,
        mainEntityOfPage: projectUrl,
        applicationCategory: project.category,
        operatingSystem:
          project.category === "Mobile"
            ? "Android, iOS"
            : "Web",
        author: {
          "@id": `${window.location.origin}/#nabil-ajwad-rosedi`,
        },
        creator: {
          "@id": `${window.location.origin}/#nabil-ajwad-rosedi`,
        },
        programmingLanguage: project.technologies,
        keywords: [
          project.category,
          ...project.technologies,
          ...project.highlights,
        ].join(", "),
        codeRepository: project.links.github || undefined,
        downloadUrl: project.links.package || undefined,
        sameAs: externalProjectUrl,
        isAccessibleForFree: true,
      },

      {
        "@type": "BreadcrumbList",
        "@id": `${projectUrl}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: window.location.origin,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${window.location.origin}/project`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: projectUrl,
          },
        ],
      },
    ],
  };

  const cleanedStructuredData = JSON.parse(
    JSON.stringify(structuredData)
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(cleanedStructuredData),
      }}
    />
  );
}

export default ProjectStructuredData;