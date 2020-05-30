import React from "react";
import { Link } from "react-router-dom";

const Encabezado = (props) => (
  <div>
    <div className="Encabezado">
      <h2>Inicio</h2>
    </div>
    <div className="Nombre">
      <img
        className="Imagen_Rango"
        alt=""
        src={require("./images/Manager.svg")}
      />
      <Link
        to="/settings"
        style={{ textDecoration: "none" }}
        onClick={() => {
          props.AbrirAjustes();
        }}
      >
        <h2>Rango: Manager</h2>
      </Link>
      <img
        className="Icono_Logout"
        onClick={props.AbrirAviso}
        alt=""
        src={require("./images/logout .svg")}
      />
    </div>
  </div>
);

export default Encabezado;
