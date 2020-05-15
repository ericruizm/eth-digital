import React from 'react'
import '../inicio/Inicio.css'
import './Portfolio.css'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  depositos: state.reducerDepositos,
})

function mapDispatchToProps(dispatch) {
  return {
    AbrirDepositos: () =>
      dispatch({
        type: 'ABRIR_DEPOSITOS',
      }),
  }
}

class Servicios extends React.Component {
  render() {
    return (
      <div className="Wrapper_Rectangulo2">
        <div className="RectanguloPortfolio2">
          <div className="Contenedor_Rendimiento2">
            <div className="Tipos2">
              <div className="Wrapper_Tipos2">
                <div className="Grid_Tipos4">
                  <img src={require('./images/REDHAWK Icon.png')} />

                  <h3 className="Redhawk_Servicios">REDHAWK</h3>
                  <h3 className="Servicio_Descripcion1">
                    Redhawk es el servicio por excelencia de Eagle Group. Aquí
                    te ayudaremos con todo lo que necesites.
                  </h3>
                  <div
                    onClick={this.props.AbrirDepositos}
                    className="Boton_Comprar"
                  >
                    <h3 className="Comprar_Servicio1">Comprar</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="Tipos2">
              <div className="Wrapper_Tipos3">
                <div className="Grid_Tipos3">
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
            </div>
            <div className="Tipos2">
              <div className="Wrapper_Tipos3">
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
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Servicios)
