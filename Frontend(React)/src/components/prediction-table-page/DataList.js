import React from 'react'
import axios from 'axios';
import "./Data.css"
import { connect } from 'react-redux'

let hasErrr = false;
let errormsg;

class DataList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            hasErr: false
        }
    }
    
    setData = (date) => {
        axios.get("http://127.0.0.1:8000/predictions/all/date/" + date + "/"
        ).then((response) =>{                      
            this.setState({data: response.data})
            this.setState({hasErr: false})            
            hasErrr = this.state.hasErr
        }).catch(function(error) {
            console.log(error.response.data)
            console.log(error.response.status)
            errormsg = error.response.data
            hasErrr = true
        })
    }

    

    render () {
        this.setData(this.props.date)
        console.log(hasErrr)
        if(hasErrr === true) {
            return (
                <div className="databox">
                    <p id="errormsg">There are no predictions for this date</p>
                </div>
            )
        }
        else {
        
        var current_hour = this.state.data[0] - 1;

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
}

function mapStateToProps(state) {
    return {
        date: state.date
    }
}

export default connect(mapStateToProps)(DataList)