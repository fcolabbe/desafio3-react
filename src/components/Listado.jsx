import React from 'react'

function Listado(props) {
    return (
        <>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Cargo</th>
                        <th scope="col">Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {props.BaseColaboradores.map((colaboradores) => (
                        <tr key={colaboradores.id}>
                            <td>{colaboradores.nombre}</td>
                            <td>{colaboradores.correo}</td>
                            <td>{colaboradores.edad}</td>
                            <td>{colaboradores.cargo}</td>
                            <td>{colaboradores.telefono}</td>
                            <td><button onClick={() => props.eliminarColaborador(colaboradores.id)}> Borrar
                            </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Listado