import { Component } from 'react'
import './IntroSection.css';

class IntroSection extends Component {
    render() { 
        return ( 
            <div className="intro-section">
                <div className="intro-section-overlay"></div>
                <div className="intro-content element-wrapper">
                    <div className="information-area">
                        <div className="intro-title">Your own game assets</div>
                        <div className="intro-description">
                            <p>
                                With Gatelink you can create project, mint, buy and sell your NFTs easily
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
                    <div className="action-area">Action</div>
                </div>
            </div>
         );
    }
}
 
export default IntroSection;
