import React,  { Component } from "react"
import DataList from "./DataList" 
import HomePageNavbar from "../navbars/HomePageNavbar"
import "./PredictionTable.css"

class PredictionTable extends Component {
    render () {
        return <div id = "testone">
             <HomePageNavbar />
                <div className="head">
                    <span className="bake"> Що пекти </span>
                </div>                    
                    <DataList />
                </div>
    }
}

export default PredictionTable