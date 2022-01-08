import { Component } from "react";
import "./Header.css";
import { IoWalletOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-content element-wrapper">
          <div className="logo-area">
            <NavLink to="/" className="logo">
              GateLink
            </NavLink>
          </div>
          <div className="menu">
            <ul>
              <li>
                <NavLink
                  to="/projects"
                  className={(state) =>
                    "nav-link" + (state.isActive ? " active" : "")
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resources"
                  className={(state) =>
                    "nav-link" + (state.isActive ? " active" : "")
                  }
                >
                  Resources
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/marketplace"
                  className={(state) =>
                    "nav-link" + (state.isActive ? " active" : "")
                  }
                >
                  Marketplace
                </NavLink>
              </li>
              <li className="split"></li>
              <li className="wallet">
                <IoWalletOutline />
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
