import React from 'react'
import './CartWidget.css'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const imgCarrito = "https://previews.123rf.com/images/asmati/asmati1704/asmati170401002/75944847-shopping-cart-sign-vector-flat-black-icon-in-white-circle-with-shadow-at-gray-background.jpg"

  return (
    <Link to="/carrito">
      <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />
    </Link>
  )
}

export default CartWidget