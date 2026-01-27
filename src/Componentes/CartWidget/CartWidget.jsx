import React, { useContext } from 'react'
import './CartWidget.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'

const CartWidget = () => {

  const {cantidadTotal} = useContext(CartContext)
  const imgCarrito = "https://previews.123rf.com/images/asmati/asmati1704/asmati170401002/75944847-shopping-cart-sign-vector-flat-black-icon-in-white-circle-with-shadow-at-gray-background.jpg"

  return (
    <Link to="/carrito">
      <img className='imgCarrito' src={imgCarrito} alt="Carrito de compras" />

      {cantidadTotal > 0 && (
        <span>
          {cantidadTotal}
        </span>
      )}
    </Link>
  )
}

export default CartWidget