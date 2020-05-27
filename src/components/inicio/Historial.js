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
          <h3 className="Fecha">22/04/2020</h3>
          <h3 className="Cantidad">3.500 USDC</h3>
          <div className="Grid_Aportacion_Tipo">
            <img src={require("./images/ALBATROSS Icon.png")} />
            <h3 className="Aportacion_Tipo">ALB</h3>
          </div>
          <h3 className="Beneficio">300 USDC</h3>
          <h3 className="Beneficio_Porcentaje">1.2%</h3>
        </div>
      </div>
      <div className="Datos">
        <div className="Datos_Grid">
          <h3 className="Fecha">15/04/2020</h3>
          <h3 className="Cantidad">2.675 USDC</h3>
          <div className="Grid_Aportacion_Tipo">
            <img src={require("./images/ALBATROSS Icon.png")} />
            <h3 className="Aportacion_Tipo">ALB</h3>
          </div>
          <h3 className="Beneficio">50 USDC</h3>
          <h3 className="Beneficio_Porcentaje">0.8%</h3>
        </div>
      </div>
      <div className="Datos">
        <div className="Datos_Grid">
          <h3 className="Fecha">15/04/2020</h3>
          <h3 className="Cantidad">2.675 USDC</h3>
          <div className="Grid_Aportacion_Tipo">
            <img src={require("./images/ALBATROSS Icon.png")} />
            <h3 className="Aportacion_Tipo">ALB</h3>
          </div>
          <h3 className="Beneficio">50 USDC</h3>
          <h3 className="Beneficio_Porcentaje">0.8%</h3>
        </div>
      </div>
    </div>
  </div>
);

export default Historial;
