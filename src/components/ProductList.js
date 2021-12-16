import React from 'react';

const ProductList = () => {
  let listado = JSON.parse(localStorage.getItem('listadoProductos')) || [];

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {listado.map((p) => (
            <tr key={p.nom}>
              <td>{p.nom}</td>
              <td>{p.precio}</td>
              <td>{p.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
