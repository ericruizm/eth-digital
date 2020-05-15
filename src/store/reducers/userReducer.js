import CONSTANTS from '../Constants';

/** V2 */
const reducerUsers = (state = [], action) => {
  switch (action.type) {
    case CONSTANTS.STORE_USERS:
      return action.users;
    case CONSTANTS.DELETE_USER_STORE: {
      const index = state.findIndex((obj) => obj._id === action.userId);
      if (index > -1) {
        state.splice(index, 1);
      }
      return [...state];
    }
    default:
      return state;
  }
};

const userFormReducer = (state =
{
  email: '',
  username: '',
  password: '',
  dni: '',
  phone: '',
  userType: 'Cliente',
},
action) => {
  switch (action.type) {
    case CONSTANTS.USER_STORE_FORM:
      return action.userForm;
    case CONSTANTS.CLEAN_USER_STORE_FORM: {
      return {
        email: '',
        username: '',
        password: '',
        dni: '',
        phone: '',
        userType: 'Cliente',
      };
    }
    default:
      return state;
  }
};

const userReducers = {
  reducerUsers, userFormReducer,
};

export default userReducers;
