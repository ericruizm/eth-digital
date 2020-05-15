import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Ajustes from '../components/ajustes/Ajustes';
import { actionAbrirMenu, actionCerrarMenu } from '../store/Actions';
import MenuLateral from '../components/menulateral/MenuLateral';

class Settings extends PureComponent {
  render() {
    const {
      menu, abrirMenu, cerrarMenu, AbrirAjustes, AbrirInicio, AbrirMovimientos, inicio,
      AbrirDatosUser, AbrirDatosPersonales, AbrirContrasena, ajustes,
    } = this.props;
    return (
      <div>
        <div className="Wrapper_Hero">
          <div className="Hero">
            <MenuLateral
              menu={menu}
              inicio={inicio}
              abrirMenu={abrirMenu}
              cerrarMenu={cerrarMenu}
              AbrirInicio={AbrirInicio}
              AbrirMovimientos={AbrirMovimientos}
              AbrirAjustes={AbrirAjustes}
            />
            <Ajustes
              AbrirContrasena={AbrirContrasena}
              AbrirDatosPersonales={AbrirDatosPersonales}
              AbrirDatosUser={AbrirDatosUser}
              ajustes={ajustes}
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
});

const mapDispatchToProps = (dispatch) => ({
  abrirMenu: () => {
    dispatch(actionAbrirMenu());
  },
  cerrarMenu: () => {
    dispatch(actionCerrarMenu());
  },
  AbrirInicio: () => dispatch({
    type: 'ABRIR_INICIO',
  }),
  AbrirPortfolio: () => dispatch({
    type: 'ABRIR_PORTFOLIO',
  }),
  AbrirMovimientos: () => dispatch({
    type: 'ABRIR_MOVIMIENTOS',
  }),
  AbrirAjustes: () => dispatch({
    type: 'ABRIR_AJUSTES',
  }),
  AbrirDatosUser: () => dispatch({
    type: 'ABRIR_DATOSUSER',
  }),
  AbrirDatosPersonales: () => dispatch({
    type: 'ABRIR_DATOSPERSONALES',
  }),
  AbrirContrasena: () => dispatch({
    type: 'ABRIR_CONTRASENA',
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
