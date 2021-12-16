import React from 'react';
import Menu from './Menu';
import { Route, Routes } from 'react-router-dom';
import { Productos } from './Productos';
import ProductList from './ProductList';
import Ventas from './Ventas';
import Comentarios from './Comentarios';
import Route404 from '../router/Route404';
import Home from './Home';

const Dashboard = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/producto" element={<Productos />} />
        <Route path="/productos" element={<ProductList />} />
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/comentarios" element={<Comentarios />} />

        <Route path="*" element={<Route404 />} />
      </Routes>
    </>
  );
};

export default Dashboard;
