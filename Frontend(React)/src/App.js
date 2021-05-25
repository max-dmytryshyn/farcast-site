import React from "react"

import {Route, Link} from "react-router-dom"
import Homepage from "./components/homepage/Homepage"

function App() {
    return (
        <div>
            <Route path="/home" component={Homepage} />
        </div>
    )
}

export default App