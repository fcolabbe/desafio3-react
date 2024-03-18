import React from 'react'
import Alert from './Alert'

function Formulario(props) {

    return (
        <>
            <div className="col-lg-4"></div>
            <form className="formulario" onSubmit={props.validarDatos}>
                <h2>Agregar colaborador</h2>
                <div className="form-group">
                    <input
                        type="text" value={props.nombre} placeholder='Nombre del colaborador' name="nombre" className="form-control" onChange={(e) => props.setNombre(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text" value={props.correo} placeholder='Email del colaborador' name="correo" className="form-control" onChange={(e) => props.setCorreo(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text" value={props.edad} placeholder='Edad del colaborador' name="edade" className="form-control" onChange={(e) => props.setEdad(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text" value={props.cargo} placeholder='Cargo del colaborador' name="cargo" className="form-control" onChange={(e) => props.setCargo(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text" value={props.telefono} placeholder='Telefono del colaborador' name="telefono" className="form-control" onChange={(e) => props.setTelefono(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary" >Registrarse</button>
            </form>
            <p>
                {props.nombre} - {props.correo} - {props.edad} - {props.cargo} - {props.telefono}
            </p>

            {props.errorllenado ? <Alert errormsg={props.errorllenadomsg} status="alert alert-danger" /> : null}
            {props.noerror ? <Alert errormsg={props.noerrormsg} status="alert alert-success" /> : null}
            <div />
        </>
    )
}

export default Formulario