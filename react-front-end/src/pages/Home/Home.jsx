import "./Home.css";
import React, { Component } from 'react';
import axios from 'axios';
import {Routes, Route, useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="home">
                <div className="home-child">
                    <h1 className="lets-get-you">Which page do you want to go?</h1>
                
                    <button className="home-signupbutton" onClick={() => navigate("/signup")}>
                        <div className="home-signup-wrapper">
                        <div className="home-signup">Create an Account</div>
                        </div>
                    </button>

                    <button className="home-loginButton" onClick={() => navigate("/login")}>
                        <div className="home-login-wrapper">
                        <div className="home-loginText">Login to existing Account.</div>
                        </div>
                    </button>

                </div>
        </div>
    );
}

export default Home;