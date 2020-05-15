import {
  takeEvery, call, put,
} from 'redux-saga/effects';

import CONSTANTS from '../Constants';
import {
  createAdmin, getAdmins, deleteAdmin, getAdmin, editAdmin, signInAdmin,
} from '../services/adminServices';
import {
  actionAdminsStore, actionDeleteAdminStore, actionAdminStoreForm,
  actionStoreAdminSession, actionStoreTokenSession,
} from '../Actions';
import { setToken } from '../helpers/tokenHelper';


function* createAdminSaga({ admin }) {
  try {
    console.log('createAdminSaga', admin);
    yield call(createAdmin, admin);
  } catch (error) {
    console.log('error', error);
  }
}

function* getAdminsSaga() {
  try {
    const admins = yield call(getAdmins);
    yield put(actionAdminsStore(admins));
  } catch (error) {
    console.log('error', error);
  }
}

function* getAdminSaga({ adminId }) {
  try {
    const { admin } = yield call(getAdmin, adminId);
    yield put(actionAdminStoreForm(admin));
  } catch (error) {
    console.log('error', error);
  }
}

function* deleteAdminSaga({ adminId }) {
  try {
    yield call(deleteAdmin, adminId);
    yield put(actionDeleteAdminStore(adminId));
  } catch (error) {
    console.log('error', error);
  }
}

function* editAdminSaga({ admin }) {
  try {
    const adminEdit = yield call(editAdmin, admin);
    console.log('adminEdit', adminEdit);
  } catch (error) {
    console.log('error', error);
  }
}

function* adminSignInGenerate({ data }) {
  try {
    console.log('auth', data);
    const res = yield call(signInAdmin, data);
    console.log('Response', res);
    const { admin, token } = res;
    yield setToken(token);
    yield put(actionStoreAdminSession(admin));
    // yield put(actionStoreTokenSession(token));
  } catch (error) {
    console.log('error', error);
  }
}

const primaryFunctionAdmin = [
  takeEvery(CONSTANTS.CREATE_ADMIN, createAdminSaga),
  takeEvery(CONSTANTS.GET_ADMINS, getAdminsSaga),
  takeEvery(CONSTANTS.GET_ADMIN, getAdminSaga),
  takeEvery(CONSTANTS.DELETE_ADMIN, deleteAdminSaga),
  takeEvery(CONSTANTS.EDIT_ADMIN, editAdminSaga),
  takeEvery(CONSTANTS.ADMIN_SIGN_IN, adminSignInGenerate),

];

export default primaryFunctionAdmin;
