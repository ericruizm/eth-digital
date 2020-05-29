import React from "react";
import MenuAbierto from "./MenuAbierto";
import MenuCerrado from "./MenuCerrado";
import MenuEstatico from "./MenuEstatico";

const MenuLateral = (props) => {
  if (props.menu.action === "AbrirMenu") {
    return (
      <MenuAbierto
        AbrirMenu={props.AbrirMenu}
        menu={props.menu}
        CerrarMenu={props.CerrarMenu}
        AbrirInicio={props.AbrirInicio}
        AbrirContratos={props.AbrirContratos}
        AbrirReferidos={props.AbrirReferidos}
        AbrirMovimientos={props.AbrirMovimientos}
        AbrirAjustes={props.AbrirAjustes}
        inicio={props.inicio}
      />
    );
  }
  if (props.menu.action === "CerrarMenu") {
    return (
      <MenuCerrado
        AbrirMenu={props.AbrirMenu}
        menu={props.menu}
        cerrarMenu={props.cerrarMenu}
        AbrirInicio={props.AbrirInicio}
        AbrirContratos={props.AbrirContratos}
        AbrirReferidos={props.AbrirReferidos}
        AbrirMovimientos={props.AbrirMovimientos}
        AbrirAjustes={props.AbrirAjustes}
        inicio={props.inicio}
      />
    );
  }
  return (
    <MenuEstatico
      AbrirMenu={props.AbrirMenu}
      menu={props.menu}
      CerrarMenu={props.CerrarMenu}
      AbrirInicio={props.AbrirInicio}
      AbrirContratos={props.AbrirContratos}
      AbrirReferidos={props.AbrirReferidos}
      AbrirMovimientos={props.AbrirMovimientos}
      AbrirAjustes={props.AbrirAjustes}
      inicio={props.inicio}
    />
  );
};

export default MenuLateral;
