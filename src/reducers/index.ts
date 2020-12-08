import { combineReducers } from 'redux'
import productosReducer from "./productos";

export default combineReducers({
    productos: productosReducer
})