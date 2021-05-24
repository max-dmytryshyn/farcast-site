import React, { useEffect, useState } from "react"
import axios from 'axios';


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
        axios.post('http://127.0.0.1:8000/api/token/', {
            password: password,
            username: username
        }).then(function () {
            console.log('succesful login')
        }).catch(() => {
            alert('error');
        });
    }
    render() {
        return (
            <div className="login">
                <div class="box1">Log In
                    <div class="Username">Email or sername</div>
                    <div class="row">
                        <div class="Username-field">
                            <input type="text" class="form-control" id="email" placeholder="Enter email or username" name="email" onChange={this.setLogin} />
                        </div>
                    </div>
                    <div class="Password">Password </div>
                    <div class="row">
                        <div class="Password-field">
                            <input type="password" class="form-control" placeholder="Enter password" id="pwd" onChange={this.setPassword} />
                        </div>
                        <div class="Remember-forgot-field">
                            <label class="form-check-label"><input class="form-check-input" type="checkbox" />Remember me</label>
                            <a class="Forgot-url" href="http://localhost:3000/" >Forgot your password?</a>
                        </div>
                    </div>
                    <button type="submit" onClick={this.handleLogin} class="btn btn-primary">Get start</button>
                    <div class="Create-an-account">Not registered yet?
                        <a class="Create-url" href="#">Create an account</a>
                    </div>
                </div>
                <div class="or-login-with">or login with...</div>
                <div class="login-photos" >
                    <a href="http://localhost:3000/">
                        <img src="google2.ico" alt="Google" />
                    </a>
                    <a href="http://localhost:3000/">
                        <img src="facebook.ico" alt="Facebook" />
                    </a>
                </div>
            </div>
        )
    }
}

export default Login