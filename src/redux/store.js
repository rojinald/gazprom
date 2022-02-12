
import { combineReducers, createStore } from "redux";
import productsReducer from "./products-redux";
import sidebarData from "./sidebarData-redux";

let reducers = combineReducers({
    products : productsReducer,
    sidebarData : sidebarData
    
})

let store = createStore(reducers)
window.store = store;

export default store;