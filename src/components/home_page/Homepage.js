import IntroSection from "./intro_section/IntroSection.js";
import ProjectGuideSection from "./project_guide_section/ProjectGuideSection.js";

function HomePage() {
  return (
    <div className="homepage-wrapper">
      <IntroSection />
      <ProjectGuideSection />
    </div>
  );
}

export default HomePage;
