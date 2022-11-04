import React from 'react'
import CirclesContainer from '../CirclesContainer/CirclesContainer'
import './InicioContainer.css'


function InicioContainer() {
  return (
    <div className="seccion" id="inicio">
            <CirclesContainer/>
            <section className="section">
                <h2 className="h2">Matias Fernandez Almeda</h2>
                <h3 className="h3">Desarrollador Web Frontend</h3>
            </section>
        </div>
  )
}

export default InicioContainer