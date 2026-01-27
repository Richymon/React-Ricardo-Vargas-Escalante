import { createContext, useEffect, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(() => {
        const carritoGuardado = localStorage.getItem("carrito")
        return carritoGuardado ? JSON.parse(carritoGuardado) : []
    });

    const [productosStock, setProductosStock] = useState({});

    //agregar al carrito
    const agregarAlCarrito = (producto) => {

        if (producto.stock <= 0) return;

        const productoEnCarrito = carrito.find(item => item.id === producto.id)

        if (productoEnCarrito) {
            const carritoActualizado = carrito.map(item =>
                item.id === producto.id
                    ? { ...item, cantidad: item.cantidad + 1, stock: item.stock - 1 }
                    : item
            )
            setCarrito(carritoActualizado)
        } else {
            setCarrito([...carrito, { ...producto, cantidad: 1, stock: producto.stock - 1 }]);
        }
    };


    //quitar del carrito
    const quitarDelCarrito = (id) => {
        const producto = carrito.find(item => item.id === id)
        if (!producto) return;

        if (producto.cantidad === 1) {
            setCarrito(carrito.filter(item => item.id !== id))
        } else {
            setCarrito(
                carrito.map(item =>
                    item.id === id
                        ? { ...item, cantidad: item.cantidad - 1, stock: item.stock + 1 }
                        : item
                )
            )
        }
    }

    //vaciar el carrito
    const vaciarCarrito = () => {
        setCarrito([])
    }

    //numero de articulos del carrito
    const cantidadTotal = carrito.reduce(
        (acc, producto) => acc + producto.cantidad, 0)

    //precio total en el carrito
    const precioTotal = carrito.reduce(
        (acc, producto) => acc + producto.precio * producto.cantidad, 0)

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    return (
        <CartContext.Provider value={{
            carrito,
            agregarAlCarrito,
            cantidadTotal,
            precioTotal,
            quitarDelCarrito,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}