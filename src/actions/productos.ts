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
    UPDATE_PRODUCT_ERROR,
    UPDATE_PRODUCT_EXITO,
} from './types'

import { Dispatch } from 'redux'
import axiosClient from '../config/axios'
import Swal from 'sweetalert2'

export type Producto = {
    nombre: string
    precio: number
    id?: number
}

// Crear nuevos productos
export function crearNuevoProducto(producto: Producto) {
    return async (dispatch: Dispatch) => {
        dispatch(agregarProducto())

        try {
            await axiosClient.post('/productos', producto)
            dispatch(agregarProductoExito(producto))
            Swal.fire(
                'Correcto',
                'El producto se ha creado correctamente',
                'success'
            )
        } catch (error) {
            dispatch(
                agregarProductoError({ msg: 'No se pudo crear el producto' })
            )
            Swal.fire('Error', 'No se pudo crear el producto', 'error')
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
    payload: error,
})

// Obtener los productos
export function obtenerProductos() {
    return async (dispatch: Dispatch) => {
        dispatch(obtenerProductosComienzo())

        try {
            const response = await axiosClient.get('/productos')
            const productos = response.data
            dispatch(obtenerProductosExito(productos))
        } catch (_) {
            dispatch(
                obtenerProductosError({
                    msg: 'No se pudieron obtener los productos',
                })
            )
        }
    }
}

const obtenerProductosComienzo = () => ({
    type: OBTENER_PRODUCTOS,
})

const obtenerProductosExito = (productos: Producto[]) => ({
    type: OBTENER_PRODUCTOS_EXITO,
    payload: productos,
})

const obtenerProductosError = (error: { msg: string }) => ({
    type: OBTENER_PRODUCTOS_ERROR,
    payload: error,
})

// Eliminar producto
export function eliminarProducto(id: number) {
    return async (dispatch: Dispatch) => {
        dispatch(eliminarProductoComienzo())

        try {
            await axiosClient.delete(`/productos/${id}`)
            dispatch(eliminarProductoExito(id))
        } catch (_) {
            dispatch(
                elminarProductoError({ msg: 'No se pudo eliminar el producto' })
            )
        }
    }
}

const eliminarProductoComienzo = () => ({
    type: ELIMINAR_PRODUCTO,
})

const eliminarProductoExito = (id: number) => ({
    type: ELIMINAR_PRODUCTO_EXITO,
    payload: id,
})

const elminarProductoError = (error: { msg: string }) => ({
    type: ELIMINAR_PRODUCTO_ERROR,
    payload: error,
})

export function editarProducto(producto: Producto) {
    return async (dispatch: Dispatch) => {
        dispatch(editarProductoComienzo())

        try {
            await axiosClient.put(`/productos/${producto.id}`, producto)
            dispatch(editarProductoExito(producto))
        } catch {
            dispatch(
                editarProductoError({ msg: 'No se pudo editar el producto' })
            )
        }
    }
}

const editarProductoComienzo = () => ({
    type: UPDATE_PRODUCT_COMIENZO,
})

const editarProductoExito = (producto: Producto) => ({
    type: UPDATE_PRODUCT_EXITO,
    payload: producto,
})

const editarProductoError = (error: { msg: string }) => ({
    type: UPDATE_PRODUCT_ERROR,
    payload: error,
})
