import React,  { Component } from "react"
import DataList from "./DataList" 
import HomePageNavbar from "../navbars/HomePageNavbar"
import "./PredictionTable.css"
import Calendare from "./Calendar"

class PredictionTable extends Component {
    render () {
        return <div id = "testone">
             <HomePageNavbar />
                <div className="head">                    
                    <span className="bake"> Що пекти </span>
                    <Calendare/>
                </div>                    
                    <DataList />
                </div>
    }
}

export default PredictionTable