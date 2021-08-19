import React from "react";
import axios from 'axios';
import "./Registration.css";
import RegistrationNavbar from "../navbars/RegistrationNavbar";


class Registration extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "", 
            first_name: "", 
            last_name: "",
            email: "",
            address: "",
            mobile_phone: "",
            comfirmPassword: "",
        }
        this.handleChange1 = (e) => {
            this.setState({
                password: e.target.value
            });
          };
        this.handleChange2 = (e) => {
            this.setState({
                comfirmPassword: e.target.value
            });
          };
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
    setAddress = (e) => {
        this.setState({ address: e.target.value});
    }
    setMobilePhone = (e) => {
        this.setState({ mobile_phone: e.target.value });
    }

    handleRegister = () => {
        const { username, password, first_name, last_name, email, address, mobile_phone } = this.state;
        axios.post('http://127.0.0.1:8000/users/all/', {
            password: password,
            username: username, 
            first_name: first_name, 
            last_name: last_name, 
            email: email,
            address: address,
            mobile_phone: mobile_phone
        }).then(() => {
            localStorage.setItem ("email", email);
            localStorage.setItem ("username", username);
            localStorage.setItem ("first name", first_name);
            localStorage.setItem ("last name", last_name);
            localStorage.setItem ("password", password);
            localStorage.setItem ("address", address);
            localStorage.setItem ("mobile_phone", mobile_phone);
            localStorage.setItem("isLoggedIn", true);
            this.props.history.push('/profile');
        });
    }

    checkPasswordValidation = (e) => {
        if (document.getElementById("passwordNotMatch")) {
        e.preventDefault(); 
        }
    }   

    render() { 
        return (
            <div className="Registration">
                <RegistrationNavbar/>
                <div class="containerRegister">
                    <form onSubmit = {this.checkPasswordValidation} name = "myForm" class="form" id="register">
                        <h1 class="form__title__head">Registration</h1>
                        <div class="form_one" id="formOne">
                            <div class="form__message form__message--error"></div>
                            <div class="form__input-group">
                                <h5 class="name">Name</h5>
                                <input required type="text" class="form__input" id="first_name" autofocus placeholder="Enter name" onChange={this.setFirstName}/>
                            </div>
                            <div data-validate="Comfirm Password is required" class="form__input-group">
                                <h5 class="password">Password</h5>
                                <input required minLength="8" value={this.state.password} type="password" className="form__input"
                                autofocus placeholder="Enter password"  onChange={this.setPassword, this.handleChange1}/>
                            </div>
                        </div>
                        <div class="form_two" id="formTwo">
                            <div class="form__message form__message--error"></div>
                            <div class="form__input-group">
                                <h5 class="surname">Surname</h5>
                                <input required type="text" class="form__input"  autofocus placeholder="Enter surname"  onChange={this.setLastName}/>  
                            </div>
                            <div class="form__input-group"> 
                                <h5 class="repeat_password">Repeat your password</h5>
                                <input value={this.state.comfirmPassword} required minLength="8" name="comfirmPassword" type="password" className="form__input"
                                autofocus placeholder="Repear your password" onChange={this.handleChange2}/> 
                                {this.state.comfirmPassword === "" ? ("") : this.state.password === this.state.comfirmPassword ? 
                                ("") : (<p id = "passwordNotMatch" className = "passwordNotMatch"> Passwords not match </p> ) } 
                            </div>
                        </div>
                        <div class="form_three" id="formThree">
                            <div class="form__message form__message--error"></div>
                            <div class="form__input-group">
                                <h5 class="username">Login</h5>
                                <input required type="text" class="form__input" autofocus placeholder="Enter login"  onChange={this.setUsername}/>
                            </div>
                            <div class="form__input-group">
                                <h5 class="email">Email</h5>
                                <input required type="email" class="form__input" id = "email" name = "email" autofocus placeholder="Enter email"  required minlength="8" onChange={this.setEmail}/>
                            </div>
                        </div>
                        <div class="form_three">
                            <div class="form__message form__message--error"></div>
                            <div class="form__input-group">
                                <h5 class="address">Address</h5>
                                <input required type="text" class="form__input" autofocus placeholder="Enter your address"  onChange={this.setAddress}/>
                            </div>
                            <div class="form__input-group">
                                <h5 class="mobile__phone">Mobile phone</h5>
                                <input required pattern="+[0-9]{12}" type="tel" class="form__input" autofocus placeholder="+380..."  minlength="13" maxlength="13" onChange={this.setMobilePhone}/>
                            </div>
                        </div>
                        <div class = "register-button"  onClick={this.handleRegister}>
                            <button   class="btn btn-primaryOne btn-lg active" type = "submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        )   
    }
}
export default Registration