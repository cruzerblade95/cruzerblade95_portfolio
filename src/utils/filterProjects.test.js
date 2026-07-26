import projects from "../data/projects";
import {
  filterProjects,
  getProjectSearchContent,
  normalizeSearchValue,
} from "./filterProjects";

describe("project filtering utility", () => {
  test("normalizes search values", () => {
    expect(normalizeSearchValue("  Flutter  ")).toBe(
      "flutter"
    );

    expect(normalizeSearchValue("AWS Bedrock")).toBe(
      "aws bedrock"
    );

    expect(normalizeSearchValue("")).toBe("");
    expect(normalizeSearchValue(null)).toBe("");
    expect(normalizeSearchValue(undefined)).toBe("");
  });

  test("returns all projects without active filters", () => {
    const results = filterProjects(projects, "", "All");

    expect(results).toHaveLength(projects.length);
  });

  test("filters projects by AI category", () => {
    const results = filterProjects(projects, "", "AI");

    expect(results.length).toBeGreaterThan(0);

    results.forEach((project) => {
      expect(project.category).toBe("AI");
    });
  });

  test("filters projects by Mobile category", () => {
    const results = filterProjects(
      projects,
      "",
      "Mobile"
    );

    expect(results.length).toBeGreaterThan(0);

    results.forEach((project) => {
      expect(project.category).toBe("Mobile");
    });
  });

  test("category filtering is case insensitive", () => {
    const lowercaseResults = filterProjects(
      projects,
      "",
      "mobile"
    );

    const uppercaseResults = filterProjects(
      projects,
      "",
      "MOBILE"
    );

    expect(lowercaseResults).toEqual(uppercaseResults);
  });

  test("searches projects by full title", () => {
    const results = filterProjects(
      projects,
      "AI Client SDK",
      "All"
    );

    expect(results).toHaveLength(1);
    expect(results[0].slug).toBe("ai-client-sdk");
  });

  test("searches projects by partial title", () => {
    const results = filterProjects(
      projects,
      "wallet",
      "All"
    );

    expect(
      results.some(
        (project) => project.slug === "e-da-wallet"
      )
    ).toBe(true);
  });

  test("searches projects by technology", () => {
    const results = filterProjects(
      projects,
      "Flutter",
      "All"
    );

    expect(results.length).toBeGreaterThan(0);

    results.forEach((project) => {
      const searchableContent =
        getProjectSearchContent(project);

      expect(searchableContent).toContain("flutter");
    });
  });

  test("searches projects by cloud technology", () => {
    const results = filterProjects(
      projects,
      "AWS EC2",
      "All"
    );

    expect(
      results.some(
        (project) =>
          project.slug === "aws-portfolio-deployment"
      )
    ).toBe(true);
  });

  test("searches projects by provider name", () => {
    const results = filterProjects(
      projects,
      "Anthropic",
      "All"
    );

    expect(results).toHaveLength(1);
    expect(results[0].slug).toBe("ai-client-sdk");
  });

  test("searches project responsibilities", () => {
    const results = filterProjects(
      projects,
      "Google Play",
      "All"
    );

    expect(
      results.some(
        (project) =>
          project.slug === "penang-smart-kariah"
      )
    ).toBe(true);
  });

  test("searches challenges and solutions", () => {
    const results = filterProjects(
      projects,
      "rate limits",
      "All"
    );

    expect(
      results.some(
        (project) => project.slug === "ai-client-sdk"
      )
    ).toBe(true);
  });

  test("combines category and text search", () => {
    const results = filterProjects(
      projects,
      "Laravel",
      "Mobile"
    );

    expect(
      results.some(
        (project) => project.slug === "e-da-wallet"
      )
    ).toBe(true);

    results.forEach((project) => {
      expect(project.category).toBe("Mobile");
    });
  });

  test("returns an empty array when nothing matches", () => {
    const results = filterProjects(
      projects,
      "technology-that-does-not-exist",
      "All"
    );

    expect(results).toEqual([]);
  });

  test("returns an empty array for an invalid category", () => {
    const results = filterProjects(
      projects,
      "",
      "Invalid Category"
    );

    expect(results).toEqual([]);
  });

  test("project search content includes important fields", () => {
    const project = projects[0];
    const searchContent = getProjectSearchContent(project);

    expect(searchContent).toContain(
      project.title.toLowerCase()
    );

    expect(searchContent).toContain(
      project.category.toLowerCase()
    );

    expect(searchContent).toContain(
      project.role.toLowerCase()
    );

    expect(searchContent).toContain(
      project.technologies[0].toLowerCase()
    );
  });
});