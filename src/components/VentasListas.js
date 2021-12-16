import React, { useEffect, useState } from 'react';

const VentasListas = ({ refresh }) => {
  const [listado, setListado] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:8080/venta/listar', {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.estado === 'ok') {
          setListado(res.data);
        }
      });
  }, [refresh]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {listado.map((v) => (
            <tr key={v._id}>
              <td>{v.producto.nombre}</td>
              <td>{v.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VentasListas;
