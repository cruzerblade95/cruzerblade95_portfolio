import React, { useEffect, useState } from "react";
import {
  FiCheck,
  FiLink,
  FiLinkedin,
  FiShare2,
} from "react-icons/fi";

function ProjectShare({ project }) {
  const [copied, setCopied] = useState(false);
  const [supportsNativeShare, setSupportsNativeShare] =
    useState(false);

  const projectUrl = `${window.location.origin}/project/${project.slug}`;

  useEffect(() => {
    setSupportsNativeShare(
      typeof navigator !== "undefined" &&
        typeof navigator.share === "function"
    );
  }, []);

  useEffect(() => {
    if (!copied) {
      return undefined;
    }

    const copiedTimer = setTimeout(() => {
      setCopied(false);
    }, 2500);

    return () => clearTimeout(copiedTimer);
  }, [copied]);

  const copyProjectLink = async () => {
    try {
      await navigator.clipboard.writeText(projectUrl);
      setCopied(true);
    } catch {
        const temporaryInput = document.createElement("textarea");

      temporaryInput.value = projectUrl;
      temporaryInput.setAttribute("readonly", "");
      temporaryInput.style.position = "fixed";
      temporaryInput.style.opacity = "0";

      document.body.appendChild(temporaryInput);
      temporaryInput.select();

      document.execCommand("copy");
      document.body.removeChild(temporaryInput);

      setCopied(true);
    }
  };

  const shareProject = async () => {
    if (!navigator.share) {
      copyProjectLink();
      return;
    }

    try {
      await navigator.share({
        title: `${project.title} Case Study`,
        text: project.summary,
        url: projectUrl,
      });
    } catch (error) {
      if (error.name !== "AbortError") {
        copyProjectLink();
      }
    }
  };

  const linkedInShareUrl =
    "https://www.linkedin.com/sharing/share-offsite/" +
    `?url=${encodeURIComponent(projectUrl)}`;

  return (
    <section
      className="project-share"
      aria-labelledby="project-share-title"
    >
      <div className="project-share-heading">
        <span className="section-eyebrow">Share case study</span>

        <h2 id="project-share-title">
          Know someone interested in this project?
        </h2>

        <p>
          Share this case study with recruiters, engineering teams,
          or other developers.
        </p>
      </div>

      <div className="project-share-actions">
        <a
          href={linkedInShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-share-button linkedin"
          aria-label={`Share ${project.title} on LinkedIn`}
        >
          <FiLinkedin aria-hidden="true" />
          LinkedIn
        </a>

        <button
          type="button"
          className={`project-share-button copy ${
            copied ? "copied" : ""
          }`}
          onClick={copyProjectLink}
        >
          {copied ? (
            <FiCheck aria-hidden="true" />
          ) : (
            <FiLink aria-hidden="true" />
          )}

          {copied ? "Link copied" : "Copy link"}
        </button>

        {supportsNativeShare && (
          <button
            type="button"
            className="project-share-button native"
            onClick={shareProject}
          >
            <FiShare2 aria-hidden="true" />
            More options
          </button>
        )}
      </div>

      <span className="project-share-feedback" aria-live="polite">
        {copied
          ? "The project link has been copied to your clipboard."
          : ""}
      </span>
    </section>
  );
}

export default ProjectShare;