import React from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { projectCategories } from "../../data/projects";

function ProjectFilters({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  projectCount,
}) {
  const clearSearch = () => {
    setSearchTerm("");
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
  };

  const hasActiveFilters =
    searchTerm.trim() !== "" || selectedCategory !== "All";

  return (
    <div className="project-filter-wrapper">
      <div className="project-filter-top">
        <div className="project-search-box">
          <FiSearch
            className="project-search-icon"
            aria-hidden="true"
          />

          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search projects, skills, or technologies..."
            aria-label="Search projects"
            className="project-search-input"
          />

          {searchTerm && (
            <button
              type="button"
              className="project-search-clear"
              onClick={clearSearch}
              aria-label="Clear project search"
            >
              <FiX aria-hidden="true" />
            </button>
          )}
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            className="project-reset-button"
            onClick={resetFilters}
          >
            Reset filters
          </button>
        )}
      </div>

      <div className="project-category-row">
        <div
          className="project-category-buttons"
          role="group"
          aria-label="Filter projects by category"
        >
          {projectCategories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                className={`project-category-button ${
                  isActive ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
                aria-pressed={isActive}
              >
                {category}
              </button>
            );
          })}
        </div>

        <p className="project-result-count" aria-live="polite">
          <span>{projectCount}</span>{" "}
          {projectCount === 1 ? "project" : "projects"} found
        </p>
      </div>
    </div>
  );
}

export default ProjectFilters;