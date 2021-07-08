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
              <nav>
                <img src = {logo} className="logo"></img>
                <h3 id="welcome"> Welcome, {localStorage.getItem("first name")}</h3>
              </nav>
            </div>
          </div>
          :
          <div id="navbar"> 
            <nav>
              <img src = {logo} className="logo"></img>
              <ul className="navlist"> 
                <li><a href="#start">Home</a></li>
                <li><a href="#features_part">About</a></li>
                <li><a href="#pay_plans_part">Prices</a></li>
                <li><a href="/login">Sign in</a></li>
              </ul>
            </nav>
          </div>
          
        }
      </div>
    )
  }
}
export default Nav
