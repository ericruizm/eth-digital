import environment from '../environment/environment.dev';

export const createAdmin = (admin) => fetch(environment.BASEAPI + environment.POST_ADMIN,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(admin),
  }).then((response) => response.json())
  .then((responseJson) => responseJson);

export const getAdmins = () => fetch(
  environment.BASEAPI + environment.GET_ADMINS,
  {
    method: 'GET',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    mode: 'cors',
    cache: 'default',
  },
).then((response) => response.json())
  .then((responseJson) => responseJson);

export const getAdmin = (adminId) => fetch(`${environment.BASEAPI + environment.GET_ADMIN}/${adminId}`,
  {
    method: 'GET',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    mode: 'cors',
    cache: 'default',
  }).then((response) => response.json())
  .then((responseJson) => responseJson);

export const editAdmin = (admin) => fetch(`${environment.BASEAPI + environment.EDIT_ADMIN}`,
  {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(admin),
  }).then((response) => response.json())
  .then((responseJson) => responseJson);

export const deleteAdmin = (adminId) => fetch(`${environment.BASEAPI + environment.DELETE_ADMIN}/${adminId}`,
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

export const signInAdmin = (data) => {
  const { email, password } = data;
  return fetch(environment.BASEAPI + environment.SIGN_IN_ADMIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      email, password,
    }),
  }).then((response) => response.json())
    .then((responseJson) => responseJson);
};
