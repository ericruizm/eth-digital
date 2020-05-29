import React from "react";
import "./Referidos.css";

const LinkReferido = (props) => (
  <div className="Wrapper_Rectangulo">
    <div className="Rectangulo">
      <h3 className="Titulo_Rectangulo2">
        Link de <span className="Resumen_Albatross">Referido</span>
      </h3>
      <div className="Contenedor_Rectangulo3">
        <div className="Cantidades3">
          <div className="Grid_Referido_Padre">
            <div className="Grid_Rango_Fila">
              <div className="Grid_Rango_Columna">
                <img
                  className="Icono_Rango"
                  src={require("./images/Cliente 2.svg")}
                />
                <div className="Nombre_Rango">Cliente</div>
              </div>
              <div className="Borde_Link_Referido">
                <div className="Link_Referido">
                  https://eagle.client/?referidos=SDA145T7
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LinkReferido;
