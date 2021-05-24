import React from "react"

import {Route, Link} from "react-router-dom"
import "./style.css"
//import "./login.css"
//import "./register.css"
//import "./settening.css"
import Login from "./components/Login"
import Homepage from "./Homepage"
import Register from "./components/Register"
import Settening from "./components/Settening"

function App() {
    return (
        <div>
            <Route path="/home" component={Homepage} /> 
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/settening" component={Settening} />
        </div>
    )
}

export default App