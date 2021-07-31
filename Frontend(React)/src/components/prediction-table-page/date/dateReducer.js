import {ADD_DATE} from './dateTypes'

const initialState = {
    date: "2016-04-11"
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