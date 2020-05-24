import React from "react";
import Ajustar from "./Ajustar";

const Ajustes = (props) => (
  <div>
    <div className="Hero">
      <Ajustar
        AbrirContrasena={props.AbrirContrasena}
        AbrirDatosPersonales={props.AbrirDatosPersonales}
        AbrirDatosUser={props.AbrirDatosUser}
        ajustes={props.ajustes}
        AbrirAviso={props.AbrirAviso}
      />
    </div>
  </div>
);

export default Ajustes;
