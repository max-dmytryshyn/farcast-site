import React from "react"

import {Route, Link} from "react-router-dom"
import Homepage from "./components/homepage/Homepage"
import Login from "./components/login-page/Login"

function App() {
    return (
        <div>
            <Route path="/home" component={Homepage} />
            <Route path="/login" component={Login} />
        </div>
    )
}

export default App