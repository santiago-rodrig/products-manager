import React, { Fragment } from 'react'

const Productos: React.FC = () => {
    return (
        <Fragment>
            <h2 className={'text-center my-5'}>Listado de Productos</h2>
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
                <tbody></tbody>
            </table>
        </Fragment>
    )
}

export default Productos
