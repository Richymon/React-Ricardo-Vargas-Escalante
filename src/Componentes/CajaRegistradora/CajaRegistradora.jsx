import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import "./CajaRegistradora.css"

const CajaRegistradora = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)


    if (carrito.length === 0) {
        return <p>Precio toal: $0</p>
    }

    return (
        <aside className="caja">
            <h4>Resumen de la compra</h4>
            <ul>
                {carrito.map(producto => (
                    <li key={producto.id}>
                        {producto.nombre} (x{producto.cantidad}): ${producto.precio * producto.cantidad}
                    </li>
                ))}
            </ul>
            <h5>Precio total: ${precioTotal}</h5>
            <button className="botonCaja">Comprar</button>
            <button className="botonVaciar" onClick={vaciarCarrito}>Vaciar el Carrito</button>

        </aside>
    )
}

export default CajaRegistradora