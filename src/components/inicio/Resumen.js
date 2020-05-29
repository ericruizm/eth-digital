import React from "react";
import "./Inicio.css";

const Resumen = () => (
  <div className="Wrapper_Rectangulo">
    <div className="Rectangulo">
      <h3 className="Titulo_Rectangulo">
        Resumen <span className="Resumen_Albatross">ALBATROSS</span>
      </h3>
      <div className="Contenedor_Rectangulo">
        <div className="Cantidades">
          <h3 className="Titulo_Cantidades">Cantidad Despositada:</h3>
          <h3 className="Texto_Cantidades">3.500 USDC</h3>
        </div>
        <div className="Cantidades">
          <h3 className="Titulo_Cantidades">Beneficio Acumulado:</h3>
          <h3 className="Texto_Cantidades">300 USDC</h3>
        </div>
        <div className="Cantidades">
          <h3 className="Titulo_Cantidades">Saldo Disponible:</h3>
          <h3 className="Texto_Cantidades">150 USDC</h3>
        </div>
      </div>
    </div>
  </div>
);

export default Resumen;
