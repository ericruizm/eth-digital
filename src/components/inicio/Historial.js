import React from "react";
import "../movimientos/Movimientos.css";
import "./Inicio.css";

const Historial = () => (
  <div>
    <div className="Encabezado2">
      <h2>Historial</h2>
    </div>
    <div className="Wrapper_Datos">
      <div className="Titulo">
        <div className="Datos_Grid">
          <h3 className="Titulo_Tabla">Fecha</h3>
          <h3 className="Titulo_Tabla">Cantidad</h3>
          <h3 className="Titulo_Tabla">Tipo</h3>
          <h3 className="Titulo_Tabla">Beneficio</h3>
          <h3 className="Titulo_Tabla">Beneficio %</h3>
        </div>
      </div>
      <div className="Datos">
        <div className="Datos_Grid">
          <h3 className="Fecha">-</h3>
          <h3 className="Cantidad">0 USDC</h3>
          <div className="Grid_Aportacion_Tipo">
            <img alt="" src={require("./images/REDHAWK Icon.png")} />
            <h3 className="Aportacion_Tipo">RHK</h3>
          </div>
          <h3 className="Beneficio">0 USDC</h3>
          <h3 className="Beneficio_Porcentaje">-</h3>
        </div>
      </div>
    </div>
  </div>
);

export default Historial;
