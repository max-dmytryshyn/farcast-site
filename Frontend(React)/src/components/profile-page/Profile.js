import React from "react"
import "./Profile.css"
import ProfileNavbar from "../navbars/ProfileNavbar"


class Profile extends React.Component {

    render() {
        return (
            <div><ProfileNavbar/>
            <div className="Settings">
                <div class="container-profile">
                    <form class="form" id="settings">
                        <h1 class="form__title">Personal Account</h1>
                        <div class="check_box">
                            <h5 class="text">First name</h5>
                            <h3 class="first-name-text">{localStorage.getItem ("first name")}</h3>
                            <div class = "change-button" >
                            <a href="#" target="_self" class="btn btn-primary-profile btn-lg active" role="button" aria-pressed="true">Change</a></div>
                        </div>
                        <hr/>
                        <div class="check_box">
                            <h5 class="text">Last name</h5>
                            <h3 class="last-name-text">{localStorage.getItem ("last name")}</h3>
                            <div class = "change-button" >
                            <a href="#" target="_self" class="btn btn-primary-profile btn-lg active" role="button" aria-pressed="true">Change</a></div>
                        </div>
                        <hr/>
                        <div class="check_box">
                            <h5 class="text">Email</h5>
                            <h3 class="email-text">{localStorage.getItem ("email")}</h3>
                            <div class = "change-button" >
                            <a href="#" target="_self" class="btn btn-primary-profile btn-lg active" role="button" aria-pressed="true">Change</a></div>
                        </div>
                        <hr/>
                        <div class="check_box">
                            <h5 class="text">Address</h5>
                            <h3 class="address-text">{localStorage.getItem ("address")}</h3> 
                            <div class = "change-button" >
                            <a href="#" target="_self" class="btn btn-primary-profile btn-lg active" role="button" aria-pressed="true">Change</a></div>
                        </div>
                        <hr/>
                        <div class="check_box">
                            <h5 class="text">Mobile phone</h5>
                            <h3 class="mobile-phone-text">{localStorage.getItem ("mobile_phone")}</h3>
                            <div class = "change-button" >
                            <a href="#" target="_self" class="btn btn-primary-profile btn-lg active" role="button" aria-pressed="true">Change</a></div>
                        </div>
                        <hr/>
                        <div class="check_box">
                            <h5 class="text">Login</h5>
                            <h3 class="login-profile-text">{localStorage.getItem ("username")}</h3>
                        </div>
                        <hr/>
                        <div class="check_box">
                            <h5 class="text">Password</h5>
                            <h3 class="password-profile-text">**********</h3>
                            <div class = "change-button" >
                            <a href="#" target="_self" class="btn btn-primary-profile btn-lg active" role="button" aria-pressed="true">Change</a></div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}
export default Profile