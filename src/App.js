import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Comentarios from './components/Comentarios';
import ProductList from './components/ProductList';
import { Productos } from './components/Productos';
import Login from './components/Login';
import Home from './components/Home';
import Ventas from './components/Ventas';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <BrowserRouter>
      {/* <Link to="/">Login</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/comentarios">Comentarios</Link> */}
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/producto" element={<Productos />} />
        <Route path="/productos" element={<ProductList />} />
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/home" element={<Home />} />
        <Route path="/comentarios" element={<Comentarios />} />
      </Routes> */}

      <AppRouter />
    </BrowserRouter>

    // <div className="App container">
    //   <div className="row">
    //     <div className="col">
    //       <Productos />
    //     </div>
    //     <div className="col">
    //       <ProductList />
    //     </div>
    //     <div className="col">
    //       <Comentarios />
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
