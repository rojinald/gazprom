
import { combineReducers, createStore } from "redux";
import productsReducer from "./products-redux";

let reducers = combineReducers({
    products : productsReducer
})

let store = createStore(reducers)
window.store = store;

export default store;