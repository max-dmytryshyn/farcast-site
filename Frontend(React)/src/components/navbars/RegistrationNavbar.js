import React from "react"
import logo from "../../images/homepage_images/farcast_logo.svg"
import "./RegistrationNavbar.css"

function RegistrationNavbar() {
    return (
        <div id="registration-navbar">
          <nav>
            <a href="/home"><img src = {logo} className="logo-registration"></img></a>
          </nav>
        </div>
    )
}

export default RegistrationNavbar