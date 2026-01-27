import React, { useContext } from 'react'
import "./ItemDetail.css"
import { CartContext } from '../Context/CartContext'

const ItemDetail = ({ id, nombre, precio, img, categoria, stock, disponible, descripcion }) => {

    const { agregarAlCarrito } = useContext(CartContext)

    const handleAgregar = () => {
        agregarAlCarrito({ id, nombre, precio, img, categoria, stock, disponible, descripcion })
    }

    return (
        <article className='contenedorItem'>
            <h4>{nombre}</h4>
            <img src={img} alt={nombre} />
            <p>Precio: ${precio} MXN</p>
            <p>Categoría: {Array.isArray(categoria) ? categoria.join(", ") : categoria}</p>
            <p>Stock: {stock}</p>
            <p>Disponible: {disponible ? "Si" : "No"}</p>
            <p>Descripcion: {descripcion}</p>
            <p>ID: {id}</p>

            <button onClick={handleAgregar}>Agregar al Carrito</button>

        </article>
    )
}

export default ItemDetail