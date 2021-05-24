import React from "react"

import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"

import "./style.css"
import Login from "./components/Login"

function Homepage() {
    return (
        <div>
            <Header /> 
            <Body />
            <Footer />
        </div>
    )
}

export default Homepage