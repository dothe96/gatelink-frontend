import {Component} from 'react';
import './Header.css';
import { IoWalletOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";

class Header extends Component {
    render() { 
        return ( 
            <header>
                <div className="header-content element-wrapper">
                    <div className="logo">GateLink</div>
                    <div className="menu">
                        <ul>
                            <li>Projects</li>
                            <li>Resources</li>
                            <li className="goto">
                                <span>Marketplace</span>
                                <FiExternalLink style={{marginLeft: "5px"}} />
                            </li>
                            <li className="split"></li>
                            <li className="wallet"><IoWalletOutline /></li>
                        </ul>
                    </div>
                </div>
            </header>
         );
    }
}
 
export default Header;