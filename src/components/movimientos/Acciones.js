import React from 'react';
import '../inicio/Inicio.css';
import './Acciones.css';

const Acciones = (props) => (
  <div className="Wrapper_Rectangulo2">
    <div className="Rectangulo2">
      <h3 className="Titulo_Rectangulo">Acciones</h3>
      <div className="Contenedor_Rectangulo2">
        <div className="Cantidades2">
          <div
            onClick={props.AbrirDepositos}
            className="Cantidades_Grid"
          >
            <img
              className="Icono_Depositar"
              src={require('./images/withdraw_final.svg')}
            />
            <h3 className="Texto_Depositar">Depositar</h3>
          </div>
        </div>
        <div onClick={props.AbrirRetiradas} className="Cantidades2">
          <div className="Cantidades_Grid2">
            <img
              className="Icono_Retirar"
              src={require('./images/withdraw_final.svg')}
            />
            <h3 className="Texto_Depositar">Retirar</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Acciones;
