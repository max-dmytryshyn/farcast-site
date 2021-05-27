import React from "react"
import "./Profile.css"
import state from "../../redux/state" 

class Profile extends React.Component {

    render() {
        return (
            <div className="Settings">
                <div class="container">
                    <form class="form" id="register">
                        <h1 class="form__title">Personal Account</h1>
                        <div class="check_box">
                            <h5 class="text">First name</h5>
                            <h3 class="text_two">{state.userData.firstName}</h3>
                            <div class = "change-button" >
                            <a href="#" target="_self" class="btn btn-primary-profile btn-lg active" role="button" aria-pressed="true">Change</a></div>
                        </div>
                        <hr/>
                        <div class="check_box">
                            <h5 class="text">Last name</h5>
                            <h3 class="text">{state.userData.lastName}</h3>
                            <div class = "change-button" >
                            <a href="#" target="_self" class="btn btn-primary-profile btn-lg active" role="button" aria-pressed="true">Change</a></div>
                        </div>
                        <hr/>
                        <div class="check_box">
                            <h5 class="text">Email</h5>
                            <h3 class="text">{state.userData.email}</h3>
                            <div class = "change-button" >
                            <a href="#" target="_self" class="btn btn-primary-profile btn-lg active" role="button" aria-pressed="true">Change</a></div>
                        </div>
                        <hr/>
                        <div class="check_box">
                            <h5 class="text">Login</h5>
                            <h3 class="text">{state.userData.username}</h3>
                            </div>
                        <hr/>
                        <div class="check_box">
                            <h5 class="text">Password</h5>
                            <h3 class="text">{state.userData.password}</h3>
                            <div class = "change-button" >
                            <a href="#" target="_self" class="btn btn-primary-profile btn-lg active" role="button" aria-pressed="true">Change</a></div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Profile