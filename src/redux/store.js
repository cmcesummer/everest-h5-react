import {createStore, applyMiddleware} from 'redux';
import combineReducers from './reducers.js';
import thunk from 'redux-thunk'
// import promiseMiddleware from './middleware/promiseMiddleware'

let store = createStore(combineReducers, applyMiddleware(thunk));//, applyMiddleware(promiseMiddleware)

export default store;