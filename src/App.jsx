import React, { useEffect } from 'react'
import NavBar from "./Componentes/NavBar/NavBar";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from "./Componentes/Cart/Cart";
import { Routes, Route } from 'react-router-dom';
import "./App.css"


const App = () => {

  return (
    <>
      <NavBar />

      <Routes>

        <Route path='/' element={
          <>
            <p id="bienvenido">Bienvenido a mi tienda</p>
            <ItemListContainer />
          </>}
        />

        <Route path="/carrito" element={<Cart />} />
        <Route path="/categorias/:categoriaId" element={<ItemListContainer />} />
        <Route path="/detalles/:id" element={<ItemDetailContainer />} />
      </Routes>
    </>
  )
}

export default App;