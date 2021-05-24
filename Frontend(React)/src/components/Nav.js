import React from "react"

import logo from "../images/farcast_logo.svg"
import tele from "../images/facebook.svg"

function Nav() {
    return (
        <div id="navbar">
          <nav>
            <img src = {logo} className="logo"></img>
            <ul className="navlist"> 
              <li><a href="#start">Home</a></li>
              <li><a href="#second_part">About</a></li>
              <li><a href="#third_part">Prices</a></li>
              <li><a href="/login">Sign in</a></li>
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
