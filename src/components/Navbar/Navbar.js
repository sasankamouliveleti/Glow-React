import './Navbar.css';
import logo from '../../assests/img/logo.png';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";


function Navbar(props) {
    const [cartCount, setCartCount] = useState(0);
    const [profileBool, setProfileBool] = useState(false);
    const [isProductsPage, setProductsPage] = useState(false);

    useEffect(() => {
        if (window.location.href.includes('profile') > 0) {
            setProfileBool(true);
        } else {
            setProfileBool(false);
        }
        if (window.location.href.includes('product-feed') > 0) {
            setProductsPage(true);
        } else {
            setProductsPage(false);
        }
    }, []);
    const logoRoute = props.loginflag ?
        (<React.Fragment>
            <Link to="/Glow-React" className="brand-logo"><img src={logo} alt="Glow!" height="80px" /></Link>
        </React.Fragment>) :
        (<React.Fragment>
            <Link to="/Glow-React" className="brand-logo"><img src={logo} alt="Glow!" height="80px" /></Link>
        </React.Fragment>);
    const leftNavbarMenus = props.loginflag ?
        (<React.Fragment>
            <li><Link to="/tracker"><img src='/Glow-React/img/Tracker.png' width="60px" height="60px" /></Link></li>
            <li><Link to="/discussion"><img src='/Glow-React/img/rss.png' width="60px" height="60px" /></Link></li>
            <li><Link to="/product-feed"><img src='/Glow-React/img/shopping.png' width="60px" height="60px" /></Link></li>
        </React.Fragment>) : ''

    const navbarMenus = props.loginflag ?
        (<React.Fragment>
            <li className='listIcons'>
                <Link to='/cart'>
                    <Badge color="primary" badgeContent={props.cart}>
                        <img src='/Glow-React/img/cart.png' width="40px" height="40px" />
                    </Badge>
                </Link>
            </li>
            <li className='listIcons'>
                <Link to='/notification'>
                    <Badge>
                        <img src='/Glow-React/img/notification.png' width="40px" height="40px" />
                    </Badge>
                </Link>
            </li>
            <li className='listIcons'>
                <Link to='/profile'>
                    <Badge>
                        <img src='/Glow-React/img/profile.png' width="50px" height="50px" />
                    </Badge>
                </Link>
            </li>
            {profileBool ? (
                <React.Fragment>
                    <li>
                        <Link to="/Glow-React">Logout</Link>
                    </li>
                </React.Fragment>) : ''}
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
                {/* {isProductsPage ?
                    <ul>
                        <li>
                            <div class="center row">
                                <div class="col s12 " >
                                    <div class="row" id="topbarsearch">
                                        <div class="input-field col s6 s12 red-text">
                                            <i class="red-text material-icons prefix">search</i>
                                            <input type="text" placeholder="search" id="autocomplete-input" class="autocomplete red-text" onChange={(event) => { props.searchCalling(event.target.value) }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li> </ul> : ''} */}
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {navbarMenus}
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;