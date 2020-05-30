import React from "react";
import "../inicio/Inicio.css";
import "../movimientos/Movimientos";
import "./Ajustes.css";
import ContactData from "./pestanas/ContactData";
import PersonalData from "./pestanas/PersonalData";
import PasswordData from "./pestanas/PasswordData";
import { Link } from "react-router-dom";

const Ajustar = (props) => (
  <div>
    <div className="Wrapper_Encabezado_Aportaciones">
      <div className="Encabezado">
        <h2>Ajustes</h2>
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
    <div
      onClick={() => {
        props.AbrirDatosUser();
      }}
      className={
        props.ajustes.action === "AbrirDatosUser"
          ? "Boton_DatosUser_Marcado"
          : "Boton_DatosUser_Desmarcado"
      }
    >
      <h3 className="Texto_Boton_DatosUser">Datos de usuario</h3>
    </div>
    <div
      onClick={() => {
        props.AbrirDatosPersonales();
      }}
      className={
        props.ajustes.action === "AbrirDatosPersonales"
          ? "Boton_DatosPer_Marcado"
          : "Boton_DatosPer_Desmarcado"
      }
    >
      <h3 className="Texto_Boton_DatosPer">Ajustes</h3>
    </div>
    {/* <div
      onClick={() => {
        props.AbrirContrasena();
      }}
      className={
        props.ajustes.action === "AbrirContrasena"
          ? "Boton_Contrasena_Marcado"
          : "Boton_Contrasena_Desmarcado"
      }
    >
      <h3 className="Texto_Boton_Contrasena">Contraseña</h3>
    </div> */}
    <div className="Wrapper_Ajustes">
      <div className="Wrapper_Datos_Usuario">
        <div className="Grid_Wrapper_Datos_Usuario">
          {props.ajustes.action === "AbrirDatosUser" ? <PersonalData /> : null}
          {props.ajustes.action === "AbrirDatosPersonales" ? (
            <PasswordData />
          ) : null}
          {/* {props.ajustes.action === "AbrirContrasena" ? <PasswordData /> : null} */}
        </div>
      </div>
    </div>
  </div>
);

export default Ajustar;
