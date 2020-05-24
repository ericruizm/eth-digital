import React from "react";
import "../inicio/Inicio.css";
import "../movimientos/Movimientos";
import "./Ajustes.css";
import ContactData from "./pestanas/ContactData";
import PersonalData from "./pestanas/PersonalData";
import PasswordData from "./pestanas/PasswordData";

const Ajustar = (props) => (
  <div>
    <div className="Wrapper_Encabezado_Aportaciones">
      <div className="Encabezado">
        <h2>Ajustes</h2>
      </div>
      <div className="Nombre">
        <h2>Roger W.</h2>
        <img
          onClick={() => {
            props.AbrirAviso();
          }}
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
      <h3 className="Texto_Boton_DatosPer">Datos Personales</h3>
    </div>
    <div
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
    </div>
    <div className="Wrapper_Ajustes">
      <div className="Wrapper_Datos_Usuario">
        <div className="Grid_Wrapper_Datos_Usuario">
          {props.ajustes.action === "AbrirDatosUser" ? <ContactData /> : null}
          {props.ajustes.action === "AbrirDatosPersonales" ? (
            <PersonalData />
          ) : null}
          {props.ajustes.action === "AbrirContrasena" ? <PasswordData /> : null}
        </div>
      </div>
    </div>
  </div>
);

export default Ajustar;
