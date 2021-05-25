import React from "react"
import "./Profile.css"

class Profile extends React.Component {
    // eslint-disable-next-line

    render() {
        return (
            <div className="Settings">
                <div class="container">
                    <form class="form" id="register">
                        <h1 class="form__title">Personal Account</h1>
                        <div class="check_box">
                            <h5 class="text">First name</h5>
                            <h3 class="text_two">First_name</h3>
                            <div class = "change-button" >
                            <a href="#" target="_self" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Change</a></div>
                        </div>
                        <hr/>
                        <div class="check_box">
                            <h5 class="text">Last name</h5>
                            <h3 class="text">Last_name</h3>
                            <div class = "change-button" >
                            <a href="#" target="_self" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Change</a></div>
                        </div>
                        <hr/>
                        <div class="check_box">
                            <h5 class="text">Email</h5>
                            <h3 class="text">MyEmail@gmail.com</h3>
                            <div class = "change-button" >
                            <a href="#" target="_self" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Change</a></div>
                        </div>
                        <hr/>
                        <div class="check_box">
                            <h5 class="text">Phone number</h5>
                            <h3 class="text">+380869297399</h3>
                            <div class = "change-button" >
                            <a href="#" target="_self" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Change</a></div>
                        </div>
                        <hr/>
                        <div class="check_box">
                            <h5 class="text">Login</h5>
                            <h3 class="text">UserNameForCast</h3>
                            </div>
                        <hr/>
                        <div class="check_box">
                            <h5 class="text">Password</h5>
                            <h3 class="text">**********</h3>
                            <div class = "change-button" >
                            <a href="#" target="_self" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Change</a></div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Profile