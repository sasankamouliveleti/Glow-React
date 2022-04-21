import './Navbar.css';
import logo from '../../assests/img/logo.png';
import React from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {

    const navbarMenus = props.loginflag ?
        (<React.Fragment>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Profile</a></li>
        </React.Fragment>) :
        (<React.Fragment>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">SignUp</Link>
            </li>
        </React.Fragment>)
    return (
        <nav>
            <div className="nav-wrapper white">
                <a href="#" className="brand-logo"><img src={logo} alt="Glow!" height="80px" /></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {navbarMenus}
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;