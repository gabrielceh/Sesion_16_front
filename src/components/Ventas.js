import React, { useEffect, useRef, useState } from 'react';
import VentasListas from './VentasListas';
import { auth } from '../auth/auth';
import { Navigate } from 'react-router-dom';

const Ventas = () => {
  const [listado, setListado] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const prodRef = useRef();
  const totalRef = useRef();

  useEffect(() => {
    fetch('http://localhost:8080/producto/listar')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.estado === 'ok') {
          setListado(res.data);
        }
      });
  }, []);

  const guardar = (e) => {
    const producto = prodRef.current.value;
    const total = totalRef.current.value;
    const token = localStorage.getItem('token');

    fetch('http://localhost:8080/venta/guardar', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ producto, total }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.estado === 'ok') {
          setRefresh(!refresh);
          alert(res.msg);
          prodRef.current.value = '';
          totalRef.current.value = '';
        }
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <select name="" id="" ref={prodRef}>
              <option value="">---Seleccione---</option>
              {listado.length > 0 ? (
                listado.map((prod) => (
                  <option key={prod._id} value={prod._id}>
                    {prod.nombre}
                  </option>
                ))
              ) : (
                <option value="">---Sin datos---</option>
              )}
            </select>
            <label htmlFor="">Total</label>
            <input type="number" className="form-control" ref={totalRef} />
            <button className="btn btn-secondary" onClick={guardar}>
              Guardar
            </button>
          </div>

          <div className="col">
            <VentasListas refresh={refresh} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Ventas;
