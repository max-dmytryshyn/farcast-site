import React,  { Component } from "react"
import DataList from "./DataList" 
import ProfileNavbar from "../navbars/ProfileNavbar"
import "./PredictionTable.css"

class PredictionTable extends Component {
    render () {
        return <div id = "testone">
             <ProfileNavbar/>
                <div className="head">
                    <span className="bake"> Що пекти </span>
                </div>                    
                    <DataList />
                </div>
    }
}

export default PredictionTable