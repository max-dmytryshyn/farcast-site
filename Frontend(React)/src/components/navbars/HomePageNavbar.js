import React from "react"
import logo from "../../images/homepage_images/farcast_logo.svg"
import "./HomePageNavbar.css"


function Nav () {
  return (
      <div id="navbar">
          <script src="script.js"></script>
       {localStorage.getItem("isLoggedIn") == "true"
        ? 
        <nav>        

        <ul className="navlist"> 
         <h3> Welcome, {localStorage.getItem("first name")}</h3>
          <li><a href="/predictions">Predictions</a></li>
          <li><a href="#">Statistics</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/login">Sign out</a></li>
        </ul>
      </nav>
        :
        <nav>
          <a href="/home"><img src = {logo} className="logo"></img></a>
          <ul className="navlist"> 
            <li><a href="#start">Home</a></li>
            <li><a href="#features_part">About</a></li>
            <li><a href="#pay_plans_part">Prices</a></li>
            <li><a href="/login">Sign in</a></li>
          </ul>
        </nav>
      }
      </div>
    )
}
export default Nav
