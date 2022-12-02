import React from 'react'
import './InicioContainer.css'
function InicioContainer() {
  return (
    <div className="seccion" id="inicio">
      <section className="section info">
        <h2 className="h2">Matias Fernandez</h2>
        <h3 className="h3">Frontend Developer</h3>

        <ul className="ul">
          <li className="li">
            <a href="https://github.com/MatiasFernandez-A" className="a" title="Github">Visita mi GitHub</a>
          </li>
          <li className="li">
            <a href="https://www.linkedin.com/in/matiasfernandeza/" className="a" title="LinkedIn">Visita mi Linkedin</a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default InicioContainer