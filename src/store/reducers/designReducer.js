const reducerMenu = (state = { action: "" }, action) => {
  switch (action.type) {
    case "ABRIR_MENU":
      return { ...state, action: "AbrirMenu" };
    case "CERRAR_MENU":
      return { ...state, action: "CerrarMenu" };
    default:
      return state;
  }
};

const reducerInicio = (state = { action: "AbrirInicio" }, action) => {
  switch (action.type) {
    case "ABRIR_PORTFOLIO":
      return { ...state, action: "AbrirPortfolio" };
    case "CERRAR_PORTFOLIO":
      return { ...state, action: "CerrarPortfolio" };
    case "ABRIR_INICIO":
      return { ...state, action: "AbrirInicio" };
    case "ABRIR_CONTRATOS":
      return { ...state, action: "AbrirContratos" };
    case "CERRAR_INICIO":
      return { ...state, action: "CerrarInicio" };
    case "ABRIR_MOVIMIENTOS":
      return { ...state, action: "AbrirMovimientos" };
    case "ABRIR_AJUSTES":
      return { ...state, action: "AbrirAjustes" };
    default:
      return state;
  }
};

const reducerDepositos = (state = { action: "" }, action) => {
  switch (action.type) {
    case "ABRIR_DEPOSITOS":
      return { ...state, action: "AbrirDepositos" };
    case "CERRAR_DEPOSITOS":
      return { ...state, action: "CerrarDepositos" };
    case "ABRIR_RETIRADAS":
      return { ...state, action: "AbrirRetiradas" };
    case "CERRAR_RETIRADAS":
      return { ...state, action: "CerrarRetiradas" };
    default:
      return state;
  }
};

const reducerAlertaRetiradas = (state = { action: "" }, action) => {
  switch (action.type) {
    case "ABRIR_ALERTA_RETIRADAS":
      return { ...state, action: "AbrirAlertaRetiradas" };
    case "CERRAR_ALERTA_RETIRADAS":
      return { ...state, action: "CerrarAlertaRetiradas" };
    default:
      return state;
  }
};

const reducerMovimientos = (
  state = { action: "AbrirAportaciones" },
  action
) => {
  switch (action.type) {
    case "ABRIR_APORTACIONES":
      return { ...state, action: "AbrirAportaciones" };
    case "ABRIR_BALANCE":
      return { ...state, action: "AbrirBalance" };
    default:
      return state;
  }
};

const reducerAlerta = (state = { action: "" }, action) => {
  switch (action.type) {
    case "ABRIR_ALERTA":
      return { ...state, action: "AbrirAlerta" };
    case "CERRAR_ALERTA":
      return { ...state, action: "CerrarAlerta" };
    default:
      return state;
  }
};

const reducerAjustes = (state = { action: "AbrirDatosUser" }, action) => {
  switch (action.type) {
    case "ABRIR_DATOSUSER":
      return { ...state, action: "AbrirDatosUser" };
    case "ABRIR_DATOSPERSONALES":
      return { ...state, action: "AbrirDatosPersonales" };
    case "ABRIR_CONTRASENA":
      return { ...state, action: "AbrirContrasena" };
    default:
      return state;
  }
};

const reducerAlertaConsulta = (state = { action: "" }, action) => {
  switch (action.type) {
    case "ABRIR_ALERTA_CONSULTA":
      return { ...state, action: "AbrirAlertaConsulta" };
    case "CERRAR_ALERTA_CONSULTA":
      return { ...state, action: "CerrarAlertaConsulta" };
    default:
      return state;
  }
};

const reducerLogOut = (state = { action: "" }, action) => {
  switch (action.type) {
    case "ABRIR_AVISO":
      return { ...state, action: "AbrirAviso" };
    case "CERRAR_AVISO":
      return { ...state, action: "CerrarAviso" };
    default:
      return state;
  }
};

const designReducers = {
  reducerMenu,
  reducerInicio,
  reducerAjustes,
  reducerMovimientos,
  reducerDepositos,
  reducerAlerta,
  reducerAlertaRetiradas,
  reducerAlertaConsulta,
  reducerLogOut,
};

export default designReducers;
