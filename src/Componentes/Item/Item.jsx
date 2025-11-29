import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, precio, img, categoria }) => {
  return (
    <article className='cardProducto'>
      <h3>{nombre}</h3>
      <img src={img} alt={nombre} />
      <p>Precio: ${precio} MXN</p>
      <p>Categoría: {categoria.join(", ")}</p>
      <p>ID: {id}</p>

      <button>
        <Link to={`/detalles/${id}`}>Detalles</Link>
    </button>

    </article >
  )
}

export default Item