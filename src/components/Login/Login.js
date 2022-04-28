import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login() {
    let navigate = useNavigate();

    const login = () =>{
        navigate("/home", { replace: true });
    }
    return (
        <React.Fragment>
            <Navbar loginflag={false}/>
            <div className="container">
                <div id="login-page" class="row">
                    <h4>Login</h4>
                    <br />
                    <div class="col s12 z-depth-6 card-panel">
                        <br /><br />
                        <div class="row">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">email</i>
                                <input id="email" type="email" name='email' />
                                <label for="email" >Email</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s12">
                                <i class="material-icons prefix">lock_outline</i>
                                <input id="password" type="password" name='pwd' />
                                <label for="password">Password</label>
                            </div>
                        </div>
                        <div class="row loginBtn " onClick={login}>
                            <button className="btn btn-large btn-register waves-effect waves-light regis col s4" type="submit" name="action" >Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Login;

