import { ADD_DATE } from './dateTypes'


export const addDate = (date) => {
    return {
        type: ADD_DATE,
        date: date
    }
}