import React from 'react';
import '../movimientos/Movimientos.css';
import '../inicio/Inicio.css';
import '../movimientos/Alerta.css';
import './AlertaRetirada.css';


const AlertaRetirada = (props) => (
  <div
    onClick={() => { props.CerrarAlertaRetiradas(); }}
    className="Alerta_Wrapper2"
  >
    <div className="Wrapper_Rectangulo_Alerta2">
      <div className="Rectangulo_Alerta2">
        <h3 className="Texto_Alerta2">
          La dirección de destino de la billetera debe ser de USDC. En caso
          de no serlo el retiro no se efectuará correctamente.
        </h3>
      </div>
    </div>
  </div>
);

export default AlertaRetirada;
