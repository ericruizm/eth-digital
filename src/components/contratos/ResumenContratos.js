import React from "react";
import "./Contratos.css";

const ResumenContratos = (props) => (
  <div className="Wrapper_Rectangulo">
    <div className="Rectangulo">
      <h3 className="Titulo_Rectangulo2">
        Realizar <span className="Resumen_Albatross">Contrato</span>
      </h3>
      <div className="Contenedor_Rectangulo2">
        <div className="Cantidades">
          <div onClick={props.AbrirDepositos} className="Grid_Pagos">
            <img
              className="Pagar_USC_Icon"
              src={require("./images/usdc.svg")}
            />
            <h3 className="Pagar_USDC">Pagar con USDC</h3>
          </div>
        </div>
        <div className="Cantidades">
          <div onClick={props.AbrirRetiradas} className="Grid_Pagos">
            <img
              className="Pagar_Saldo_Icon"
              src={require("./images/favicon.ico")}
            />
            <h3 className="Pagar_USDC">Pagar con saldo</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ResumenContratos;
