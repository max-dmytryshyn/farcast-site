import React from 'react'
import axios from 'axios';
import "./Data.css"
import { connect } from 'react-redux'

class DataList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    
    setData = (date) => {
        axios.get("http://127.0.0.1:8000/predictions/all/date/" + date + "/"
        ).then((response) =>{this.setState({data: response.data})})
    }
    getData = (date) => {
        return date;
    }

    handleClick = () => {
        // force a re-render
        this.forceUpdate()
    };

    render () {
        this.setData(this.props.date)
        var current_hour = this.state.data[0] - 1;
        console.log(this.props.date)
        return (
            <div className="databox" >            
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

function mapStateToProps(state) {
    return {
        date: state.date
    }
}

export default connect(mapStateToProps)(DataList)