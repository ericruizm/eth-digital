import React from "react";
import "../components/login.css";
import "../components/consulta/consulta.css";
import { Link } from "react-router-dom";
import ConsultaLogin from "../components/consulta/ConsultaLogin";
import AlertaConsultaLogin from "../components/consulta/AlertaConsultaLogin";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      password: "",
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }

  render() {
    return (
      <div className="Login">
        <div className="LoginGroup">
          <div className="LogoEagle" />
          <div className="FormGroup">
            <div className="Wrapper1">
              <div className="form" autocomplete="nope">
                <input type="text" name="name" autocomplete="nope" required />
                <label htmlFor="name" className="label-name">
                  <span className="content-name"> Email </span>
                </label>
              </div>
            </div>
            <div className="Wrapper2">
              <div className="form">
                <input
                  type={this.state.hidden ? "password" : "text"}
                  name="name"
                  autocomplete="nope"
                  required
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                />
                <label htmlFor="name" className="label-name">
                  <span className="content-name"> Contraseña </span>
                </label>
                <div className="Image">
                  <img
                    src={require(this.state.hidden
                      ? "../images/eye.svg"
                      : "../images/eye-off.svg")}
                    onClick={this.toggleShow}
                  />
                </div>
              </div>
            </div>
            <Link
              style={{ textDecoration: "none" }}
              className="Boton_LogIn"
              to="/home"
            >
              Iniciar Sesión
            </Link>
            <h3>¿Has olvidado la contraseña ?</h3>
          </div>
        </div>
        <div className="Redhawk_LogIn">
          <img
            src={require("../components/menulateral/images/REDHAWK Icon.png")}
          />
        </div>
        {/* <AlertaConsultaLogin />
        <ConsultaLogin /> */}
      </div>
    );
  }
}

export default Login;
