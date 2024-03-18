import React from 'react'
import { useState } from 'react';


function Buscador(props) {
  const [busqueda, setBusqueda] = useState('');
  const manejarBusqueda = (e) => {
    const textoBusqueda = e.target.value.toLowerCase();
    setBusqueda(textoBusqueda);

    const filtrados = props.BaseColaboradores.filter(colaborador => {
        return (
            colaborador.nombre.toLowerCase().includes(textoBusqueda) ||
            colaborador.correo.toLowerCase().includes(textoBusqueda) ||
            colaborador.edad.toString().includes(textoBusqueda) ||
            colaborador.cargo.toLowerCase().includes(textoBusqueda) ||
            colaborador.telefono.includes(textoBusqueda)
        );
    });

    props.setListaColaboradores(filtrados);
};

  return (
    <>
      <div className="row mb-4">
        <div className="col-lg-8">
          <form action="">
            <input type="text"
              className="form-control search-box mb-3"
              placeholder="Buscar colaboradores..."
              value={busqueda}
              onChange={manejarBusqueda}
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default Buscador