import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

function Footer() {
  return (
    <footer className='footer'>
      <div className='footerInfo'>
        <div className="footerSection">
          <h3 className='footerMenuTitle'>Contacto</h3>
          <ul className='footerSectionMenu'>
              <li className='footerMenuItem'>ventas@alianzasport.com.ar</li>
              <li className='footerMenuItem'>(264)5736450</li>
              <li className='footerMenuItem'>República del Libano 147 (o)</li>
              <li className='footerMenuItem'>Lunes a Viernes 8 a 21hs</li>
          </ul>
        </div>
        <div className="footerSection" style={{width: "40%"}}>
          <h3 className='footerMenuTitle'>Marcas</h3>
          <ul className='footerSectionMenu' style={{height: "120px", flexWrap: "wrap"}}>
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
          </ul>
        </div>
        <div className="footerSection">
          <h3 className='footerMenuTitle'>Seguinos</h3>
          <ul className='footerSectionMenu row'>
              <li className='footerMenuItem'><a href="https://facebook.com" target="_blank" rel="noreferrer"><img className='socialIcon' src="./img/social/face.png" alt="" /></a></li>
              <li className='footerMenuItem'><a href="https://instagram.com" target="_blank" rel="noreferrer"><img className='socialIcon' src="./img/social/insta.png" alt="" /></a></li>
              <li className='footerMenuItem'><a href="https://twitter.com" target="_blank" rel="noreferrer"><img className='socialIcon' src="./img/social/twitter.png" alt="" /></a></li>
          </ul>
        </div>
      </div>
      <div className='footerRights'>
          <p>Alianza Sport © 2023 | Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
