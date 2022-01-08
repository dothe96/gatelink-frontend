import { Component } from "react";
import "./ProjectGuideSection.css";

class ProjectGuideSection extends Component {
  render() {
    return (
      <section className="project-guide-section section-layout">
        <div className="project-guide-content element-wrapper">
          <div className="section-title">Create assets for your games</div>
          <div className="guide-content">
            <div className="steps">
              <div class="number-wrap">
                <div class="number-step font-color1">1</div>
                <div class="cover-wrap">
                  <div class="number-cover"></div>
                </div>
              </div>
              <div class="step-content">
                <h2>Set up Metamask</h2>
                <p>
                  Sagittis, audantium sem eveniet lacus pede porttitor aenean.
                </p>
              </div>
            </div>
            <div className="steps">
              <div class="number-wrap">
                <div class="number-step font-color1">2</div>
                <div class="cover-wrap">
                  <div class="number-cover"></div>
                </div>
              </div>
              <div class="step-content">
                <h2>Set up Metamask</h2>
                <p>
                  Sagittis, audantium sem eveniet lacus pede porttitor aenean.
                </p>
              </div>
            </div>
            <div className="steps">
              <div class="number-wrap">
                <div class="number-step font-color1">3</div>
                <div class="cover-wrap">
                  <div class="number-cover"></div>
                </div>
              </div>
              <div class="step-content">
                <h2>Set up Metamask</h2>
                <p>
                  Sagittis, audantium sem eveniet lacus pede porttitor aenean.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectGuideSection;
