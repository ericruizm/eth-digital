import React from "react";
import "./Movimientos.css";
import "../inicio/Inicio.css";

const TablaDepositos = (props) => (
  <div>
    <div className="Wrapper_Tabla_Aportaciones">
      <div className="Titulo">
        <div className="Datos_Grid_Aportaciones">
          <h3 className="Titulo_Tabla">Fecha</h3>
          <h3 className="Titulo_Tabla">Cantidad</h3>
          <h3 className="Titulo_Tabla">Tipo</h3>
          <h3 className="Titulo_Tabla">Estado</h3>
          <h3 className="Titulo_Tabla_ID">ID de Transacción</h3>
          {/* <div onClick={props.AbrirAlerta} className="Grid_Dias_Restantes">
            <h3 className="Titulo_Tabla2">Días restantes</h3>
            <img
              onClick={() => {
                props.AbrirAlerta();
              }}
              className="Alerta_Icono"
              src={require("./images/alert-circle.svg")}
            />
          </div> */}
        </div>
      </div>
      <div className="Datos2">
        <div className="Datos_Grid_Aportaciones">
          <h3 className="Fecha">22/04/2020</h3>
          <h3 className="Cantidad">400 USDC</h3>
          <div className="Grid_Aportacion_Tipo">
            <img src={require("./images/ALBATROSS Icon.png")} />
            <h3 className="Aportacion_Tipo">ALB</h3>
          </div>
          <h3 className="Aportacion_Pendiente">Pendiente</h3>
          <h3 className="ID_transaccion">ya18n8b1ljkbualmlonioYmTL</h3>
          {/* <h3 className="Dias_Restantes">40 días</h3> */}
        </div>
      </div>
      <div className="Datos2">
        <div className="Datos_Grid_Aportaciones">
          <h3 className="Fecha">15/04/2020</h3>
          <h3 className="Cantidad">250 USDC</h3>
          <div className="Grid_Aportacion_Tipo">
            <img src={require("./images/ALBATROSS Icon.png")} />
            <h3 className="Aportacion_Tipo">ALB</h3>
          </div>
          <h3 className="Aportacion_Aprobada">Aprobado</h3>
          <h3 className="ID_transaccion">ya18n8b1ljkbualmlonioYmTL</h3>
          {/* <div className="Boton_RetirarDinero">Retirar</div> */}
        </div>
      </div>

      <div className="Datos2">
        <div className="Datos_Grid_Aportaciones">
          <h3 className="Fecha">25/03/2020</h3>
          <h3 className="Cantidad">800 USDC</h3>
          <div className="Grid_Aportacion_Tipo">
            <img src={require("./images/ALBATROSS Icon.png")} />
            <h3 className="Aportacion_Tipo">ALB</h3>
          </div>
          <h3 className="Aportacion_Rechazada">Rechazado</h3>
          <h3 className="ID_transaccion">ya18n8b1ljkbualmlonioYmTL</h3>
          {/* <h3 className="Sin_Contador">-</h3> */}
        </div>
      </div>

      <div className="Datos2">
        <div className="Datos_Grid_Aportaciones">
          <h3 className="Fecha">25/03/2020</h3>
          <h3 className="Cantidad">800 USDC</h3>
          <div className="Grid_Aportacion_Tipo">
            <img src={require("./images/ALBATROSS Icon.png")} />
            <h3 className="Aportacion_Tipo">ALB</h3>
          </div>
          <h3 className="Aportacion_Rechazada">Rechazado</h3>
          <h3 className="ID_transaccion">ya18n8b1ljkbualmlonioYmTL</h3>
          {/* <h3 className="Sin_Contador">-</h3> */}
        </div>
      </div>
    </div>
  </div>
);

export default TablaDepositos;
