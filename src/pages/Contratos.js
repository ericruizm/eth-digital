import React, { PureComponent } from "react";
import { connect } from "react-redux";
import MenuLateral from "../components/menulateral/MenuLateral";
import EncabezadoContratos from "../components/contratos/EncabezadoContratos";
import ResumenContratos from "../components/contratos/ResumenContratos";
import HistorialContratos from "../components/contratos/HistorialContratos";
import Alerta from "../components/movimientos/Alerta";
import PopupPagoUSDC from "../components/depositos/PopupPagoUSDC";
import PopupPagoSaldo from "../components/depositos/PopupPagoSaldo";
import Consulta from "../components/consulta/Consulta";
import AlertaConsulta from "../components/consulta/AlertaConsulta";
import LogOut from "../components/logout/LogOut";

class Contratos extends PureComponent {
  render() {
    const {
      menu,
      AbrirMenu,
      CerrarMenu,
      AbrirAjustes,
      AbrirInicio,
      AbrirReferidos,
      AbrirContratos,
      AbrirMovimientos,
      inicio,
      consulta,
      AbrirAlertaConsulta,
      CerrarAlertaConsulta,
      aviso,
      AbrirAviso,
      CerrarAviso,
      AbrirAlerta,
      CerrarAlerta,
      alerta,
      depositos,
      AbrirDepositos,
      CerrarDepositos,
      AbrirRetiradas,
      CerrarRetiradas,
    } = this.props;
    return (
      <div>
        <div className="Hero">
          {aviso.action === "AbrirAviso" ? (
            <LogOut CerrarAviso={CerrarAviso} />
          ) : null}
          {consulta.action === "AbrirAlertaConsulta" ? (
            <AlertaConsulta />
          ) : null}
          <Consulta
            AbrirAlertaConsulta={AbrirAlertaConsulta}
            CerrarAlertaConsulta={CerrarAlertaConsulta}
            consulta={consulta}
          />
          {alerta.action === "AbrirAlerta" ? (
            <Alerta CerrarAlerta={CerrarAlerta} />
          ) : null}
          <MenuLateral
            menu={menu}
            inicio={inicio}
            AbrirMenu={AbrirMenu}
            CerrarMenu={CerrarMenu}
            AbrirInicio={AbrirInicio}
            AbrirContratos={AbrirContratos}
            AbrirReferidos={AbrirReferidos}
            AbrirMovimientos={AbrirMovimientos}
            AbrirAjustes={AbrirAjustes}
          />
          {depositos.action === "AbrirDepositos" ? (
            <PopupPagoUSDC CerrarDepositos={CerrarDepositos} />
          ) : null}
          {depositos.action === "AbrirRetiradas" ? (
            <PopupPagoSaldo CerrarRetiradas={CerrarRetiradas} />
          ) : null}
          <EncabezadoContratos
            AbrirReferidos={AbrirReferidos}
            AbrirAviso={AbrirAviso}
            AbrirAjustes={AbrirAjustes}
          />
          <ResumenContratos
            AbrirDepositos={AbrirDepositos}
            AbrirRetiradas={AbrirRetiradas}
          />
          <HistorialContratos AbrirAlerta={AbrirAlerta} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  menu: state.reducerMenu,
  inicio: state.reducerInicio,
  consulta: state.reducerAlertaConsulta,
  aviso: state.reducerLogOut,
  alerta: state.reducerAlerta,
  depositos: state.reducerDepositos,
});

const mapDispatchToProps = (dispatch) => ({
  AbrirMenu: () => {
    dispatch({
      type: "ABRIR_MENU",
    });
  },
  CerrarMenu: () => {
    dispatch({
      type: "CERRAR_MENU",
    });
  },
  AbrirDepositos: () =>
    dispatch({
      type: "ABRIR_DEPOSITOS",
    }),
  CerrarDepositos: () =>
    dispatch({
      type: "CERRAR_DEPOSITOS",
    }),
  AbrirRetiradas: () =>
    dispatch({
      type: "ABRIR_RETIRADAS",
    }),
  CerrarRetiradas: () =>
    dispatch({
      type: "CERRAR_RETIRADAS",
    }),
  AbrirAlerta: () =>
    dispatch({
      type: "ABRIR_ALERTA",
    }),
  CerrarAlerta: () =>
    dispatch({
      type: "CERRAR_ALERTA",
    }),
  AbrirInicio: () =>
    dispatch({
      type: "ABRIR_INICIO",
    }),
  AbrirContratos: () =>
    dispatch({
      type: "ABRIR_CONTRATOS",
    }),
  AbrirReferidos: () =>
    dispatch({
      type: "ABRIR_REFERIDOS",
    }),
  AbrirPortfolio: () =>
    dispatch({
      type: "ABRIR_PORTFOLIO",
    }),
  AbrirMovimientos: () =>
    dispatch({
      type: "ABRIR_MOVIMIENTOS",
    }),
  AbrirAjustes: () =>
    dispatch({
      type: "ABRIR_AJUSTES",
    }),
  AbrirAlertaConsulta: () =>
    dispatch({
      type: "ABRIR_ALERTA_CONSULTA",
    }),
  CerrarAlertaConsulta: () =>
    dispatch({
      type: "CERRAR_ALERTA_CONSULTA",
    }),
  AbrirAviso: () =>
    dispatch({
      type: "ABRIR_AVISO",
    }),
  CerrarAviso: () =>
    dispatch({
      type: "CERRAR_AVISO",
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contratos);
