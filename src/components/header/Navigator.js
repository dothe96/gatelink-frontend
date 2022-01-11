import { NavLink } from "react-router-dom";

function Navigator(props) {
    return (
        <div className="menu">
            <ul className="navigator">
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
                <li>
                    {props.renderWalletArea()}
                </li>
            </ul>
        </div>
    );
}

export default Navigator;