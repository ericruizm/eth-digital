import React from 'react';
import './MenuLateral.css';
import { Link } from 'react-router-dom';


const MenuCerrado = (props) => (
  <div className="PantallaMenu">
    <div className="MenuEstatico">
      <div className="Menu">
        <img
          className="Logo"
          src={require('./images/menu (1).svg')}
          alt=""
          onClick={() => { props.abrirMenu(); }}
        />
      </div>
      <div className="MenuGroup">
        <Link to="/" className={props.inicio.action === 'AbrirInicio' ? 'LineaPagina' : 'Linea'} onClick={() => { props.AbrirInicio(); }}>
          <>
            <img
              alt=""
              className="Inicio"
              src={require('./images/home_final.svg')}
            />
          </>
        </Link>
        <Link to="/movements" className={props.inicio.action === 'AbrirMovimientos' ? 'LineaPagina' : 'Linea'} onClick={() => { props.AbrirMovimientos(); }}>
          <>
            <img
              alt=""
              className="Retiradas"
              src={require('./images/transfer (2).svg')}
            />
          </>
        </Link>
        <Link to="/settings" className={props.inicio.action === 'AbrirAjustes' ? 'LineaPagina' : 'Linea'} onClick={() => { props.AbrirAjustes(); }}>
          <>
            <img
              className="Ajustes"
              src={require('./images/gear_final.svg')}
              alt=""
            />
          </>
        </Link>
      </div>
      <div className="RHK_Icono">
        <img
          alt=""
          className="RHK_Logo"
          src={require('./images/REDHAWK Icon.png')}
        />
      </div>
    </div>
  </div>
);

export default MenuCerrado;
