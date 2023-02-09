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
        <div className="footerSection">
          <h3 className='footerMenuTitle'>Categorías</h3>
          <ul className='footerSectionMenu'>
              <li><Link className='menuItem' to="/division/a">Primera División</Link></li>
              <li><Link className='menuItem' to="/division/b">Primera B Nacional</Link></li>
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
