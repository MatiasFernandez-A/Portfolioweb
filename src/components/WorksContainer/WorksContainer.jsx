import React from 'react'
import GridContainer from '../GridContainer/GridContainer'
import './WorksContainer.css'



function WorksContainer() {
    return (
        <section className="seccion works" id="works">
            <h2 className="h2">Trabajos</h2>
            <p className="p">Aqui te preseto mis proyectos</p>
            <GridContainer />
        </section>
    )
}

export default WorksContainer