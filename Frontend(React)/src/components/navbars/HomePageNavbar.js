import React from "react"
import logo from "../../images/homepage_images/farcast_logo.svg"
import { stack as Menu } from 'react-burger-menu'
import "./HomePageNavbar.css"


class Nav extends React.Component {
  handleLoginOut = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    localStorage.removeItem("first name");
    localStorage.removeItem("last name");
    localStorage.removeItem("password");
    localStorage.setItem("isLoggedIn", false);
  }
  showSettings = (event) => {
    event.preventDefault();
  }

  render () { 
    return (
      <div >
        {localStorage.getItem("isLoggedIn") == "true"
          ?   
          <div> 
            <Menu right>
              <a id="predictions" href="/predictions" className="menu-item">Predictions</a>
              <a id="statistics" href="#" className="menu-item">Statistics</a>
              <a id="profile" href="/profile" className="menu-item">Profile</a>
              <a id="sing-out" href="/home" className="menu-item" onClick={this.handleLoginOut}>Sign out</a>
            </Menu>
            <div id="navbar"> 
                <img src = {logo} className="homepage-logo"></img>
                <h3 id="welcome"> Welcome, {localStorage.getItem("first name")}</h3>
            </div>
          </div>
          :
          <div id="navbar"> 
              <img src = {logo} className="homepage-logo"></img>
              <ul className="navlist"> 
                <li><a class = "home" href="#start">Home</a></li>
                <li><a class = "about" href="#features_part">About</a></li>
                <li><a class = "prices" href="#pay_plans_part">Prices</a></li>
                <li><a class = "sing__in" href="/login">Sign in</a></li>
              </ul>
          </div>
          
        }
      </div>
    )
  }
}
export default Nav
