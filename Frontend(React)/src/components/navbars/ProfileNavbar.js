import React from "react"
import logo from "../../images/homepage_images/farcast_logo.svg"
import "./ProfileNavbar.css"

function ProfileNavbar() {
    return (
        <div id="profile-navbar">
          <nav>
            <a href="/home"><img src = {logo} className="logo-profile"></img></a>
          </nav>
        </div>
    )
}

export default ProfileNavbar