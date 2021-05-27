import React from "react"

import {Route, Link} from "react-router-dom"
import Homepage from "./components/homepage/Homepage"
import Login from "./components/login-page/Login"
import Registration from "./components/registration-page/Registration"
import Profile from "./components/profile-page/Profile"

function App() {
    return (
        <div>
            <Route path="/home" component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/profile" component={Profile} />
        </div>
    )
}

export default App