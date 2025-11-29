import React from 'react'
import { useState, useEffect } from "react"
import { getProductos } from "../../asyncmock"
import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const { categoriaId } = useParams()


  useEffect(() => {
    getProductos()

      // .then(respuesta => setProductos(respuesta))
      // .catch(error => console.log(error))

      .then(respuesta => {

        if (categoriaId === "todos") {
          setProductos(respuesta)
          return
        }

        if (categoriaId) {
          const filtrados = respuesta.filter(item =>
            item.categoria.includes(categoriaId)
          )
          setProductos(filtrados)
        } else {
          setProductos(respuesta)
        }
      })
      .catch(error => console.log(error))
  }, [categoriaId])




  return (

    <main>

      <h2>Mis Productos</h2>
      <ItemList productos={productos} />


    </main>
  )
}

export default ItemListContainer