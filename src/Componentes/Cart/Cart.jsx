import { useContext, useState, useEffect } from "react";
import { CartContext } from "../Context/CartContext";
import CajaRegistradora from "../CajaRegistradora/CajaRegistradora";
import "./Cart.css";

const Cart = () => {

    const { carrito, quitarDelCarrito } = useContext(CartContext)
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        if (mensaje) {
            const timer = setTimeout(() => setMensaje(''), 3000)
            return () => clearTimeout(timer);
        }
    }, [mensaje])

    const handleQuitar = (id) => {
        quitarDelCarrito(id);
        setMensaje('Producto eliminado del carrito');
        setTimeout(() => setMensaje(''), 3000)
    }

    if (carrito.length === 0) {
        return (
            <div>
                {mensaje && <p className="mensajeCarrito">{mensaje}</p>}
                <p>El carrito está vavío</p>
            </div>
        )
    }

    return (
        <div>
            <h2> Mi Carrito</h2>
            {mensaje && <p className="mensajeCarrito">{mensaje}</p>}

            <div className="cartContainer">
                {carrito.map(producto => (
                    <div className="contenedorItem" key={producto.id}>
                        <h3>{producto.nombre}</h3>
                        <img src={producto.img} alt={producto.nombre} />
                        <p>Precio: ${producto.precio}</p>
                        <p>Cantidad: {producto.cantidad}</p>
                        <p>Subtotal: ${producto.precio * producto.cantidad}</p>
                        <p>ID:{producto.id}</p>
                        <button onClick={() => handleQuitar(producto.id)}>Quitar del Carrito</button>
                    </div>
                ))}
            </div>
            <CajaRegistradora />
        </div>
    )
}

export default Cart
