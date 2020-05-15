import { combineReducers } from 'redux';
import userReducers from './userReducer';
import adminReducers from './adminReducer';
import designReducers from './designReducer';

const reducers = combineReducers({
  ...userReducers,
  ...adminReducers,
  ...designReducers,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOG_OUT') {
    state = undefined;
  }
  return reducers(state, action);
};


// const rootReducer = (state, action) => reducers(state, action);

export default rootReducer;
