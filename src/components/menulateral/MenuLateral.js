import React from 'react';
import MenuAbierto from './MenuAbierto';
import MenuCerrado from './MenuCerrado';
import MenuEstatico from './MenuEstatico';

const MenuLateral = (props) => {
  if (props.menu.action === 'AbrirMenu') {
    return (
      <MenuAbierto
        abrirMenu={props.abrirMenu}
        menu={props.menu}
        cerrarMenu={props.cerrarMenu}
        AbrirInicio={props.AbrirInicio}
        AbrirMovimientos={props.AbrirMovimientos}
        AbrirAjustes={props.AbrirAjustes}
        inicio={props.inicio}
      />
    );
  } if (props.menu.action === 'CerrarMenu') {
    return (
      <MenuCerrado
        abrirMenu={props.abrirMenu}
        menu={props.menu}
        cerrarMenu={props.cerrarMenu}
        AbrirInicio={props.AbrirInicio}
        AbrirMovimientos={props.AbrirMovimientos}
        AbrirAjustes={props.AbrirAjustes}
        inicio={props.inicio}
      />
    );
  }
  return (
    <MenuEstatico
      abrirMenu={props.abrirMenu}
      menu={props.menu}
      cerrarMenu={props.cerrarMenu}
      AbrirInicio={props.AbrirInicio}
      AbrirMovimientos={props.AbrirMovimientos}
      AbrirAjustes={props.AbrirAjustes}
      inicio={props.inicio}
    />
  );
};

export default MenuLateral;
