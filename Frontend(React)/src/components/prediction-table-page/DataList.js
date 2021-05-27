import React, { Component } from 'react'
import PostData from "./predictions_sample.json"

import "./Data.css"

class DataList extends Component {
    render () {
        return (
            <div className="databox">                
            {PostData.map((postDetail, index) => {
                if (postDetail.hour < 9) {                   
                    return <div className="data">
                            <div> 0{postDetail.hour}.00 - 0{postDetail.hour + 1}.00 <hr/></div>                                                                                        
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
                    if (postDetail.hour) {

                    }
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