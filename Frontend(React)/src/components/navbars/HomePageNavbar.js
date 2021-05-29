import React from "react"
import logo from "../../images/homepage_images/farcast_logo.svg"
import "./HomePageNavbar.css"


function Nav () {
  function handleLoginOut() {
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    localStorage.removeItem("first name");
    localStorage.removeItem("last name");
    localStorage.removeItem("password");
    localStorage.setItem("isLoggedIn", false)
    
  }
  return (
      <div id="navbar">
          <script src="script.js"></script>
       {localStorage.getItem("isLoggedIn") == "true"
        ? 
        <nav>
        <img src = {logo} className="logo"></img>

        <ul className="navlist"> 
         <h3> Welcome, {localStorage.getItem("first name")}</h3>
          <li><a href="/predictions">Predictions</a></li>
          <li><a href="#">Statistics</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/home" onClick={handleLoginOut}>Sign out</a></li>
        </ul>
      </nav>
        :
        <nav>
          <img src = {logo} className="logo"></img>
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
