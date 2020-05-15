import React from 'react'
import '../inicio/Inicio.css'
import './Portfolio.css'

const Rendimiento = () => {
  return (
    <div className="Wrapper_Rectangulo2">
      <div className="RectanguloPortfolio">
        <h3 className="Titulo_Rectangulo">Rendimiento</h3>
        <div className="Contenedor_Rendimiento">
          <div className="Tipos">
            <div className="Wrapper_Tipos">
              <div className="Grid_Tipos">
                <img src={require('./images/REDHAWK Icon.png')} />
                <div className="Texto_Tipos">
                  <h3 className="Redhawk_h3">REDHAWK</h3>
                  <h3 className="Balance_h3">3.57891012</h3>
                  <h3 className="Beneficio_h3">0.57891012</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="Tipos">
            <div className="Grid_Tipos2">
              <img
                className="KINGFISHER"
                src={require('./images/KINGFISHER Icon.png')}
              />
              <div className="Texto_Tipos">
                <h3 className="Redhawk_h3">KINGFISHER</h3>
                <h3 className="Balance_h3">PROXIMAMENTE</h3>
              </div>
            </div>
          </div>
          <div className="Tipos">
            <div className="Grid_Tipos3">
              <img
                className="ALBATROSS"
                src={require('./images/ALBATROSS Icon.png')}
              />
              <div className="Texto_Tipos">
                <h3 className="Redhawk_h3">ALBATROSS</h3>
                <h3 className="Balance_h3">PROXIMAMENTE</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rendimiento
