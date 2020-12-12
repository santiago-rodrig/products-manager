import { combineReducers } from 'redux'
import productosReducer from './productos'
import alertasReducer from './alertas'

export default combineReducers({
    productos: productosReducer,
    alertas: alertasReducer
})
