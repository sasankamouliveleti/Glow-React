import { Link } from "react-router-dom";

function Footer() {
    return (

        <footer class="page-footer orange">
            <div class="">
                <div class="container">
                    Copyright<Link to="/Glow-React"><a class="orange-text text-lighten-3">Glow!</a></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;