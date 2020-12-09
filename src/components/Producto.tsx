import React from 'react'
import { Producto as ProductoType } from "../actions/productos";
import { Link } from 'react-router-dom'

const Producto = ({ producto }: { producto: ProductoType }) => {
    const { nombre, precio, id } = producto

    return (
        <tr>
            <td className={'text-center'}>{nombre}</td>
            <td className={'text-center'}>$ {precio}</td>
            <td className={'text-center'}>
                <Link to={`/productos/editar/${id}`} className={'btn btn-primary mr-2'}>
                    Editar
                </Link>
                <button type={'button'} className={'btn btn-danger'}>Eliminar</button>
            </td>
        </tr>
    )
}

export default Producto