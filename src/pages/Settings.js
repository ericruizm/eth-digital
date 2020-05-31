import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Ajustes from "../components/ajustes/Ajustes";
import { actionAbrirMenu, actionCerrarMenu } from "../store/Actions";
import Consulta from "../components/consulta/Consulta";
import AlertaConsulta from "../components/consulta/AlertaConsulta";
import LogOut from "../components/logout/LogOut";
import MenuLateral from "../components/menulateral/MenuLateral";

class Settings extends PureComponent {
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
      AbrirDatosUser,
      AbrirDatosPersonales,
      AbrirContrasena,
      ajustes,
      consulta,
      AbrirAlertaConsulta,
      CerrarAlertaConsulta,
      aviso,
      AbrirAviso,
      CerrarAviso,
    } = this.props;
    return (
      <div>
        <div className="Wrapper_Hero">
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
              AbrirContratos={AbrirContratos}
              AbrirReferidos={AbrirReferidos}
              AbrirMovimientos={AbrirMovimientos}
              AbrirAjustes={AbrirAjustes}
            />
            <Ajustes
              AbrirReferidos={AbrirReferidos}
              AbrirContrasena={AbrirContrasena}
              AbrirDatosPersonales={AbrirDatosPersonales}
              AbrirDatosUser={AbrirDatosUser}
              ajustes={ajustes}
              AbrirAviso={AbrirAviso}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  menu: state.reducerMenu,
  inicio: state.reducerInicio,
  ajustes: state.reducerAjustes,
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
  AbrirDatosUser: () =>
    dispatch({
      type: "ABRIR_DATOSUSER",
    }),
  AbrirDatosPersonales: () =>
    dispatch({
      type: "ABRIR_DATOSPERSONALES",
    }),
  AbrirContrasena: () =>
    dispatch({
      type: "ABRIR_CONTRASENA",
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

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
