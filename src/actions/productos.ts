import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
} from './types'

import { Dispatch } from 'redux'
import axiosClient from "../config/axios";
import Swal from 'sweetalert2'

export type Producto = {
    nombre: string
    precio: number
}

// Crear nuevos productos
export function crearNuevoProducto(producto: Producto) {
    return async (dispatch: Dispatch) => {
        dispatch(agregarProducto())

        try {
            await axiosClient.post('/productos', producto)
            dispatch(agregarProductoExito(producto))
            Swal.fire('Correcto', 'El proyecto se ha creado correctamente', 'success')
        } catch (error) {
            dispatch(agregarProductoError({ msg: 'No se pudo crear el proyecto' }))
            Swal.fire('Error', 'No se pudo crear el proyecto', 'error')
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

const agregarProductoError = (error: { msg: string }) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: error
})
