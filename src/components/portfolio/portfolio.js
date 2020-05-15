import React from 'react'
import '../inicio/Inicio.css'
import './EncabezadoPortfolio'
import EncabezadoPortfolio from './EncabezadoPortfolio'
import Rendimiento from './Rendimiento'
import EncabezadoPortfolio2 from './EncabezadoPortolio2'
import Servicios from './Servicios'
import { connect } from 'react-redux'
import Popup from '../depositos/Popup'

const mapStateToProps = (state) => ({
  depositos: state.reducerDepositos,
})

class Portfolio extends React.Component {
  render() {
    if (this.props.depositos.action == 'AbrirDepositos') {
      return (
        <div>
          <Popup />
          <EncabezadoPortfolio />
          <Rendimiento />
          <EncabezadoPortfolio2 />
          <Servicios />
        </div>
      )
    }
    return (
      <div>
        <EncabezadoPortfolio />
        <Rendimiento />
        <EncabezadoPortfolio2 />
        <Servicios />
      </div>
    )
  }
}

export default connect(mapStateToProps)(Portfolio)
