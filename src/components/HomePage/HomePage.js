import React from 'react';
import logo from '../../assests/img/logo.png';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Card from './Card';
import { Link } from "react-router-dom";
import './HomePage.css';
function Homepage() {
    return (
        <React.Fragment>
            <Navbar loginflag={true} />
            <br /><br />
            <div className='container'>
                <div class="row">
                    <div class="col s6">
                        <Link to="/tracker">
                            <Card name="Progress Tracker">
                                <img src='/Glow-React/img/calendar.png' alt="calender" width="450px" height="300px" className='img-cal' />
                            </Card>
                        </Link>
                    </div>
                    <div class="col s6">
                        <Link to="/discussion">
                            <Card name="Top Posts">
                                <div className='row center'>
                                    <div className='col s6'>
                                        <img src='/Glow-React/img/Discussions/oily.jpg' width="150px" height="150px" />
                                    </div>
                                    <div className='col s6'>
                                        <img src='/Glow-React/img/Discussions/dryskin.svg' width="150px" height="150px" />
                                    </div>
                                </div>
                                <div className='center'>
                                    <img src='/Glow-React/img/Discussions/beach.png' width="150px" height="100px" />
                                </div>
                            </Card>
                        </Link>
                    </div>
                </div>
                <div class="row">
                    <div class="col s6">
                        <Link to="/product-feed">
                            <Card name="Shop Products on Glow">
                                <div className='row center'>
                                    <div className='col s6'>
                                        <img src='/Glow-React/img/Products/1.jpg' width="150px" height="150px" />
                                    </div>
                                    <div className='col s6'>
                                        <img src='/Glow-React/img/Products/2.jpg' width="150px" height="150px" />
                                    </div>
                                </div>
                                <div className='row center'>
                                    <div className='col s6'>
                                        <img src='/Glow-React/img/Products/3.jpg' width="150px" height="150px" />
                                    </div>
                                    <div className='col s6'>
                                        <img src='/Glow-React/img/Products/4.jpg' width="150px" height="150px" />
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </div>
                    <div class="col s6">
                        <Link to="/offer-product-feed">
                            <Card name="Today's Offers" >
                                <br/><br/><br/>
                                <div className='row center'>
                                    <div className='col s6'>
                                        <img src='/Glow-React/img/Products/1.jpg' width="150px" height="150px" />
                                    </div>
                                    <div className='col s6'>
                                        <img src='/Glow-React/img/Products/2.jpg' width="150px" height="150px" />
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </div>
                </div>
            </div>
            <br />
            <Footer />
        </React.Fragment>
    )
}

export default Homepage;