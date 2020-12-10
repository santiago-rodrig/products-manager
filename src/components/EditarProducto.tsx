import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Producto } from '../actions/productos'
import { editarProducto } from '../actions/productos'
import axiosClient from "../config/axios";

const EditarProducto = () => {
    const dispatch = useDispatch()
    const { id } = useParams<{ id: string }>()
    const [producto, guardarProducto] = useState<Producto>()
    const [error, setError] = useState<{ msg: string } | null>(null)
    const history = useHistory()

    useEffect(() => {
        const queryApi = async () => {
            try {
                const response = await axiosClient.get(`/productos/${id}`)
                const fetchedProduct = response.data as Producto
                guardarProducto(fetchedProduct)
            } catch {
                setError({ msg: 'No se pudieron obtener los datos del producto' })
            }
        }

        queryApi()
    }, [id, guardarProducto])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        guardarProducto((productoViejo: Producto | undefined):
            | Producto
            | undefined => {
            if (!producto) return undefined
            let productoNuevo: Producto

            if (e.target.name === 'precio') {
                productoNuevo = {
                    id: productoViejo!.id,
                    nombre: productoViejo!.nombre,
                    precio: +e.target.value,
                }
            } else {
                productoNuevo = {
                    id: productoViejo!.id,
                    precio: productoViejo!.precio,
                    nombre: e.target.value,
                }
            }

            return productoNuevo
        })
    }

    const handleSubmit = () => {
        if (typeof producto !== 'undefined') {
            dispatch(editarProducto(producto))
            history.push('/')
        }
    }

    return (
        <div className={'row justify-content-center'}>
            <div className={'col-md-8'}>
                <div className={'card'}>
                    <div className={'card-body'}>
                        <h2 className={'text-center mb-4 font-weight-bold'}>
                            Editar Producto
                        </h2>
                        {error ? <p className={'alert alert-danger text-center font-weight-bold'}>{error.msg}</p> : (
                            <form onSubmit={handleSubmit}>
                                <div className={'form-group'}>
                                    <label>Nombre Producto</label>
                                    <input
                                        name={'nombre'}
                                        type={'text'}
                                        className={'form-control'}
                                        placeholder={'Nombre Producto'}
                                        onChange={handleChange}
                                        value={producto?.nombre || ''}
                                    />
                                </div>
                                <div className={'form-group'}>
                                    <label>Precio Producto</label>
                                    <input
                                        name={'precio'}
                                        type={'number'}
                                        className={'form-control'}
                                        placeholder={'Precio Producto'}
                                        onChange={handleChange}
                                        value={producto?.precio || ''}
                                    />
                                </div>
                                <button
                                    type={'submit'}
                                    className={
                                        'btn btn-primary font-weight-bold text-uppercase d-block w-100'
                                    }
                                >
                                    Editar
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditarProducto
