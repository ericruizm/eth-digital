import React from 'react';
import './Movimientos.css';
import '../inicio/Inicio.css';

const EncabezadoMovimientos = () => (
  <div className="Wrapper_Encabezado_Aportaciones">
    <div className="Encabezado">
      <h2>Movimientos</h2>
    </div>
    <div className="Nombre">
      <h2>Roger W.</h2>
      <img src={require('./images/logout .svg')} />
    </div>
  </div>
);

export default EncabezadoMovimientos;
