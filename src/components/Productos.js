import React, { useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../auth/auth';

const Productos = () => {
  const [showModal, setShowModal] = useState(false);

  const nomRef = useRef();
  const precioRef = useRef();
  const stockRef = useRef();

  const guardar = (e) => {
    e.preventDefault();

    let listado;

    const nom = nomRef.current.value;
    const precio = precioRef.current.value;
    const stock = stockRef.current.value;

    const prod = {
      nom,
      precio,
      stock,
    };

    listado = JSON.parse(localStorage.getItem('listadoProductos')) || [];
    listado.push(prod);
    localStorage.setItem('listadoProductos', JSON.stringify(listado));

    setShowModal(true);

    nomRef.current.value = '';
    precioRef.current.value = '';
    stockRef.current.value = '';

    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  return (
    <>
      {showModal && (
        <div className="alert alert-success" role="alert">
          <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </symbol>
          <div>Guaraddo con exito 😎</div>
        </div>
      )}
      <div className="container">
        <h2 className="text-center">Productos</h2>
        <form action="" className="shadow rounded p-3 mx-auto" onSubmit={guardar}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              ref={nomRef}
              className="form-control"
              placeholder="Ingresar nombre"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="precio" className="form-label">
              Precio
            </label>
            <input
              type="text"
              name="precio"
              id="precio"
              ref={precioRef}
              className="form-control"
              placeholder="Ingresar precio"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="stock" className="form-label">
              Stock
            </label>
            <input
              type="text"
              name="stock"
              id="stock"
              ref={stockRef}
              className="form-control"
              placeholder="Ingresar stock"
            />
          </div>

          <input type="submit" value="Enviar" className="btn btn-secondary" />
        </form>
      </div>
    </>
  );
};

export { Productos };
