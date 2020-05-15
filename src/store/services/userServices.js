import environment from '../environment/environment.dev';

export const createUser = (user) => fetch(environment.BASEAPI + environment.POST_USER,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(user),
  }).then((response) => response.json())
  .then((responseJson) => responseJson);

export const getUsers = () => fetch(
  environment.BASEAPI + environment.GET_USERS,
  {
    method: 'GET',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    mode: 'cors',
    cache: 'default',
  },
).then((response) => response.json())
  .then((responseJson) => responseJson);

export const getUser = (userId) => fetch(`${environment.BASEAPI + environment.GET_USER}/${userId}`,
  {
    method: 'GET',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    mode: 'cors',
    cache: 'default',
  }).then((response) => response.json())
  .then((responseJson) => responseJson);

export const editUser = (user) => fetch(`${environment.BASEAPI + environment.EDIT_USER}`,
  {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(user),
  }).then((response) => response.json())
  .then((responseJson) => responseJson);

export const deleteUser = (userId) => fetch(`${environment.BASEAPI + environment.DELETE_USER}/${userId}`,
  {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      mode: 'cors',
      cache: 'default',
    },
  }).then((response) => response.json())
  .then((responseJson) => responseJson);

export const signInUser = ({ email, password }) => fetch({
  url: environment.BASEAPI + environment.SIGN_IN_USER,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  body: {
    email, password,
  },
}).then((response) => response.json())
  .then((responseJson) => responseJson);
