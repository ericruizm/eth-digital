import React from "react";
import "./Movimientos.css";
import "../inicio/Inicio.css";

const TablaRetiradas = (props) => (
  <div className="Wrapper_Tabla_Aportaciones">
    <div className="Titulo">
      <div className="Datos_Grid_Retiradas">
        <h3 className="Titulo_Tabla">Fecha</h3>
        <h3 className="Titulo_Tabla">Cantidad</h3>
        <h3 className="Titulo_Tabla">Tipo</h3>
        <h3 className="Titulo_Tabla">Estado</h3>
        <h3 className="Titulo_Tabla_ID">ID de Transacción</h3>
      </div>
    </div>
    <div className="Datos2">
      <div className="Datos_Grid_Retiradas">
        <h3 className="Fecha">15/04/2020</h3>
        <h3 className="Cantidad">3.000 USDC</h3>
        <div className="Grid_Aportacion_Tipo">
          <img src={require("./images/ALBATROSS Icon.png")} />
          <h3 className="Aportacion_Tipo">ALB</h3>
        </div>
        <h3 className="Aportacion_Pendiente">Pendiente</h3>
        <h3 className="ID_transaccion">ya18n8b1ljkbualmlonioYmTL</h3>
      </div>
    </div>
    <div className="Datos2">
      <div className="Datos_Grid_Retiradas">
        <h3 className="Fecha">02/04/2020</h3>
        <h3 className="Cantidad">300 USDC</h3>
        <div className="Grid_Aportacion_Tipo">
          <img src={require("./images/ALBATROSS Icon.png")} />
          <h3 className="Aportacion_Tipo">ALB</h3>
        </div>
        <h3 className="Aportacion_Aprobada">Aprobado</h3>
        <h3 className="ID_transaccion">ya18n8b1ljkbualmlonioYmTL</h3>
      </div>
    </div>
  </div>
);

export default TablaRetiradas;
