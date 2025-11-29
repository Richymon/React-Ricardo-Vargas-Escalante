import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (

        <header>
            <NavLink to="/">
                <h1>Tienda en linea - Proyecto React</h1>
            </NavLink>

            <nav>
                <ul>
                    <li>
                        <NavLink to="/categorias/todos">Almacen</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categorias/lacteos">Lacteos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categorias/bebidas">Bebidas</NavLink>
                    </li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar