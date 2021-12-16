import React, { useState, useRef } from 'react';

const Login = () => {
  const [error, setError] = useState('');
  const [msgError, setMsgError] = useState('');
  const usuarioRef = useRef();
  const passwordRef = useRef();

  const login = () => {
    /**usuario: gabo
     * password: 12345
     */
    const usuario = usuarioRef.current.value;
    const password = passwordRef.current.value;

    fetch('http://localhost:8080/user/login', {
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ usuario, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.estado === 'ok') {
          localStorage.setItem('token', res.token);
          window.location.href = res.url;
        } else {
          setError(true);
          setMsgError(res.msg);
        }
      });
  };

  return (
    <>
      {error && (
        <div className="alert alert-danger" role="alert">
          {msgError}
        </div>
      )}
      <form>
        <div>
          <label htmlFor="usuario" className="">
            Usuario
          </label>
          <input
            ref={usuarioRef}
            type="text"
            name="usuario"
            id="usuario"
            className="form-control"
          />
        </div>

        <div>
          <label htmlFor="password" className="">
            Password
          </label>
          <input
            ref={passwordRef}
            type="password"
            name="password"
            id="password"
            className="form-control"
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={login}>
          Entrar
        </button>
      </form>
    </>
  );
};

export default Login;
