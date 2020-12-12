import React, { FormEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { crearNuevoProducto } from '../actions/productos'
import { RouteChildrenProps } from 'react-router-dom'
import { mostrarAlerta, ocultarAlerta } from '../actions/alertas'

const NuevoProducto = ({ history }: RouteChildrenProps) => {
    // component's state
    const [nombre, guardarNombre] = useState<string>('')
    const [precio, guardarPrecio] = useState<number>(-1)

    // function for altering the store
    const dispatch = useDispatch()

    // getting values from the store
    const loading = useSelector(
        (state: { productos: { loading: boolean } }) => state.productos.loading
    )

    const alerta = useSelector(
        (state: { alertas: { alerta: { msg: string } | null } }) =>
            state.alertas.alerta
    )

    // adds a new product to the products state
    const agregarProducto = () =>
        dispatch(crearNuevoProducto({ nombre, precio }))

    // handles the form submit event
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

        // validates the form input
        if (nombre.trim() === '' || precio < 0) {
            dispatch(
                mostrarAlerta({ msg: 'Todos los campos son obligatorios' })
            )

            return
        }

        // create the product
        dispatch(ocultarAlerta())
        agregarProducto()
        history.push('/')
    }

    return (
        <div className={'row justify-content-center'}>
            <div className={'col-md-8'}>
                <div className={'card'}>
                    <div className={'card-body'}>
                        <h2 className={'text-center mb-4 font-weight-bold'}>
                            Agregar Nuevo Producto
                        </h2>
                        {alerta ? (
                            <p className="alert alert-danger text-center text-uppercase p-3">
                                {alerta.msg}
                            </p>
                        ) : null}
                        <form onSubmit={handleSubmit}>
                            <div className={'form-group'}>
                                <label>Nombre Producto</label>
                                <input
                                    onChange={(event) =>
                                        guardarNombre(event.target.value)
                                    }
                                    name={'nombre'}
                                    type={'text'}
                                    className={'form-control'}
                                    placeholder={'Nombre Producto'}
                                />
                            </div>
                            <div className={'form-group'}>
                                <label>Precio Producto</label>
                                <input
                                    onChange={(event) =>
                                        guardarPrecio(+event.target.value)
                                    }
                                    name={'precio'}
                                    type={'number'}
                                    className={'form-control'}
                                    placeholder={'Precio Producto'}
                                />
                            </div>
                            <button
                                type={'submit'}
                                className={
                                    'btn btn-primary font-weight-bold text-uppercase d-block w-100'
                                }
                            >
                                Agregar
                            </button>
                            {loading ? 'Cargando...' : null}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoProducto
