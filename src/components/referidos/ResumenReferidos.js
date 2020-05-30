import React from "react";
import "./Referidos.css";

const ResumenReferidos = (props) => (
  <div className="Wrapper_Rectangulo3">
    <div className="Rectangulo">
      <h3 className="Titulo_Rectangulo2">
        Resumen <span className="Resumen_Albatross">Referidos</span>
      </h3>
      <div className="Contenedor_Rectangulo">
        <div className="Cantidades">
          <h3 className="Titulo_Cantidades">Cantidad Despositada:</h3>
          <div className="Grid_Volumen_Filas">
            <h3 className="Texto_Cantidades">5.200 USDC</h3>
            <div className="Barra_Progreso">
              <div className="Progreso_Cantidad_Depositada"></div>
            </div>
            <div className="Grid_Num_Progreso">
              <div className="Num_Progreso">0</div>
              <div className="Num_Progreso">8.000</div>
            </div>
          </div>
        </div>
        <div className="Cantidades">
          <h3 className="Titulo_Cantidades">Volumen de equipo:</h3>
          <div className="Grid_Volumen_Filas">
            <h3 className="Texto_Cantidades">28.000 USDC</h3>
            <div className="Barra_Progreso">
              <div className="Progreso_Volumen_Equipo"></div>
            </div>
            <div className="Grid_Num_Progreso">
              <div className="Num_Progreso">0</div>
              <div className="Num_Progreso">70.000</div>
            </div>
          </div>
        </div>
        <div className="Cantidades">
          <h3 className="Titulo_Cantidades">Volumen de clientes:</h3>
          <div className="Grid_Volumen_Filas">
            <h3 className="Texto_Cantidades">10.000 USDC</h3>
            <div className="Barra_Progreso">
              <div className="Progreso_Volumen_Clientes"></div>
            </div>
            <div className="Grid_Num_Progreso">
              <div className="Num_Progreso">0</div>
              <div className="Num_Progreso">30.000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ResumenReferidos;
