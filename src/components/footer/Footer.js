import { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-content element-wrapper">
          <div className="subcribe">
            <div className="subcribe-title">
              <h2>Stay up to date</h2>
              <p>Subcribe and join us to get the newest news</p>
            </div>
            <div className="subcribe-input">
              <input
                aria-invalid="false"
                placeholder="Your email address"
                name="email"
              />
              <button name="btnSubmitEmail" type="submit">
                Subcribe
              </button>
            </div>
          </div>
          <div className="footer-menu">
            <div className="footer-menu-item">
              <div className="footer-menu-item-title">Account</div>
              <ul className="footer-menu-item-content">
                <li>Register</li>
                <li>Register</li>
                <li>Register</li>
                <li>Register</li>
              </ul>
            </div>
            <div className="footer-menu-item">
              <div className="footer-menu-item-title">Resources</div>
            </div>
            <div className="footer-menu-item">
              <div className="footer-menu-item-title">Marketplace</div>
            </div>
            <div className="footer-menu-item">
              <div className="footer-menu-item-title">Join us</div>
            </div>
          </div>
          <div className="copy-right">© GateLink 2021</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
