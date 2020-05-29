import React from "react";
import { Link } from "react-router-dom";
import "./MenuLateral.css";

const MenuEstatico = (props) => {
  console.log("ABRIR MENU", props);
  return (
    <div className="PantallaMenu">
      <div className="MenuEstatico">
        <div className="Menu">
          <img
            onClick={() => {
              props.AbrirMenu();
            }}
            className="Logo"
            src={require("./images/menu (1).svg")}
          />
        </div>
        <div className="MenuGroup">
          <Link
            to="/home"
            className={
              props.inicio.action === "AbrirInicio" ? "LineaPagina" : "Linea"
            }
            onClick={() => {
              props.AbrirInicio();
            }}
          >
            <img className="Inicio" src={require("./images/home_final.svg")} />
          </Link>
          <Link
            to="/contracts"
            className={
              props.inicio.action === "AbrirContratos" ? "LineaPagina" : "Linea"
            }
            onClick={() => {
              props.AbrirContratos();
            }}
          >
            <img
              className="Contratos"
              src={require("./images/line-chart (2).svg")}
            />
          </Link>
          <Link
            to="/referred"
            className={
              props.inicio.action === "AbrirReferidos" ? "LineaPagina" : "Linea"
            }
            onClick={() => {
              props.AbrirReferidos();
            }}
          >
            <img className="Referidos" src={require("./images/link-2.svg")} />
          </Link>
          <Link
            to="/movements"
            className={
              props.inicio.action === "AbrirMovimientos"
                ? "LineaPagina"
                : "Linea"
            }
            onClick={() => {
              props.AbrirMovimientos();
            }}
          >
            <img
              className="Retiradas"
              src={require("./images/transfer (2).svg")}
            />
          </Link>
          <Link
            to="/settings"
            className={
              props.inicio.action === "AbrirAjustes" ? "LineaPagina" : "Linea"
            }
            onClick={() => {
              props.AbrirAjustes();
            }}
          >
            <img className="Ajustes" src={require("./images/gear_final.svg")} />
          </Link>
        </div>
        <div className="RHK_Icono">
          <img
            className="RHK_Logo"
            src={require("./images/ALBATROSS Icon.png")}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuEstatico;
