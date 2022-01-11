import "./Projects.css";
import ProjectsGrid from "./ProjectsGrid";

function ProjectsPage() {
  return (
    <div className="projects-page-wrapper">
      <div className="projects-page-content element-wrapper">
        <div className="project-page-tile-area">
          <div className="project-page-title">Projects</div>
          <div className="project-page-statistic">365 projects</div>
        </div>
        <div className="projects-filter">
          <ul className="filter-tabs">
            <li>All</li>
            <li>Hot</li>
            <li>Verified</li>
          </ul>
          <input className="input-search"
              aria-invalid="false"
              placeholder="Search projects"
              name="search_projects"
            />
        </div>
        <ProjectsGrid />
      </div>
    </div>
  );
}

export default ProjectsPage;
