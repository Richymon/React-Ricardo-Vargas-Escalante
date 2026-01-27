import React, { useContext, useState } from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'


const Item = ({ id, nombre, precio, img, categoria, stock, disponible }) => {

  const { agregarAlCarrito } = useContext(CartContext)
  const [mensaje, setMensaje] = useState('');

  const handleAgregar = () => {
    if (stock <= 0 || !disponible) {
      setMensaje('No se puede agregar ya que no esta disponible');
      setTimeout(() => setMensaje(''), 3000);
      return;
    }
    agregarAlCarrito({ id, nombre, precio, img, categoria, stock, disponible });
    setMensaje('Producto agregado al carrito');
    setTimeout(() => setMensaje(''), 3000)
  }

  return (
    <article className='cardProducto'>
      <h3>{nombre}</h3>
      <img src={img} alt={nombre} />
      <p>Precio: ${precio} MXN</p>
      <p>Categoría: {categoria.join(", ")}</p>
      {/* <p>ID: {id}</p> */}
      <p>Stock: {stock}</p>
      <p>Disponible: {disponible ? "Si" : "No"}</p>

      <button>
        <Link to={`/detalles/${id}`}>Detalles</Link>
      </button>
      <button onClick={handleAgregar} disabled={stock <= 0}>{stock <= 0 ? "Sin Stock" : "Agregar al Carrito" }</button>

      {mensaje && (
        <div className='mensajePrompt'>{mensaje}</div>
      )}
    </article >
  )
}

export default Item