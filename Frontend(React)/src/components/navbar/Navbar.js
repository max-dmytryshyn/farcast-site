import React from "react"

import logo from "../../images/homepage_images/farcast_logo.svg"
import "../navbar/Navbar.css"

function Nav() {
    return (
        <div id="navbar">
          <nav>
            <img src = {logo} className="logo"></img>
            <ul className="navlist"> 
              <li><a href="#start">Home</a></li>
              <li><a href="#features_part">About</a></li>
              <li><a href="#pay_plans_part">Prices</a></li>
              <li><a href="">Sign in</a></li>
            </ul>
            <div class="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
          </nav>
        </div>
    )
}

export default Nav
