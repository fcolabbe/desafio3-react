import React from 'react'
import { useState } from 'react';


function Buscador({ BaseColaboradores, actualizarListaFiltrada }) {
  const [busqueda, setBusqueda] = useState('');

  const filtrarColaboradores = (evento) => {
    const terminoBusqueda = evento.target.value.toLowerCase();
    setBusqueda(terminoBusqueda);

    if (!terminoBusqueda) {
      actualizarListaFiltrada(BaseColaboradores);
      return;
    }

    const listaFiltrada = BaseColaboradores.filter((colaborador) =>
      colaborador.nombre.toLowerCase().includes(terminoBusqueda) ||
      colaborador.correo.toLowerCase().includes(terminoBusqueda) ||
      colaborador.edad.toString().toLowerCase().includes(terminoBusqueda) ||
      colaborador.cargo.toLowerCase().includes(terminoBusqueda) ||
      colaborador.telefono.toLowerCase().includes(terminoBusqueda)
    );

    actualizarListaFiltrada(listaFiltrada);
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
              onChange={filtrarColaboradores}
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default Buscador