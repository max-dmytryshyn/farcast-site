import React,  { Component } from "react"
import DataList from "./DataList" 
import HomePageNavbar from "../navbars/HomePageNavbar"
import "./PredictionTable.css"


class PredictionTable extends Component {
    render () {
        return <div>
                <div className="head">
                    <span className="bake"> Що пекти </span> 
                    <span className="search"> Пошук <hr className="division_line"/> </span>
                </div>                    
                    <DataList />
                    <HomePageNavbar />
                </div>
    }
}

export default PredictionTable