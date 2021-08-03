import React, { useState } from "react";
import DatePicker from 'react-date-picker';
import { addDate } from "./date/dateActions";
import { connect } from 'react-redux'

import store from "./store";


function Calendare() {
    const defaultValue = new Date();
    defaultValue.setDate(defaultValue.getDate() + 1);
    const[selectedDate, setSelectedDate] = useState(defaultValue)
    var month =("0" + (selectedDate.getMonth() + 1)).slice(-2)
    var main_date = selectedDate.getFullYear() + "-" + month + "-" + selectedDate.getDate()
    store.dispatch(addDate(main_date))

    return (
        <span className="calendar">
            <DatePicker
                onChange={setSelectedDate}                              
                value={selectedDate}
                locale="uk"
                dateFormat='yyyy-MM-dd'
                isClearable            
            />
        </span>
    )
}

const mapStateToProps = state => {
    return {
        date: state.date
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addDate: (date) => {dispatch(addDate(date))}
    }
}

export default Calendare 
