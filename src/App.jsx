import './App.css'
import { BaseColaboradores } from './BaseColaboradores'
import 'bootstrap/dist/css/bootstrap.min.css';
import Listado from './components/Listado';
import Buscador from './components/Buscador';
import Formulario from './components/Formulario'
import { useState } from 'react';


function App() {

  const [errorllenado, setErrorllenado] = useState(false)
  const [errorllenadomsg, setErrorllenadomsg] = useState(false)
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [edad, setEdad] = useState('')
  const [cargo, setCargo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [noerror, setNoerror] = useState(false)
  const [noerrormsg, setNoerrormsg] = useState("")
  const [id, setId] = useState('')
/*   const [filtroColaboradores, setFiltroColaboradores] = useState(BaseColaboradores); */

  const validarLlenadoCampos = (e) => {
    e.preventDefault()
    if (nombre == '' || correo == '' || edad == '' || cargo == '' || telefono == '') {
      setErrorllenado(true)
      setNoerror(false)
      setErrorllenadomsg("Completa todos los campos!")
      return
    } else {
      setErrorllenado(false)
      setNoerrormsg("El colaborador fue agregado exitosamente!")
      setNoerror(true)
    }
  }

  const eliminarColaborador = (idColaborador) => {
    setListaColaboradores(listaColaboradores.filter(colaborador => colaborador.id !== idColaborador));
  }

  const agregarColaborador = (e) => {
    e.preventDefault()
    setId(Date.now)
    validarLlenadoCampos(e)
    setListaColaboradores([...listaColaboradores, { id: id, nombre: nombre, correo: correo, edad: edad, cargo: cargo, telefono: telefono }])
  }
  return (
    <>
      <div className="container d-flex flex-column min-vh-100">
        <div className="row mb-2">
          <div className="col-12">
            <h2 className="header-title">Listado de colaboradores</h2>
          </div>
        </div>
        <Buscador BaseColaboradores={listaColaboradores} setListaColaboradores={setListaColaboradores}/>
        <div className="row">
          <div className='col-lg-8 table-responsive'>
            <Listado BaseColaboradores={listaColaboradores} eliminarColaborador={eliminarColaborador}/>
          </div>
          <div className='col-lg-4'>
            <Formulario
              id={id}
              nombre={nombre}
              setNombre={setNombre}
              correo={correo}
              setCorreo={setCorreo}
              edad={edad}
              setEdad={setEdad}
              cargo={cargo}
              setCargo={setCargo}
              telefono={telefono}
              setTelefono={setTelefono}
              validarDatos={agregarColaborador}
              errorllenado={errorllenado}
              errorllenadomsg={errorllenadomsg}
              noerror={noerror}
              setNoerror={setNoerror}
              noerrormsg={noerrormsg}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
