import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function SignUp(){
    return (
        <React.Fragment>
            <Navbar loginflag = {false}/>
        <div class="container">
        <div class="row card-panel registerForm">
                <h3>Register Form</h3>
                <br/>
                <div class="row">
                    <div class="input-field col s6">
                        <input id="first_name" type="text"/>
                        <label for="first_name">First Name</label>
                    </div>

                    <div class="input-field col s6">
                        <input id="last_name" type="text"/>
                        <label for="last_name">Last Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6">
                        <input id="email" type="email" name='email' />
                        <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s6">
                        <input id="enterPwd" type="password" />
                        <label for="enterPwd">Enter Password</label>
                    </div>

                    <div class="input-field col s6">
                        <input id="confirmPwd" type="password"/>
                        <label for="confirmPwd">Confirm Password</label>
                    </div>
                </div>
                <div class="row enter_home">
                    <div class="input-field col s6">
                        <button class="btn btn-large btn-register waves-effect waves-light regis" type="submit"
                            name="action" onclick="register()">Register
                        </button>
                    </div>
                </div>
        </div>
    </div>
    <Footer/>
    </React.Fragment>
    )
}

export default SignUp;