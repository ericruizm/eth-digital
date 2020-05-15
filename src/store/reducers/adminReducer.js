import CONSTANTS from '../Constants';

/** V2 */
const reducerAdmins = (state = [], action) => {
  switch (action.type) {
    case CONSTANTS.STORE_ADMINS:
      return action.admins;
    case CONSTANTS.DELETE_ADMIN_STORE: {
      const index = state.findIndex((obj) => obj._id === action.adminId);
      if (index > -1) {
        state.splice(index, 1);
      }
      return [...state];
    }
    default:
      return state;
  }
};

const adminFormReducer = (state =
{
  email: '',
  username: '',
},
action) => {
  switch (action.type) {
    case CONSTANTS.ADMIN_STORE_FORM:
      return action.adminForm;
    case CONSTANTS.CLEAN_ADMIN_STORE_FORM: {
      return {
        email: '',
        username: '',
      };
    }
    default:
      return state;
  }
};

const reducerAdminSession = (state = null, action) => {
  switch (action.type) {
    case CONSTANTS.IS_AUTH:
      return action.token;
    case CONSTANTS.LOG_OUT:
      return null;
    default:
      return state;
  }
};

const reducerCurrentAdmin = (state = null, action) => {
  switch (action.type) {
    case CONSTANTS.STORE_CURRENT_ADMIN:
      return action.admin;
    case CONSTANTS.LOG_OUT:
      return null;
    default:
      return state;
  }
};


const adminReducers = {
  reducerAdmins, adminFormReducer, reducerAdminSession, reducerCurrentAdmin,
};

export default adminReducers;
