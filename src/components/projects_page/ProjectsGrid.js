import { useState } from "react";

function ProjectsGrid() {

    const [projectCount, setProjectCount] = useState(0);

    return ( 
        <div className="projects-grid">
            {(() => {
                if (projectCount > 0) {
                    return (
                        <div className="project-grid-content">
                            content
                        </div>
                    );
                }
                return (
                    <div className="no-projects">No projects yet</div>
                );
            })()}
        </div>
     );
}

export default ProjectsGrid;