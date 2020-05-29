import React from "react";
import "../movimientos/Movimientos.css";

const HistorialContratos = (props) => (
  <div>
    <div className="Encabezado2">
      <h2>Historial de contratos</h2>
    </div>
    <div className="Wrapper_Datos">
      <div className="Titulo">
        <div className="Datos_Grid">
          <h3 className="Titulo_Tabla">Fecha</h3>
          <h3 className="Titulo_Tabla">Cantidad</h3>
          <h3 className="Titulo_Tabla">Tipo</h3>
          <h3 className="Titulo_Tabla">Estado</h3>
          <div onClick={props.AbrirAlerta} className="Grid_Dias_Restantes">
            <h3 className="Titulo_Tabla2">Días restantes</h3>
            <img
              onClick={() => {
                props.AbrirAlerta();
              }}
              className="Alerta_Icono"
              src={require("./images/alert-circle.svg")}
            />
          </div>
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
          <h3 className="Aportacion_Pendiente">Pendiente</h3>
          <h3 className="Dias_Restantes">40 días</h3>
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
          <h3 className="Aportacion_Aprobada">Aprobado</h3>
          <div className="Boton_RetirarDinero">Retirar</div>
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
          <h3 className="Aportacion_Rechazada">Retirado</h3>
          <h3 className="Sin_Contador">-</h3>
        </div>
      </div>
    </div>
  </div>
);

export default HistorialContratos;
