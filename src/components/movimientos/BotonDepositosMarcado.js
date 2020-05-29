import React from "react";
import "./Movimientos.css";
import "../inicio/Inicio.css";

const BotonDepositosMarcado = (props) => (
  <div>
    <div
      className="Boton_Aportaciones_Marcado"
      onClick={() => {
        console.log("CLICKCKCKC");
        props.AbrirAportaciones();
      }}
    >
      <h3 className="Texto_Boton_Aportaciones">Depósitos</h3>
    </div>
    <div
      // onClick={props.AbrirBalance}
      className="Boton_BalanceDisponible_Desmarcado"
      onClick={() => {
        console.log("CLICKCKCKC");
        props.AbrirBalance();
      }}
    >
      <h3 className="Texto_Boton_Aportaciones">Retiros</h3>
    </div>
  </div>
);

export default BotonDepositosMarcado;
