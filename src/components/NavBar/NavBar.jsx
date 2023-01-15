
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <nav className="nav">
            <div className="container">
                <Link to="/"><img className="logo" src="/img/logo.png" alt="logotipo" /></Link>
                <div className="menu">
                    <ul>
                        <li><Link className="menuItem" to="/division/a">PRIMERA DIVISIÓN</Link></li>
                        <li><Link className="menuItem" to="/division/b">PRIMERA B NACIONAL</Link></li>
                    </ul>
                    <form className="searchForm" role="search">
                        <input className="searchInput" type="search" placeholder="Buscar" aria-label="Buscar"/>
                        <button className="searchButton" type="submit"><img className="searchImg" src="/img/lupa.png" alt="" /></button>
                    </form>
                </div>
            <CartWidget />
            </div>
        </nav>
    );
}