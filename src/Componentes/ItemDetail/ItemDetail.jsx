import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({ id, nombre, precio, img, categoria }) => {
    return (
        <article className='contenedorItem'>
            <h4>{nombre}</h4>
            <img src={img} alt={nombre} />
            <p>Precio: ${precio} MXN</p>
            <p>Categoría: {categoria.join(", ")}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatibus et ea quod voluptatem hic quisquam. Quo eum modi quibusdam. Doloremque voluptas hic ab quibusdam quae quis aperiam non error.</p>
            <p>ID: {id}</p>
            <button>Agregar al Carrito</button>

        </article>
    )
}

export default ItemDetail