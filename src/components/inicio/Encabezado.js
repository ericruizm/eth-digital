import React from "react";
import { Link } from "react-router-dom";

const Encabezado = (props) => (
  <div>
    <div className="Encabezado">
      <h2>Inicio</h2>
    </div>
    <div className="Nombre">
      <Link
        to="/settings"
        style={{ textDecoration: "none" }}
        onClick={() => {
          props.AbrirAjustes();
        }}
      >
        <h2>Roger W.</h2>
      </Link>
      <img
        onClick={props.AbrirAviso}
        alt=""
        src={require("./images/logout .svg")}
      />
    </div>
  </div>
);

export default Encabezado;
