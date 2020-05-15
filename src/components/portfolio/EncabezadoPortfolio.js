import React from 'react'
import '../inicio/Inicio.css'

const EncabezadoPortfolio = () => {
  return (
    <div>
      <div className="Encabezado">
        <h2>Portfolio</h2>
      </div>
      <div className="Nombre">
        <h2>Roger W.</h2>
        <img src={require('./images/flecha_abajo.svg')} />
      </div>
    </div>
  )
}

export default EncabezadoPortfolio
