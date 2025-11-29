import React from 'react'
import Item from "../Item/Item"
import "./ItemList.css"


const ItemList = ({productos}) => {
  return (
    <section className='contenedorProductos'>
        {productos.map(item => (<Item key={item.id} {...item}/>))}
    </section>
  )
}

export default ItemList