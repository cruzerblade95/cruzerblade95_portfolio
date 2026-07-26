import projects, {
  getFeaturedProjects,
  getProjectBySlug,
  projectCategories,
} from "./projects";

describe("portfolio project data", () => {
  test("contains portfolio projects", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  test("every project has a unique ID", () => {
    const projectIds = projects.map((project) => project.id);
    const uniqueProjectIds = new Set(projectIds);

    expect(uniqueProjectIds.size).toBe(projectIds.length);
  });

  test("every project has a unique slug", () => {
    const projectSlugs = projects.map(
      (project) => project.slug
    );

    const uniqueProjectSlugs = new Set(projectSlugs);

    expect(uniqueProjectSlugs.size).toBe(
      projectSlugs.length
    );
  });

  test("project slugs use URL-safe formatting", () => {
    projects.forEach((project) => {
      expect(project.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    });
  });

  test("every project contains the required information", () => {
    projects.forEach((project) => {
      expect(project.title).toBeTruthy();
      expect(project.category).toBeTruthy();
      expect(project.status).toBeTruthy();
      expect(project.tagline).toBeTruthy();
      expect(project.summary).toBeTruthy();
      expect(project.overview).toBeTruthy();
      expect(project.problem).toBeTruthy();
      expect(project.solution).toBeTruthy();
      expect(project.role).toBeTruthy();
    });
  });

  test("every project has responsibilities", () => {
    projects.forEach((project) => {
      expect(Array.isArray(project.responsibilities)).toBe(true);
      expect(project.responsibilities.length).toBeGreaterThan(0);
    });
  });

  test("every project has challenges and solutions", () => {
    projects.forEach((project) => {
      expect(Array.isArray(project.challenges)).toBe(true);
      expect(project.challenges.length).toBeGreaterThan(0);

      project.challenges.forEach((challenge) => {
        expect(challenge.title).toBeTruthy();
        expect(challenge.problem).toBeTruthy();
        expect(challenge.solution).toBeTruthy();
      });
    });
  });

  test("every project has an architecture flow", () => {
    projects.forEach((project) => {
      expect(Array.isArray(project.architecture)).toBe(true);
      expect(project.architecture.length).toBeGreaterThan(1);
    });
  });

  test("every project has technologies", () => {
    projects.forEach((project) => {
      expect(Array.isArray(project.technologies)).toBe(true);
      expect(project.technologies.length).toBeGreaterThan(0);
    });
  });

  test("every project has outcomes", () => {
    projects.forEach((project) => {
      expect(Array.isArray(project.outcomes)).toBe(true);
      expect(project.outcomes.length).toBeGreaterThan(0);
    });
  });

  test("every project category exists in the filters", () => {
    projects.forEach((project) => {
      expect(projectCategories).toContain(project.category);
    });
  });

  test("the category filters begin with All", () => {
    expect(projectCategories[0]).toBe("All");
  });

  test("getProjectBySlug returns the correct project", () => {
    const project = getProjectBySlug("ai-client-sdk");

    expect(project).toBeDefined();
    expect(project.title).toBe("AI Client SDK");
  });

  test("getProjectBySlug returns undefined for an invalid slug", () => {
    const project = getProjectBySlug(
      "this-project-does-not-exist"
    );

    expect(project).toBeUndefined();
  });

  test("getFeaturedProjects returns only featured projects", () => {
    const featuredProjects = getFeaturedProjects();

    expect(featuredProjects.length).toBeGreaterThan(0);

    featuredProjects.forEach((project) => {
      expect(project.featured).toBe(true);
    });
  });

  test("every links object uses supported link properties", () => {
    const supportedLinkProperties = [
      "github",
      "demo",
      "package",
      "caseStudy",
    ];

    projects.forEach((project) => {
      expect(project.links).toBeDefined();

      Object.keys(project.links).forEach((property) => {
        expect(supportedLinkProperties).toContain(property);
      });
    });
  });

  test("external project links use HTTPS", () => {
    projects.forEach((project) => {
      Object.values(project.links)
        .filter(Boolean)
        .forEach((link) => {
          expect(link.startsWith("https://")).toBe(true);
        });
    });
  });
});