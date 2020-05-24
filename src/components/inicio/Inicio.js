import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Inicio.css";
import { connect } from "react-redux";
import Resumen from "./Resumen";
import Encabezado from "./Encabezado";
import Historial from "./Historial";

import MenuLateral from "../menulateral/MenuLateral";

const mapStateToProps = (state) => ({
  inicio: state.reducerInicio,
  movimientos: state.reducerMovimientos,
});

class Inicio extends React.PureComponent {
  render() {
    return (
      <div className="Hero">
        <MenuLateral />
        <Encabezado />
        <Resumen />
        <Historial />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Inicio);
