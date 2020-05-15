import React from 'react';
import './Depositos.css';

const PopupRetiradas = (props) => (
  <div className="Depositos_Retiradas">
    <div className="Wrapper_Depositos">
      <div className="Rectangulo_Depositos">
        <div onClick={() => { props.CerrarRetiradas(); }} className="Boton_Cerrar">
          <img className="X_popup" src={require('./images/x.svg')} />
        </div>
        <div className="Padding_QR">
          <div className="QR">
            <div className="QR_Imagen">
              <img src={require('./images/QR.svg')} />
            </div>
          </div>
        </div>
        <div className="Padding_Direccion_Retirada">
          <div className="Direccion_Retirada">
            <div className="Grid_Direccion_Retirada">
              <h3 className="Saldo_Disponible">590 USDC</h3>
              <h3 className="Texto_Saldo_Disponible">Saldo disponible</h3>
            </div>
          </div>
        </div>
        <div className="Form_Depositos_Wrapper">
          <div className="Form_Depositos2">
            <input type="text" name="name" autoComplete="off" required />
            <label htmlFor="name" className="label-name">
              <span className="content-name">Cantidad</span>
            </label>
          </div>
          <div className="ETH2">
            <h3>USDC</h3>
          </div>
        </div>
        <div className="Wrapper_Cantidad_Minima">
          <h3 className="Cantidad_Minima">Cantidad mínima 100$</h3>
        </div>
        <div className="Form_Depositos_Wrapper2">
          <div className="Form_Depositos">
            <input type="text" name="name" autoComplete="off" required />
            <label htmlFor="name" className="label-name">
              <span className="content-name">Dirección USDC</span>
            </label>
            <div
              onClick={() => { props.AbrirAlertaRetiradas(); }}
              className="Alerta_Retirada"
            >
              <img
                className="Alerta_Retirada_Icono"
                src={require('./images/alert-circle.svg')}
              />
            </div>
          </div>
        </div>

        <div className="Wrapper_Boton">
          <div className="Botones_Grid">
            <div className="Boton_Depositar">
              <div className="Grid_Boton_Depositar">
                <img
                  className="Retiradas_popup"
                  src={require('./images/withdraw_final.svg')}
                />
                <h3 className="Confirmar_Deposito">Solicitar retiro</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PopupRetiradas;
