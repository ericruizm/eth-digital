import React, { PureComponent } from "react";
import { connect } from "react-redux";
import MenuLateral from "../components/menulateral/MenuLateral";
import EncabezadoReferidos from "../components/referidos/EncabezadoReferidos";
import LinkReferido from "../components/referidos/LinkReferido";
import ResumenReferidos from "../components/referidos/ResumenReferidos";
import HistorialContratos from "../components/contratos/HistorialContratos";
import Consulta from "../components/consulta/Consulta";
import AlertaConsulta from "../components/consulta/AlertaConsulta";
import LogOut from "../components/logout/LogOut";

class Referidos extends PureComponent {
  render() {
    const {
      menu,
      AbrirMenu,
      CerrarMenu,
      AbrirAjustes,
      AbrirInicio,
      AbrirContratos,
      AbrirReferidos,
      AbrirMovimientos,
      inicio,
      consulta,
      AbrirAlertaConsulta,
      CerrarAlertaConsulta,
      aviso,
      AbrirAviso,
      CerrarAviso,
      AbrirAlerta,
      AbrirDepositos,
      AbrirRetiradas,
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
          <MenuLateral
            menu={menu}
            inicio={inicio}
            AbrirMenu={AbrirMenu}
            CerrarMenu={CerrarMenu}
            AbrirInicio={AbrirInicio}
            AbrirReferidos={AbrirReferidos}
            AbrirContratos={AbrirContratos}
            AbrirMovimientos={AbrirMovimientos}
            AbrirAjustes={AbrirAjustes}
          />
          <EncabezadoReferidos
            AbrirReferidos={AbrirReferidos}
            AbrirAviso={AbrirAviso}
            AbrirAjustes={AbrirAjustes}
          />
          <LinkReferido />
          <ResumenReferidos />
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

export default connect(mapStateToProps, mapDispatchToProps)(Referidos);
