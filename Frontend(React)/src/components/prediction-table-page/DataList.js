import React, { Component, useState } from 'react'
import axios from 'axios';
import "./Data.css"
import store from './Store';



function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}



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
    handleClick = () => {
        this.forceUpdate();
      };

    render () {
        
        var main_date = store.getState().date 
        this.setData(main_date)
        console.log(main_date)
        var current_hour = this.state.data[0] - 1

        
        return (                
            <div className="databox">    
            
            <button onClick={this.handleClick} className="update"> Застосувати</button>
                {this.state.data.map(postDetail => {                
                    var change_hour = false;
                    if(postDetail.hour != current_hour) {
                        current_hour = postDetail.hour;   
                        change_hour = true; 
                    } 
                    return(<div className="data"> 
                        {change_hour && postDetail.hour < 9 &&
                        <div className="time"> 0{postDetail.hour}.00 - 0{postDetail.hour + 1}.00 <hr/></div>} 
                        {change_hour && postDetail.hour == 9 &&
                        <div className="time" > 0{postDetail.hour}.00 - {postDetail.hour + 1}.00 <hr/></div>}
                        {change_hour && postDetail.hour > 9 &&
                        <div className="time" > {postDetail.hour}.00 - {postDetail.hour + 1}.00 <hr/></div>}                                                                                                      
                        <span>{postDetail.product.name}: </span>
                        <span>{postDetail.amount} шт</span>

                        <hr className="items_division"/>
                        
                </div>
                )            
        
        })}
            </div>

        ) 
    }
}

export default DataList