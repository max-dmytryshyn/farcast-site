import React from "react"

import logo from "../images/farcast_logo.svg"

function NavLogin() {
    return (
        <div id="navbar">
          <nav>
            <img src = {logo} className="logo"></img>
            <ul className="navlist"> 
              <li><a href="/home">Home</a></li>
              <li><a href="#">About</a></li> 
              <li><a href="/settening">Settening</a></li>
              <li><a href="#">Sign out</a></li>
            </ul>
          </nav>
        </div>
    )
}

export default NavLogin