import './Navbar.css';
import logo from '../../assests/img/logo.png';

function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper white">
                <a href="#" className="brand-logo"><img src={logo} alt="Glow!" height="80px"/></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Cart</a></li>
                    <li><a href="#">Profile</a></li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;