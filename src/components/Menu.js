import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link className="nav-link" to="/home/producto">
          Productos
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/home/ventas">
          Ventas
        </Link>
      </li>
      <li className="nav-item">
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      </li>
    </ul>
  );
};

export default Menu;
