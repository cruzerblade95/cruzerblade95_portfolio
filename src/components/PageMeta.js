import { useEffect } from "react";

const DEFAULT_TITLE =
  "Nabil Ajwad Rosedi | Senior Software Engineer";

const DEFAULT_DESCRIPTION =
  "Senior Software Engineer and Full-Stack Developer specializing in Flutter, React, TypeScript, Laravel, AI integrations, APIs, and AWS cloud systems.";

const DEFAULT_IMAGE = "/logo512.png";

function findOrCreateMeta(attribute, value) {
  let element = document.querySelector(
    `meta[${attribute}="${value}"]`
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  return element;
}

function updateMetaName(name, content) {
  const element = findOrCreateMeta("name", name);
  element.setAttribute("content", content);
}

function updateMetaProperty(property, content) {
  const element = findOrCreateMeta("property", property);
  element.setAttribute("content", content);
}

function updateCanonical(url) {
  let canonical = document.querySelector(
    'link[rel="canonical"]'
  );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

function PageMeta({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  type = "website",
  canonicalPath = "",
}) {
  useEffect(() => {
    const fullTitle = title.includes("Nabil Ajwad")
      ? title
      : `${title} | Nabil Ajwad Rosedi`;

    const pageUrl = canonicalPath
      ? `${window.location.origin}${canonicalPath}`
      : window.location.href;

    const imageUrl = image.startsWith("http")
      ? image
      : `${window.location.origin}${image}`;

    document.title = fullTitle;

    updateMetaName("description", description);
    updateMetaName("author", "Nabil Ajwad Rosedi");
    updateMetaName(
      "keywords",
      [
        "Nabil Ajwad Rosedi",
        "Senior Software Engineer",
        "Full-Stack Developer",
        "Flutter Developer",
        "React Developer",
        "TypeScript Developer",
        "Laravel Developer",
        "AI Developer",
        "AWS Developer",
        "Malaysia Software Engineer",
      ].join(", ")
    );

    updateMetaProperty("og:title", fullTitle);
    updateMetaProperty("og:description", description);
    updateMetaProperty("og:type", type);
    updateMetaProperty("og:url", pageUrl);
    updateMetaProperty("og:image", imageUrl);
    updateMetaProperty(
      "og:site_name",
      "Nabil Ajwad Rosedi Portfolio"
    );

    updateMetaName("twitter:card", "summary_large_image");
    updateMetaName("twitter:title", fullTitle);
    updateMetaName("twitter:description", description);
    updateMetaName("twitter:image", imageUrl);

    updateCanonical(pageUrl);

    return () => {
      document.title = DEFAULT_TITLE;
      updateMetaName("description", DEFAULT_DESCRIPTION);
    };
  }, [title, description, image, type, canonicalPath]);

  return null;
}

export default PageMeta;