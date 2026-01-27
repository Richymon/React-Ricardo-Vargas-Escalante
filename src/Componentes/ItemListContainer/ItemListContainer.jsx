import React from 'react'
import { useState, useEffect } from "react"
import { getProductos } from "../../asyncmock"
import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'



const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoriaId } = useParams()


  useEffect(() => {
    setLoading(true)

    getProductos(categoriaId)
      .then(respuesta => setProductos(respuesta))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [categoriaId])

  if (loading) {
    return <p>Cargando productos...</p>
  }

  return (

    <main>

      <h2>Mis Productos</h2>
      <ItemList productos={productos} />


    </main>
  )
}

export default ItemListContainer