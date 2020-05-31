import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../layouts/index.css";
import { connect } from "react-redux";
import MenuLateral from "../components/menulateral/MenuLateral";
import Encabezado from "../components/inicio/Encabezado";
import Resumen from "../components/inicio/Resumen";
import Historial from "../components/inicio/Historial";
import Consulta from "../components/consulta/Consulta";
import AlertaConsulta from "../components/consulta/AlertaConsulta";
import LogOut from "../components/logout/LogOut";
import { actionAbrirMenu, actionCerrarMenu } from "../store/Actions";

class Home extends React.PureComponent {
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
    } = this.props;
    return (
      <div className="Hero">
        {aviso.action === "AbrirAviso" ? (
          <LogOut CerrarAviso={CerrarAviso} />
        ) : null}
        {consulta.action === "AbrirAlertaConsulta" ? <AlertaConsulta /> : null}
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
        <Encabezado
          AbrirReferidos={AbrirReferidos}
          AbrirAviso={AbrirAviso}
          AbrirAjustes={AbrirAjustes}
        />
        <Resumen />
        <Historial />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  menu: state.reducerMenu,
  inicio: state.reducerInicio,
  consulta: state.reducerAlertaConsulta,
  aviso: state.reducerLogOut,
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
  AbrirInicio: () =>
    dispatch({
      type: "ABRIR_INICIO",
    }),
  AbrirReferidos: () =>
    dispatch({
      type: "ABRIR_REFERIDOS",
    }),
  AbrirContratos: () =>
    dispatch({
      type: "ABRIR_CONTRATOS",
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
