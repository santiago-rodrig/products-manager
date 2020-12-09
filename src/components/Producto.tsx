import React from 'react'
import { Producto as ProductoType } from '../actions/productos'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { eliminarProducto } from '../actions/productos'
import Swal from 'sweetalert2'

const Producto = ({ producto }: { producto: ProductoType }) => {
    const { nombre, precio, id } = producto
    const dispatch = useDispatch()

    const handleClick = (id: number) => {
        // confirm deletion
        Swal.fire({
            title: 'Deseas eliminar realmente el producto?',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                // delete
                dispatch(eliminarProducto(id))
            }
        })
    }

    return (
        <tr>
            <td className={'text-center'}>{nombre}</td>
            <td className={'text-center'}>$ {precio}</td>
            <td className={'text-center'}>
                <Link
                    to={`/productos/editar/${id}`}
                    className={'btn btn-primary mr-2'}
                >
                    Editar
                </Link>
                <button
                    onClick={() => handleClick(id!)}
                    type={'button'}
                    className={'btn btn-danger'}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default Producto
