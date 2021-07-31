import React from "react"

import {Route, Link} from "react-router-dom"
import Homepage from "./components/homepage/Homepage"
import Login from "./components/login-page/Login"
import Registration from "./components/registration-page/Registration"
import PredictionTable from "./components/prediction-table-page/PredictionTable"
import Profile from "./components/profile-page/Profile"
import { Provider } from "react-redux"
import store from './components/prediction-table-page/store'

function App() {
    return (
        <Provider store={store}>
            <div>
                <Route path="/home" component={Homepage} />
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
                <Route path="/predictions" component={PredictionTable} />
                <Route path="/profile" component={Profile} />
            </div>
        </Provider>
        
    )
}

export default App