import { Action } from './productos.d'
import { Producto } from '../actions/productos'

import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    OBTENER_PRODUCTOS,
    OBTENER_PRODUCTOS_EXITO,
    OBTENER_PRODUCTOS_ERROR,
    ELIMINAR_PRODUCTO,
    ELIMINAR_PRODUCTO_EXITO,
    ELIMINAR_PRODUCTO_ERROR,
    UPDATE_PRODUCT_COMIENZO,
    UPDATE_PRODUCT_EXITO,
    UPDATE_PRODUCT_ERROR,
} from '../actions/types'

// cada reducer tiene su propio state
const initialState: {
    productos: Producto[]
    error: { msg: string } | null
    loading: boolean
} = {
    productos: [],
    error: null,
    loading: false,
}

export default function productosReducer(state = initialState, action: Action) {
    switch (action.type) {
        case UPDATE_PRODUCT_COMIENZO:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case UPDATE_PRODUCT_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                productos: state.productos.map((producto) =>
                    producto.id === action.payload.id
                        ? action.payload
                        : producto
                ),
            }
        case UPDATE_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case ELIMINAR_PRODUCTO:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case ELIMINAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                productos: state.productos.filter(
                    (producto) => producto.id !== action.payload
                ),
            }
        case ELIMINAR_PRODUCTO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                productos: [...state.productos, action.payload],
            }
        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case OBTENER_PRODUCTOS:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case OBTENER_PRODUCTOS_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                productos: action.payload,
            }
        case OBTENER_PRODUCTOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}
