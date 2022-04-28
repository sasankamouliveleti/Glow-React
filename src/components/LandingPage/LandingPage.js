import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar"

function Homepage() {
    return (
        <React.Fragment>
            <Navbar loginflag={false} />
            <div class="section no-pad-bot" id="index-banner">
                <div class="container">
                    <br /><br />
                    <h1 class="header center orange-text">Welcome to Glow!</h1>
                    <div class="row center">
                        <h5 class="header col s12 light">Your one stop destination for all your skin care questions</h5>
                    </div>
                    <div class="row center">
                        <Link to="/SignUp"><a href="http://materializecss.com/getting-started.html" id="download-button" class="btn-large waves-effect waves-light orange">Get Started</a></Link>
                    </div>
                    <br /><br />

                </div>
            </div>
            <div class="container">
                <div class="section">
                    <div class="row">
                        <div class="col s12 m4">
                            <div class="icon-block">
                                <h2 class="center light-blue-text"><i class="material-icons">flash_on</i></h2>
                                <h5 class="center">Save money while shopping for skincare products</h5>

                                
                            </div>
                        </div>

                        <div class="col s12 m4">
                            <div class="icon-block">
                                <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
                                <h5 class="center">Learn about Skincare</h5>

                                
                            </div>
                        </div>

                        <div class="col s12 m4">
                            <div class="icon-block">
                                <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
                                <h5 class="center">Be Consistent with your Skincare Routine</h5>

                                
                            </div>
                        </div>
                    </div>

                </div>
                <br /><br />
            </div>
        <Footer />
        </React.Fragment>
    )
}

export default Homepage;