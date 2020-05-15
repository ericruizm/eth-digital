import React from 'react';
import './Depositos.css';

const Popup = (props) => (
  <div className="Depositos_Retiradas">
    <div className="Wrapper_Depositos">
      <div className="Rectangulo_Depositos">
        <div onClick={props.CerrarDepositos} className="Boton_Cerrar">
          <img className="X_popup" src={require('./images/x.svg')} />
        </div>
        <div className="Padding_QR">
          <div className="QR">
            <div className="QR_Imagen">
              <img src={require('./images/QR.svg')} />
            </div>
          </div>
        </div>
        <div className="Form_Depositos_Wrapper">
          <div className="Form_Depositos">
            <input type="text" name="name" autoComplete="off" required />
            <label htmlFor="name" className="label-name">
              <span className="content-name">Cantidad</span>
            </label>
          </div>
          <div className="ETH">
            <h3>USDC</h3>
          </div>
        </div>
        <div className="Wrapper_Cantidad_Minima">
          <h3 className="Cantidad_Minima">Cantidad mínima 250$</h3>
        </div>
        <div className="Form_Depositos_Wrapper2">
          <div className="Form_Depositos">
            <input type="text" name="name" autoComplete="off" required />
            <label htmlFor="name" className="label-name">
              <span className="content-name">ID de Transacción</span>
            </label>
          </div>
        </div>
        <div className="Direccion_Billetera">
          <h3 className="Billetera">x825787ymin1909nika080xmt</h3>
        </div>
        <h3 className="Direccion_Billetera_USDC">
          Direccion Billetera USDC
        </h3>
        <div className="Wrapper_Boton">
          <div className="Botones_Grid">
            <div className="Boton_Depositar">
              <div className="Grid_Boton_Depositar">
                <img
                  className="Depositos_popup"
                  src={require('./images/withdraw_final.svg')}
                />
                <h3 className="Confirmar_Deposito">Confirmar depósito</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Popup;
