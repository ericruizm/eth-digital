import CONSTANTS from './Constants';

// export const isUserAuth = (user) => ({ type: CONSTANTS.IS_AUTH, user });

export const actionCreateUser = (user) => ({ type: CONSTANTS.CREATE_USER, user });
export const actionGetUsers = () => ({ type: CONSTANTS.GET_USERS });

export const actionGetUser = (userId) => ({ type: CONSTANTS.GET_USER, userId });
export const actionUpdateUser = (user) => ({ type: CONSTANTS.EDIT_USER, user });

export const actionUsersStore = (users) => ({ type: CONSTANTS.STORE_USERS, users });
export const actionDeleteUser = (userId) => ({ type: CONSTANTS.DELETE_USER, userId });
export const actionSignInUser = (data) => ({ type: CONSTANTS.USER_SIGN_IN, data });
// export const actionEditUser = (user) => ({ type: CONSTANTS.EDIT_USER, user });

export const actionDeleteUserStore = (userId) => ({ type: CONSTANTS.DELETE_USER_STORE, userId });
export const actionUserStoreForm = (userForm) => ({ type: CONSTANTS.USER_STORE_FORM, userForm });
export const actionCleanUserStoreForm = () => ({ type: CONSTANTS.CLEAN_USER_STORE_FORM });

export const actionCreateAdmin = (admin) => ({ type: CONSTANTS.CREATE_ADMIN, admin });
export const actionGetAdmins = () => ({ type: CONSTANTS.GET_ADMINS });

export const actionGetAdmin = (adminId) => ({ type: CONSTANTS.GET_ADMIN, adminId });
export const actionUpdateAdmin = (admin) => ({ type: CONSTANTS.EDIT_ADMIN, admin });

export const actionAdminsStore = (admins) => ({ type: CONSTANTS.STORE_ADMINS, admins });
export const actionDeleteAdmin = (adminId) => ({ type: CONSTANTS.DELETE_ADMIN, adminId });
export const actionSignInAdmin = (data) => ({ type: CONSTANTS.ADMIN_SIGN_IN, data });

export const actionDeleteAdminStore = (adminId) => ({ type: CONSTANTS.DELETE_ADMIN_STORE, adminId });
export const actionAdminStoreForm = (adminForm) => ({ type: CONSTANTS.ADMIN_STORE_FORM, adminForm });
export const actionCleanAdminStoreForm = () => ({ type: CONSTANTS.CLEAN_ADMIN_STORE_FORM });

export const actionStoreTokenSession = (token) => ({ type: CONSTANTS.IS_AUTH, token });
export const actionStoreAdminSession = (admin) => ({ type: CONSTANTS.STORE_CURRENT_ADMIN, admin });
export const actionLogOut = () => ({ type: CONSTANTS.LOG_OUT });


/** */
export const actionMenuPosition = () => ({ type: CONSTANTS.MENU_POSITION });
export const actionAbrirMenu = () => ({ type: CONSTANTS.ABRIR_MENU });
export const actionCerrarMenu = () => ({ type: CONSTANTS.CERRAR_MENU });
