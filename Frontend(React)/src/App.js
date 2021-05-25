import React from "react"

import {Route, Link} from "react-router-dom"
import "./style.css"
import Homepage from "./Homepage"

function App() {
    return (
        <div>
            <Route path="/home" component={Homepage} />
        </div>
    )
}

export default App