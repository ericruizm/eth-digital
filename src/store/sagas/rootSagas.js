import {
  all,
} from 'redux-saga/effects';

import primaryFunctionUser from './userSagas';
import primaryFunctionAdmin from './adminSagas';


export default function* rootSaga() {
  yield all([
    ...primaryFunctionUser,
    ...primaryFunctionAdmin,
  ]);
}
