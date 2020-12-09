import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    obtenerProductos,
    Producto as ProductoType,
} from '../actions/productos'
import Producto from './Producto'

const Productos: React.FC = () => {
    const dispatch = useDispatch()
    const productos = useSelector(
        (state: { productos: { productos: ProductoType[] } }) =>
            state.productos.productos
    )
    const error = useSelector(
        (state: { productos: { error: { msg: string } } }) =>
            state.productos.error
    )
    const loading = useSelector(
        (state: { productos: { loading: boolean } }) => state.productos.loading
    )

    useEffect(() => {
        dispatch(obtenerProductos())
    }, [dispatch])

    return (
        <Fragment>
            <h2 className={'text-center my-5'}>Listado de Productos</h2>
            {error ? (
                <p
                    className={
                        'alert alert-danger text-center font-weight-bold my-3'
                    }
                >
                    {error.msg}
                </p>
            ) : null}
            {loading ? (
                <p
                    className={
                        'alert alert-info text-center font-weight-bold my3'
                    }
                >
                    Cargando...
                </p>
            ) : null}
            {productos.length !== 0 ? (
                <table className={'table table-striped'}>
                    <thead className={'bg-primary table-dark'}>
                        <tr>
                            <th scope={'col'} className={'text-center'}>
                                Nombre
                            </th>
                            <th scope={'col'} className={'text-center'}>
                                Precio
                            </th>
                            <th scope={'col'} className={'text-center'}>
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((producto) => (
                            <Producto key={producto.id} producto={producto} />
                        ))}
                    </tbody>
                </table>
            ) : (
                <p
                    className={
                        'alert alert-info my-3 text-center font-weight-bold'
                    }
                >
                    No hay productos
                </p>
            )}
        </Fragment>
    )
}

export default Productos
