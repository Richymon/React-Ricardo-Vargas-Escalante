import React from 'react'
import NavBar from "./Componentes/NavBar/NavBar";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
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

        <Route path="/carrito" element={<p>pagina de carrito</p>} />
        <Route path="/categorias/:categoriaId" element={<ItemListContainer />} />
        <Route path="/detalles/:id" element={<ItemDetailContainer />} />
      </Routes>
    </>
  )
}

export default App;