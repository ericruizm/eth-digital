import React from "react";

const ContactData = (props) => (
  <>
    <div className="Wrapper_Texto_Ajustes">
      <h3 className="Texto_Correo_Electronico">
        Por motivos de seguridad no se puede modificar el email.Si necesita
        cambiar su correo por favor escriba a info@eaglegroup.com
      </h3>
    </div>

    <div className="Wrapper_Telefono">
      <div className="form_prefijo">
        <input type="text" name="name" autoComplete="off" required />
        <label htmlFor="name" className="label-name">
          <span className="content-name-prefijo">+34</span>
        </label>
      </div>
      <div className="form_telefono">
        <input type="text" name="name" autoComplete="off" required />
        <label htmlFor="name" className="label-name">
          <span className="content-name-telefono">Teléfono</span>
        </label>
      </div>
    </div>
    <div className="Boton_Actualizar">
      <h3 className="Actualizar">Actualizar</h3>
    </div>
  </>
);

export default ContactData;
