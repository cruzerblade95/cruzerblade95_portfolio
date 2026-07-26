export function normalizeSearchValue(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

export function getProjectSearchContent(project) {
  const challengeContent = project.challenges.flatMap(
    (challenge) => [
      challenge.title,
      challenge.problem,
      challenge.solution,
    ]
  );

  return [
    project.title,
    project.shortTitle,
    project.category,
    project.status,
    project.tagline,
    project.summary,
    project.overview,
    project.problem,
    project.solution,
    project.role,
    ...project.responsibilities,
    ...project.architecture,
    ...project.technologies,
    ...project.highlights,
    ...project.outcomes,
    ...challengeContent,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export function filterProjects(
  projects,
  searchTerm = "",
  selectedCategory = "All"
) {
  const normalizedSearch = normalizeSearchValue(searchTerm);
  const normalizedCategory =
    normalizeSearchValue(selectedCategory);

  return projects.filter((project) => {
    const matchesCategory =
      normalizedCategory === "all" ||
      normalizeSearchValue(project.category) ===
        normalizedCategory;

    if (!matchesCategory) {
      return false;
    }

    if (!normalizedSearch) {
      return true;
    }

    const searchableContent =
      getProjectSearchContent(project);

    return searchableContent.includes(normalizedSearch);
  });
}