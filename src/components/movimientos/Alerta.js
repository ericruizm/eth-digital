import React from "react";
import "./Movimientos.css";
import "../inicio/Inicio.css";
import "./Alerta.css";

const Alerta = (props) => (
  <div
    onClick={() => {
      props.CerrarAlerta();
    }}
    className="Alerta_Wrapper"
  >
    <div className="Wrapper_Rectangulo_Alerta">
      <div className="Rectangulo_Alerta">
        <h3 className="Texto_Alerta">
          Todo depósito realizado permanecerá depositado 62 días. Una vez
          finalizado este periodo se podrá acceder a su retirada.
        </h3>
      </div>
    </div>
  </div>
);

export default Alerta;
