import "./TV1.css";
import React, { Component } from 'react';
import axios from 'axios';
import {Routes, Route, useNavigate} from 'react-router-dom';

class TV1 extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    axios.post({url:'localhost:3001/signup', userData})
      .then((response) => {
        console.log(response.data.message); // Handle successful response
      })
      .catch((error) => {
        console.error(error.response.data.error); // Handle error response
      });
  };

  render() {
    return (
      <div className="tv-1">
        <div className="tv-1-child">
          <h1 className="lets-get-you">Let’s get you signed up!</h1>
          <div className="usernameframe">
            <label className="what-should-we-call-you-wrapper">
              <div className="what-should-we">What should we call you?</div>
            </label>
            <input
              className="username"
              type="text"
              placeholder="Username"
              maxLength
              minLength
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="sign-emailframe">
            <label className="what-should-we-call-you-wrapper">
              <div className="what-should-we">Enter your email:</div>
            </label>
            <input
              className="thebestemailcom"
              type="email"
              placeholder="thebest@email.com"
              maxLength
              minLength
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="sign-passwordframe">
            <label className="what-should-we-call-you-wrapper">
              <div className="what-should-we">Enter a strong password:</div>
            </label>
            <input
              className="thebestemailcom"
              type="password"
              placeholder="#verysecurepassword"
              maxLength
              minLength
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <button className="signupButton" onClick={this.handleSubmit}>
            <div className="sign-wrapper">
              <div className="sign">Sign me up!</div>
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default TV1;