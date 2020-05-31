import React from "react";
import "../inicio/Inicio.css";
import "./Movimientos.css";
import EncabezadoMovimientos from "./EncabezadoMovimientos";
import BotonDepositosMarcado from "./BotonDepositosMarcado";
import BotonRetiradasMarcado from "./BotonRetiradasMarcado";
import TablaDepositos from "./TablaDepositos";
import Alerta from "./Alerta";
import TablaRetiradas from "./TablaRetiradas";
import Acciones from "./Acciones";

const Aportaciones = (props) => (
  <div>
    <div className="Hero">
      {props.alerta.action === "AbrirAlerta" ? (
        <Alerta CerrarAlerta={props.CerrarAlerta} />
      ) : null}
      <EncabezadoMovimientos
        AbrirReferidos={props.AbrirReferidos}
        AbrirAviso={props.AbrirAviso}
        AbrirAjustes={props.AbrirAjustes}
      />
      <Acciones
        AbrirDepositos={props.AbrirDepositos}
        AbrirRetiradas={props.AbrirRetiradas}
      />
      {props.movimientos.action === "AbrirAportaciones" ? (
        <>
          <BotonDepositosMarcado
            AbrirBalance={props.AbrirBalance}
            AbrirAportaciones={props.AbrirAportaciones}
          />
          <TablaDepositos AbrirAlerta={props.AbrirAlerta} />
        </>
      ) : (
        <>
          <BotonRetiradasMarcado
            AbrirAportaciones={props.AbrirAportaciones}
            AbrirBalance={props.AbrirBalance}
          />
          <TablaRetiradas />
        </>
      )}
    </div>
  </div>
);

export default Aportaciones;
