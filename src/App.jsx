import React from "react";
import NavBar from "./assets/Componentes/NavBar/NavBar";
import ItemListContainer from "./assets/Componentes/ItemListContainer/ItemListContainer";


const App = () => {


  return (
    <>
      <NavBar />
      <ItemListContainer titulo="Lista de Productos - (es un prop)" />
    </>
  )
}

export default App;