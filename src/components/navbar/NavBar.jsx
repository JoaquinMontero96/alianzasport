import CartWidget from "../cartwidget/CartWidget";
import "./NavBar.css";

export default function NavBar(){
    return (
        <nav className="nav">
            <div className="container">
                <a href=""><img className="logo" src="/img/logo.png" alt="logotipo" /></a>
                <div className="menu">
                    <ul>
                        <li><a className="menuItem" href="/">MARCA</a></li>
                        <li><a className="menuItem" href="/">DIVISION</a></li>
                        <li><a className="menuItem" href="/">COLOR</a></li>
                        <li><a className="menuItem" href="/">PROVINCIA</a></li>
                    </ul>
                    <form className="searchForm" role="search">
                        <input className="searchInput" type="search" placeholder="Buscar" aria-label="Buscar"/>
                        <button className="searchButton" type="submit"><img className="searchImg" src="/img/lupa.png" alt="" /></button>
                    </form>
                </div>
                <CartWidget/>
            </div>
        </nav>
    );
}