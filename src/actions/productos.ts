import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
} from '../actions/types'

import { Dispatch } from 'redux'

type Producto = {
    nombre: string
    precio: number
}

// Crear nuevos productos
export function crearNuevoProducto(producto: Producto) {
    return (dispatch: Dispatch) => {
        dispatch(agregarProducto())

        try {
            dispatch(agregarProductoExito(producto))
        } catch (error) {
            dispatch(agregarProductoError(new Error('No se pudo agregar el producto')))
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
})

const agregarProductoExito = (producto: Producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto,
})

const agregarProductoError = (error: Error) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: error
})
