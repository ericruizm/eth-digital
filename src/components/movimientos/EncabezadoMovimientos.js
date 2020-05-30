import React from "react";
import "./Movimientos.css";
import "../inicio/Inicio.css";
import { Link } from "react-router-dom";

const EncabezadoMovimientos = (props) => (
  <div className="Wrapper_Encabezado_Aportaciones">
    <div className="Encabezado">
      <h2>Movimientos</h2>
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
        src={require("./images/logout .svg")}
      />
    </div>
  </div>
);

export default EncabezadoMovimientos;
