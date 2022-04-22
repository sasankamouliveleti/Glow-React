import './Navbar.css';
import logo from '../../assests/img/logo.png';
import React from 'react';
import { Link } from "react-router-dom";

function Navbar(props) {
    const logoRoute = props.loginflag ?
        (<React.Fragment>
            <Link to="/home" className="brand-logo"><img src={logo} alt="Glow!" height="80px" /></Link>
        </React.Fragment>) :
        (<React.Fragment>
            <Link to="/" className="brand-logo"><img src={logo} alt="Glow!" height="80px" /></Link>
        </React.Fragment>);
    const leftNavbarMenus = props.loginflag ?
        (<React.Fragment>
            <li><Link to="/tracker"><img src='./img/Tracker.png' width="60px" height="60px" /></Link></li>
            <li><Link to="/discussion"><img src='./img/rss.png' width="60px" height="60px" /></Link></li>
            <li><Link to="/product-feed"><img src='./img/shopping.png' width="60px" height="60px" /></Link></li>
        </React.Fragment>) : ''

    const navbarMenus = props.loginflag ?
        (<React.Fragment>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Profile</a></li>
            <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
        </React.Fragment>) :
        (<React.Fragment>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">SignUp</Link>
            </li>
        </React.Fragment>)
    return (
        <nav>

            <div className="nav-wrapper white">
                {logoRoute}
                <ul id="nav-mobile" className="left hide-on-med-and-down ">
                    <li>fsdfsdafsfsfsfsd</li>
                    {leftNavbarMenus}
                </ul>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {navbarMenus}
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;