import React from 'react';

const PasswordData = (props) => (
  <>
    <div className="Grid_Wrapper_Contrasena">
      <div className="AnchoTexto" />
      <div className="form4">
        <input type="text" name="name" autoComplete="off" required />
        <label htmlFor="name" className="label-name">
          <span className="content-name4">Contraseña Actual</span>
        </label>
      </div>
      <div className="form4">
        <input type="text" name="name" autoComplete="off" required />
        <label htmlFor="name" className="label-name">
          <span className="content-name4">Nueva Contraseña</span>
        </label>
      </div>
      <div className="Boton_Actualizar">
        <h3 className="Actualizar">Actualizar</h3>
      </div>
    </div>
  </>
);

export default PasswordData;
