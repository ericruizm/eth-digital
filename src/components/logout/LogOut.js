import React from "react";
import "./LogOut.css";

const LogOut = (props) => (
  <div className="Wrapper_Logout_Rectangulo">
    <div className="LogOut_Rectangulo">
      <h3 className="Titulo_LogOut">¿Seguro que quieres finalizar sesión?</h3>
      <div className="Grid_Botones_LogOut">
        <div onClick={props.CerrarAviso} className="Boton_Cancelar_LogOut">
          Cancelar
        </div>
        <div className="Boton_Salir_LogOut">Salir</div>
      </div>
    </div>
  </div>
);

export default LogOut;
