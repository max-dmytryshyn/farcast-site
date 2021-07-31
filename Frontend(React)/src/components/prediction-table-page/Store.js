import { createStore } from 'redux';
import dateReducer from './date/dateReducer'

const store = createStore(dateReducer)

export default store;
