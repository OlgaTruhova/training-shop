import { combineReducers } from "redux";
import { cartReducers } from "./cart/cartReducers"; 

export default combineReducers({
    cart: cartReducers,
});