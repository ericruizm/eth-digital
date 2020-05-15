import React from 'react';
import './Movimientos.css';
import '../inicio/Inicio.css';
import './Alerta.css';


const Alerta = (props) => (
  <div onClick={() => { props.CerrarAlerta(); }} className="Alerta_Wrapper">
    <div className="Wrapper_Rectangulo_Alerta">
      <div className="Rectangulo_Alerta">
        <h3 className="Texto_Alerta">
          Todo depósito realizado permanecerá depositado 125 días. Una vez
          finalizado este periodo estará disponible para su retirada y se
          reflejará en saldo disponible.
        </h3>
      </div>
    </div>
  </div>
);

export default Alerta;
