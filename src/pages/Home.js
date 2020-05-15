import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../layouts/index.css';
import { connect } from 'react-redux';
import MenuLateral from '../components/menulateral/MenuLateral';
import Encabezado from '../components/inicio/Encabezado';
import Resumen from '../components/inicio/Resumen';
import Historial from '../components/inicio/Historial';
import { actionAbrirMenu, actionCerrarMenu } from '../store/Actions';

class Home extends React.PureComponent {
  render() {
    const {
      menu, AbrirMenu, CerrarMenu, AbrirAjustes, AbrirInicio, AbrirMovimientos, inicio,
    } = this.props;
    return (
      <div className="Hero">
        <MenuLateral
          menu={menu}
          inicio={inicio}
          abrirMenu={AbrirMenu}
          cerrarMenu={CerrarMenu}
          AbrirInicio={AbrirInicio}
          AbrirMovimientos={AbrirMovimientos}
          AbrirAjustes={AbrirAjustes}
        />
        <Encabezado />
        <Resumen />
        <Historial />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  menu: state.reducerMenu,
  inicio: state.reducerInicio,

});

const mapDispatchToProps = (dispatch) => ({
  AbrirMenu: () => {
    dispatch(actionAbrirMenu());
  },
  CerrarMenu: () => {
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
