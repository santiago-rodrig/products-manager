import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
} from '../actions/types'

// Crear nuevos productos
export function crearNuevoProducto(producto: { nombre: string; precio: number }) {
    console.log(producto)

    return {type: AGREGAR_PRODUCTO, payload: producto}
}
