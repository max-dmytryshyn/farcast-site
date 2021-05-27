import React, { useEffect, useState } from "react"
import axios from 'axios';
//import NavLogin from "./NavLogin";
import "./Login.css"
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import state from "../../redux/state" 

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }
    }
    setUsername = (e) => {
        this.setState({ username: e.target.value });
    }
    setPassword = (e) => {
        this.setState({ password: e.target.value });
    }
    handleLogin = () => {
        const { username, password } = this.state;
        axios.post('http://127.0.0.1:8000/users/login/', {
            password: password,
            username: username
        }).then(function () {
            axios.get('http://127.0.0.1:8000/users/all/username/' + username + '/')
            .then(function (response) {
                state.userData.email = response.data.email;
                state.userData.username = response.data.username;
                state.userData.firstName = response.data.first_name;
                state.userData.lastName = response.data.last_name;
                state.userData.password = response.data.password;
              })
        }).catch(() => {
            alert('error');
        });

 
    }
    render() {
        return (
            
            <div className="login">
               
                <div class="boxOne">Log In
                    <div class="Username">Username</div>
                    <div class="rowLogin">
                        <div class="Username-field">
                            <input type="text" class="form-control" id="email" placeholder="Enter username" name="email" onChange={this.setUsername} />
                        </div>
                    </div>
                    <div class="Password">Password </div>
                    <div class="row">
                        <div class="Password-field">
                            <input type="password" class="form-control" placeholder="Enter password" id="pwd" onChange={this.setPassword} />
                        </div>
                        <div class="Remember-forgot-field">
                            <label class="form-check-label"><input class="form-check-input" type="checkbox" />Remember me</label>
                            <a class="Forgot-url" href="#" >Forgot your password?</a>
                        </div>
                    </div>
                    <button type="submit" onClick={this.handleLogin} class="btn btn-primary">Get start</button>
                    <div class="Create-an-account">Not registered yet?
                        <a class="Create-url" href="/registration">Create an account</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login


  