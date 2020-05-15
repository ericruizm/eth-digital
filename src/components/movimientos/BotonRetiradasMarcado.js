import React from 'react';
import './Movimientos.css';
import '../inicio/Inicio.css';

const BotonRetiradasMarcado = (props) => (
  <div>
    <div
      onClick={() => { console.log('CLICKCKCKC'); props.AbrirAportaciones(); }}
      className="Boton_Aportaciones_Desmarcado"
    >
      <h3 className="Texto_Boton_Aportaciones">Depósitos</h3>
    </div>
    <div
      className="Boton_BalanceDisponible_Marcado"
      onClick={() => { console.log('CLICKCKCKC'); props.AbrirBalance(); }}
    >
      <h3 className="Texto_Boton_Aportaciones">Retiradas</h3>
    </div>
  </div>
);

export default BotonRetiradasMarcado;

/**
 * const mapStateToProps = (state) => ({
  movimientos: state.reducerMovimientos,
  alerta: state.reducerAlerta,
})

function mapDispatchToProps(dispatch) {
  return {
    AbrirAportaciones: () =>
      dispatch({
        type: 'ABRIR_APORTACIONES',
      }),

    AbrirBalance: () =>
      dispatch({
        type: 'ABRIR_BALANCE',
      }),

    AbrirAlerta: () =>
      dispatch({
        type: 'ABRIR_ALERTA',
      }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Boton_Retiradas_Marcado);
 */
