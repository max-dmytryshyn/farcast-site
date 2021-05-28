import React, { Component } from 'react'
import axios from 'axios';

import "./Data.css"

class DataList extends Component {
    
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    setData = (date) => {
        axios.get("http://127.0.0.1:8000/predictions/all/date/" + date + "/"
        ).then((response) =>{this.setState({data: response.data})})
    }
    render () {
        window.onload = () => {
            this.setData("2016-04-11")
        }

        return (
            <div className="databox">
            {this.state.data.map(postDetail => {
                if (postDetail.hour < 9) {                  
                    return <div className="data">
                            <div> 0{postDetail.hour}.00 - {postDetail.hour + 1}.00 <hr/></div>                                      
                                <span>{postDetail.product.name}: </span>
                                <span>{postDetail.amount} шт</span>
                                <hr className="items_division"/>
                            </div>
                }
                else if (postDetail.hour == 9) {
                    return <div className="data">                            
                                <div> 0{postDetail.hour}.00 - {postDetail.hour + 1}.00 <hr/></div>
                                <span>{postDetail.product.name}: </span>
                                <span>{postDetail.amount} шт</span>
                                <hr className="items_division"/>
                            </div>
                }
                else if (postDetail.hour > 9) {                    
                    return <div className="data">                            
                                <div>{postDetail.hour}.00 - {postDetail.hour + 1}.00 <hr/></div>
                                <span>{postDetail.product.name}: </span>
                                <span>{postDetail.amount} шт</span>
                                <hr className="items_division"/>
                            </div>
                }            
            })}
        </div>
        ) 
    }
}

export default DataList