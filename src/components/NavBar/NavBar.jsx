/* rfcd para activar snippets de react */
import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <header className="header">
      <h1 className="h1"><a href="#" className="a">Matias Fernandez</a></h1>
      <nav className="nav">
        <ul className="ul">
          <li className="li"><a href="#inicio" title='Inicio' className="a">Inicio</a></li>
          <li className="li"><a href="#works" title='Trabajos' className="a">Trabajos</a></li>
          <li className="li"><a href="#about" title='Contacto' className="a">Contacto</a></li>
        </ul>
      </nav>
    </header>     
  )
}

export default NavBar;