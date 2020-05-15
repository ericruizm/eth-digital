import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import MenuLateral from '../components/menulateral/MenuLateral';
import AlertaRetirada from '../components/depositos/AlertaRetirada';
import Aportaciones from '../components/movimientos/Aportaciones';
import Popup from '../components/depositos/Popup';
import PopupRetiradas from '../components/depositos/PopupRetiradas';
import { actionAbrirMenu, actionCerrarMenu } from '../store/Actions';

class Movements extends PureComponent {
  render() {
    const {
      menu, abrirMenu, cerrarMenu, AbrirAjustes, AbrirInicio, AbrirMovimientos, inicio,
      depositos, AbrirDepositos, AbrirRetiradas, movimientos, AbrirAportaciones, AbrirBalance,
      AbrirAlerta, CerrarAlerta, alerta, alertaRetiradas, CerrarAlertaRetiradas, AbrirAlertaRetiradas,
      CerrarDepositos, CerrarRetiradas,
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
            { depositos.action === 'AbrirDepositos' ? <Popup CerrarDepositos={CerrarDepositos} /> : null }
            { depositos.action === 'AbrirRetiradas' ? (
              <>
                { alertaRetiradas.action === 'AbrirAlertaRetiradas'
                  ? (
                    <AlertaRetirada
                      CerrarAlertaRetiradas={CerrarAlertaRetiradas}
                    />
                  ) : null}
                <PopupRetiradas
                  AbrirAlertaRetiradas={AbrirAlertaRetiradas}
                  CerrarRetiradas={CerrarRetiradas}
                />
              </>
            ) : null }
            <Aportaciones
              AbrirDepositos={AbrirDepositos}
              AbrirRetiradas={AbrirRetiradas}
              AbrirAportaciones={AbrirAportaciones}
              AbrirBalance={AbrirBalance}
              depositos={depositos}
              movimientos={movimientos}
              AbrirAlerta={AbrirAlerta}
              CerrarAlerta={CerrarAlerta}
              alerta={alerta}
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
  depositos: state.reducerDepositos,
  movimientos: state.reducerMovimientos,
  alerta: state.reducerAlerta,
  alertaRetiradas: state.reducerAlertaRetiradas,
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
  AbrirDepositos: () => dispatch({
    type: 'ABRIR_DEPOSITOS',
  }),
  AbrirRetiradas: () => dispatch({
    type: 'ABRIR_RETIRADAS',
  }),
  AbrirAportaciones: () => dispatch({
    type: 'ABRIR_APORTACIONES',
  }),

  AbrirBalance: () => dispatch({
    type: 'ABRIR_BALANCE',
  }),

  AbrirAlerta: () => dispatch({
    type: 'ABRIR_ALERTA',
  }),
  CerrarAlerta: () => dispatch({
    type: 'CERRAR_ALERTA',
  }),
  CerrarAlertaRetiradas: () => dispatch({
    type: 'CERRAR_ALERTA_RETIRADAS',
  }),
  AbrirAlertaRetiradas: () => dispatch({
    type: 'ABRIR_ALERTA_RETIRADAS',
  }),
  CerrarRetiradas: () => dispatch({
    type: 'CERRAR_RETIRADAS',
  }),
  CerrarDepositos: () => dispatch({
    type: 'CERRAR_DEPOSITOS',
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movements);
