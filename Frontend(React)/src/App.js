import React from "react"

import {Route, Link} from "react-router-dom"
import "./style.css"
import "./login.css"
import Login from "./components/Login"
import Homepage from "./Homepage"

function App() {
    return (
        <div>
            <Route path="/home" component={Homepage} /> 
            <Route path="/login" component={Login} />
        </div>
    )
}

export default App