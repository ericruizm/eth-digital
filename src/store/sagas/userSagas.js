import {
  takeEvery, call, put,
} from 'redux-saga/effects';

import CONSTANTS from '../Constants';
import {
  createUser, getUsers, deleteUser, getUser, editUser, signInUser,
} from '../services/userServices';
import { actionUsersStore, actionDeleteUserStore, actionUserStoreForm } from '../Actions';


function* createUserSaga({ user }) {
  try {
    yield call(createUser, user);
  } catch (error) {
    console.log('error', error);
  }
}

function* getUsersSaga() {
  try {
    const users = yield call(getUsers);
    yield put(actionUsersStore(users));
  } catch (error) {
    console.log('error', error);
  }
}

function* getUserSaga({ userId }) {
  try {
    const { user } = yield call(getUser, userId);
    yield put(actionUserStoreForm(user));
  } catch (error) {
    console.log('error', error);
  }
}

function* deleteUserSaga({ userId }) {
  try {
    yield call(deleteUser, userId);
    yield put(actionDeleteUserStore(userId));
  } catch (error) {
    console.log('error', error);
  }
}

function* editUserSaga({ user }) {
  try {
    console.log('editUserSaga', user);
    const userEdit = yield call(editUser, user);
    console.log('userEdit', userEdit);
    // yield put(actionUsersStore(users));
  } catch (error) {
    console.log('error', error);
  }
}

function* userSignInGenerate({ data }) {
  try {
    console.log('auth', data);
    /** const res = yield call(signInUser, data);
    console.log('Response', res);
    const { admin, token } = res;
    yield setToken(token);
    yield put(actionStoreAdminSession(admin)); */
    // yield put(actionStoreTokenSession(token));
  } catch (error) {
    console.log('error', error);
  }
}

const primaryFunctionUser = [
  takeEvery(CONSTANTS.CREATE_USER, createUserSaga),
  takeEvery(CONSTANTS.GET_USERS, getUsersSaga),
  takeEvery(CONSTANTS.GET_USER, getUserSaga),
  takeEvery(CONSTANTS.DELETE_USER, deleteUserSaga),
  takeEvery(CONSTANTS.EDIT_USER, editUserSaga),
  takeEvery(CONSTANTS.USER_SIGN_IN, userSignInGenerate),

];

export default primaryFunctionUser;
