import React from 'react';
import logo from '../../assests/img/logo.png';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Card from './Card';
import {Link} from "react-router-dom";

function Homepage() {
    return (
        <React.Fragment>
            <Navbar loginflag={true} />
            <br /><br />
            <div className='container'>
                <div class="row">
                    <div class="col s6">
                        <Card name="Tracker" />
                    </div>
                    <div class="col s6">
                        <Card name="Discussion" />
                    </div>
                </div>
                <div class="row">
                    <div class="col s6">
                        <Link to="/product-feed"><Card name="Product Feed" /></Link>
                    </div>
                    <div class="col s6">
                        <Card name="Product Offer Feed" />
                    </div>
                </div>
            </div>
            <br />
            <Footer />
        </React.Fragment>
    )
}

export default Homepage;