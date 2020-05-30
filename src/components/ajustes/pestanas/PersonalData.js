import React from "react";

const PersonalData = () => (
  <>
    <div className="Wrapper_Texto_Ajustes2">
      <h3 className="Texto_Correo_Electronico2">
        En caso de querer modificar estos datos personales contacte con
        info@eaglegroup.com
      </h3>
    </div>
    <div className="Wrapper_Nombre_Apellidos">
      <div className="form_nombre">
        <input type="text" name="name" autoComplete="off" required />
        <label htmlFor="name" className="label-name">
          <span className="content-name-nombre">Nombre</span>
        </label>
      </div>
      <div className="form_telefono">
        <input type="text" name="name" autoComplete="off" required />
        <label htmlFor="name" className="label-name">
          <span className="content-name-telefono">Apellidos</span>
        </label>
      </div>
    </div>
    <div className="Wrapper_Nombre_Apellidos">
      <div className="form_nombre">
        <input type="text" name="name" autoComplete="off" required />
        <label htmlFor="name" className="label-name">
          <span className="content-name-nombre">Género</span>
        </label>
      </div>
      <div className="form_telefono">
        <input type="text" name="name" autoComplete="off" required />
        <label htmlFor="name" className="label-name">
          <span className="content-name-telefono">Fecha de Nacimiento</span>
        </label>
      </div>
    </div>
    <div className="Wrapper_Correo">
      <div className="form_correo">
        <input type="text" name="name" autoComplete="off" required />
        <label htmlFor="name" className="label-name">
          <span className="content-name-correo">Correo electrónico</span>
        </label>
      </div>
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

export default PersonalData;
