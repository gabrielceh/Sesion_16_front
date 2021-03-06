//npm install jwt-decode

import jwtDecode from 'jwt-decode';

export const auth = () => {
  let resp = false;

  try {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const payload = jwtDecode(token);
      if (payload.usuario) {
        resp = true;
      }
    }
  } catch (error) {}

  return resp;
};
