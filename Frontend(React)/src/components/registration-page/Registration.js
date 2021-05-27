import React from "react"
import axios from 'axios';
import "./Registration.css"

class Registration extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "", 
            first_name: "", 
            last_name: "",
            email: "",
        }
    }
    setUsername = (e) => {
        this.setState({ username: e.target.value });
    }
    setPassword = (e) => {
        this.setState({ password: e.target.value });
    }
    setFirstName = (e) => {
        this.setState({ first_name: e.target.value });
    }
    setLastName = (e) => {
        this.setState({ last_name: e.target.value });
    }
    setEmail = (e) => {
        this.setState({ email: e.target.value });
    }

    handleRegister = () => {
        const { username, password, first_name, last_name, email } = this.state;
        axios.post('http://127.0.0.1:8000/users/', {
            password: password,
            username: username, 
            first_name: first_name, 
            last_name: last_name, 
            email: email
        }).then(function () {
            console.log('succesful register')
        }).catch(() => {
            alert('error');
        });
    }
    render() {
        return (
            <div className="Registration">
                <div class="containerRegister">
                    <form class="form" id="register">
                        <h1 class="form__title">Registration</h1>
                        <form class="form_one" id="formOne">
                        <div class="form__message form__message--error"></div>
                        <div class="form__input-group">
                            <h5 class="name">Name</h5>
                            <input type="text" class="form__input" id="first_name" autofocus placeholder="Enter name" onChange={this.setFirstName}/>
                            <div class="form__input-error-message"></div>
                        </div>
                        <div class="form__input-group">
                            <h5 class="password">Password</h5>
                            <input type="password" class="form__input" autofocus placeholder="Enter password"  onChange={this.setPassword}/>
                        <div class="form__input-error-message"></div>
                        </div>
                        </form>
                        <form class="form_two" id="formTwo">
                        <div class="form__input-groups">
                            <h5 class="surname">Surname</h5>
                            <input type="text" class="form__input" autofocus placeholder="Enter surname"  onChange={this.setLastName}/>
                            <div class="form__input-error-message"></div>
                        </div>
                        <div class="form__input-group">
                            <h5 class="repeat_password">Repeat your password</h5>
                            <input type="password" class="form__input" autofocus placeholder="Repear your password"/>
                        <div class="form__input-error-message"></div>
                        </div>
                        </form>
                        <form class="form_three" id="formThree">
                        <div class="form__input-group">
                            <h5 class="username">Login</h5>
                            <input type="text" class="form__input" autofocus placeholder="Enter username"  onChange={this.setUsername}/>
                            <div class="form__input-error-message"></div>
                        </div>
                        <div class="form__input-group">
                            <h5 class="email">Email</h5>
                            <input type="email" class="form__input" autofocus placeholder="Enter email"  onChange={this.setEmail}/>
                            <div class="form__input-error-message"></div>
                        </div>
                        </form>
                        <div class = "register-button" onClick={this.handleRegister} >
                            <a href="#" target="_self" class="btn btn-primaryOne btn-lg active" role="button" aria-pressed="true">Register</a>
                        </div>
                    </form>
                </div>
            </div>
        )
    }


}
export default Registration