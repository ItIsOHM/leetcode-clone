import "./LoginPage.css";
import React, { Component } from 'react';
import axios from 'axios';
import {Routes, Route, useNavigate} from 'react-router-dom';

class LoginPage extends Component {
    render() {
        return (
            <div className="login">
                <div className="login-child">
                    <h1 className="lets-get-you">Already have an account?</h1>
                    <div className="emailframe">
                        <label className="what-should-we-call-you-wrapper">
                        <div className="what-should-we">Enter your email:</div>
                        </label>
                        <input
                        className="thebestemailcom"
                        type="email"
                        placeholder="thebest@email.com"
                        maxLength
                        minLength
                        
                        />
                    </div>
                    <div className="passwordframe">
                        <label className="what-should-we-call-you-wrapper">
                        <div className="what-should-we">Enter your password:</div>
                        </label>
                        <input
                        className="thebestemailcom"
                        type="password"
                        placeholder="#verysecurepassword"
                        maxLength
                        minLength
                        />
                    </div>
                    <button className="loginButton">
                        <div className="login-wrapper">
                        <div className="loginText">Login to existing Account.</div>
                        </div>
                    </button>
                </div>
            </div>
        );
    }
}

export default LoginPage;