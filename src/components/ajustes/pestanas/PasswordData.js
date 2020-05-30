import React from "react";

const PasswordData = () => (
  <>
    <div className="Wrapper_Texto_Ajustes2">
      <h3 className="Texto_Correo_Electronico3">
        <br></br> <br></br>&emsp; &emsp;CONTRASEÑA
      </h3>
    </div>

    <div className="Wrapper_Correo">
      <div className="form_correo">
        <input type="text" name="name" autoComplete="off" required />
        <label htmlFor="name" className="label-name">
          <span className="content-name-correo">Nueva contraseña</span>
        </label>
      </div>
    </div>
    <div className="Wrapper_Correo">
      <div className="form_correo">
        <input type="text" name="name" autoComplete="off" required />
        <label htmlFor="name" className="label-name">
          <span className="content-name-correo">Confirmar contraseña</span>
        </label>
      </div>
    </div>

    <div className="Boton_Actualizar">
      <h3 className="Actualizar">Actualizar</h3>
    </div>
    <div className="Wrapper_Texto_Ajustes2">
      <h3 className="Texto_Correo_Electronico3">
        <br></br> <br></br>&emsp; &emsp;INTERÉS COMPUESTO
      </h3>
    </div>
    <div className="Wrapper_Interes_Compuesto">
      <div className="Grid_Interes_Compuesto">
        <form>
          <input
            type="checkbox"
            id="fruit-1"
            name="fruit-1"
            value="Apple"
          ></input>
        </form>
        <div className="Interes_Compuesto">
          Para optimizar tus rendimientos y aprovecharnos del enorme potencial
          del interés compuesto, puedes activar la opción de comprar USDC
          automáticamente cuando el saldo generado alcance el límite de los 250
          USDC
        </div>
      </div>
    </div>
    <div className="Boton_Actualizar2">
      <h3 className="Actualizar2">Eliminar cuenta</h3>
    </div>
  </>
);

export default PasswordData;
