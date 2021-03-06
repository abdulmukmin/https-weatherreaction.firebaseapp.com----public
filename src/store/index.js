import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import routingChecker from "../reducers/index"
import detailWeather from "../reducers/detailWeather"

const reducers = combineReducers({
    routingChecker,
    detailWeather,
    
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

export default store;