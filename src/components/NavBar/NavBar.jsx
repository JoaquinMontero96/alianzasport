
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavBar(){
    const [active, setActive] = useState(false);
    function showSubMenu() {
        setActive(true);
    }
    function hideSubMenu() {
        setActive(false);
    }

    return (
        <nav className="nav">
            <div className="container">
                <Link to="/"><img className="logo" src="/img/logo.png" alt="logotipo" /></Link>
                <div className="menu">
                    <ul onMouseOver={showSubMenu} onMouseOut={hideSubMenu}>
                        <li className="menuItem">MARCA</li>
                        <div className={active ? 'subMenuActive' : 'subMenu'}>
                            <li><Link className="menuItem" to="/marca/adidas">ADIDAS</Link></li>
                            <li><Link className="menuItem" to="/marca/nike">NIKE</Link></li>
                            <li><Link className="menuItem" to="/marca/kappa">KAPPA</Link></li>
                            <li><Link className="menuItem" to="/marca/retiel">RETIEL</Link></li>
                            <li><Link className="menuItem" to="/marca/lyon">LYON</Link></li>
                            <li><Link className="menuItem" to="/marca/umbro">UMBRO</Link></li>
                            <li><Link className="menuItem" to="/marca/ilossso">IL OSSSO</Link></li>
                            <li><Link className="menuItem" to="/marca/givova">GIVOVA</Link></li>
                            <li><Link className="menuItem" to="/marca/adhoc">ADHOC</Link></li>
                            <li><Link className="menuItem" to="/marca/hummel">HUMMEL</Link></li>
                            <li><Link className="menuItem" to="/marca/mitre">MITRE</Link></li>
                            <li><Link className="menuItem" to="/marca/fiume">FIUME</Link></li>
                            <li><Link className="menuItem" to="/marca/kdy">KDY</Link></li>
                            <li><Link className="menuItem" to="/marca/tbs">TBS</Link></li>
                            <li><Link className="menuItem" to="/marca/puma">PUMA</Link></li>
                            <li><Link className="menuItem" to="/marca/errea">ERREA</Link></li>
                            <li><Link className="menuItem" to="/marca/cmd">CMD</Link></li>
                            <li><Link className="menuItem" to="/marca/reusch">REUSCH</Link></li>
                            <li><Link className="menuItem" to="/marca/sport2000">SPORT 2000</Link></li>
                            <li><Link className="menuItem" to="/marca/ruge">RUGE</Link></li>
                        </div>
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