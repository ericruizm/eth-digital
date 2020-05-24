import React from "react";
import "./consulta.css";

const ConsultaLogin = (props) => (
  <div>
    <div className="Wrapper_Consulta">
      <div className="Wrapper_Circulo">
        <div
          onClick={() => {
            if (props.consulta.action == "AbrirAlertaConsulta") {
              props.CerrarAlertaConsulta();
            } else {
              props.AbrirAlertaConsulta();
            }
          }}
          className="Circulo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-help-circle"
          >
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default ConsultaLogin;
