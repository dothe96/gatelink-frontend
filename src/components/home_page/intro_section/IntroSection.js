import React, { Component } from "react";
import "./IntroSection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class IntroSection extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4000
    };
    return (
      <section className="intro-section">
        <div className="intro-section-overlay"></div>
        <div className="intro-content element-wrapper">
          <div className="information-area">
            <div className="intro-title">Your own game assets</div>
            <div className="intro-description">
              <p>
                With Gatelink you can create project, mint, buy and sell your
                NFTs easily
              </p>
              <div className="intro-buttons">
                <a href="/#" className="btn">
                  Create
                </a>
                <a href="/#" className="btn">
                  Marketplace
                </a>
              </div>
            </div>
          </div>
          <div className="projects-area">
            <Slider {...settings}>
              <div>
                <div className="slide-item"></div>
              </div>
              <div>
                <div className="slide-item"></div>
              </div>
              <div>
                <div className="slide-item"></div>
              </div>
              <div>
                <div className="slide-item"></div>
              </div>
              <div>
                <div className="slide-item"></div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

export default IntroSection;
