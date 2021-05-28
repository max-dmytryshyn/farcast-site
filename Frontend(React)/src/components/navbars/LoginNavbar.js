import React from "react"

import logo from "../../images/homepage_images/farcast_logo.svg"
import "./LoginNavbar.css"

function LoginNavbar() {
    return (
        <div id="login-navbar">
          <nav>
            <a href="/home"><img src = {logo} className="logo-login"></img></a>
          </nav>
        </div>
    )
}

export default LoginNavbar