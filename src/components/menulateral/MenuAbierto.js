import React from "react";
import "./MenuLateral.css";
import { Link } from "react-router-dom";

const MenuAbierto = (props) => (
  <div className="PantallaMenu">
    <div className="MenuEstadoFinal2">
      <div className="Menu">
        <img
          onClick={() => {
            props.cerrarMenu();
          }}
          className="LogoFinal"
          src={require("./images/x.svg")}
        />
      </div>
      <div className="MenuGroupFinal">
        <Link
          style={{ textDecoration: "none" }}
          to="/home"
          className={
            props.inicio.action === "AbrirInicio"
              ? "LineaPaginaFinal"
              : "LineaFinal2"
          }
          onClick={() => {
            props.AbrirInicio();
          }}
        >
          <div className="Espacio" />
          <>
            <img
              className="Inicio"
              src={require("./images/home_final.svg")}
              alt=""
            />
          </>
          <h2 className="menuH2">Inicio</h2>
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          to="/movements"
          className={
            props.inicio.action === "AbrirMovimientos"
              ? "LineaPaginaFinal"
              : "LineaFinal2"
          }
          onClick={() => {
            props.AbrirMovimientos();
          }}
        >
          <div className="Espacio" />
          <>
            <img
              className="Retiradas"
              src={require("./images/transfer (2).svg")}
              alt=""
            />
          </>
          <h2 className="menuH2">Movimientos</h2>
          <div className="Espacio" />
        </Link>
        <Link
          style={{ textDecoration: "none" }}
          to="/settings"
          className={
            props.inicio.action === "AbrirAjustes"
              ? "LineaPaginaFinal"
              : "LineaFinal2"
          }
          onClick={() => {
            props.AbrirAjustes();
          }}
        >
          <div />
          <>
            <img
              className="Ajustes"
              src={require("./images/gear_final.svg")}
              alt=""
            />
          </>
          <h2 className="menuH2">Ajustes</h2>
        </Link>
      </div>
      <div className="RHK_Icono2">
        <div className="Grid_RHK">
          <img
            className="RHK_Logo"
            src={require("./images/ALBATROSS Icon.png")}
            alt=""
          />
          <h3 className="Redhawk_Texto">ALBATROSS</h3>
        </div>
      </div>
    </div>
  </div>
);

export default MenuAbierto;
