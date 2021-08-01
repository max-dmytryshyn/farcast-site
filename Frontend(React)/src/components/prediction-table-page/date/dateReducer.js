import {ADD_DATE} from './dateTypes'

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+1);
const initialState = {
    date: date
}

const reducer = (state = initialState, action) => { 
    switch(action.type) {
        case ADD_DATE: return {
            ...state,
            date: action.date
        }
        default: return state
    }
}

export default reducer