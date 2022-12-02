import React from 'react'
import RedesContainer from '../RedesContainer/RedesContainer'
import './AboutMeContainer.css'


function AboutMeContainer() {
    return (
        <section className="seccion about" id="about">
            <h2 className="h2">Sobre mi</h2>
            <p className="p">Hola! Me llamo Matias Fernandez Almeda y soy desarrollador Web Frontend pero en carrera para ser desarrollador Web Full Stack</p>
            <p className="p">Empece en este mundo intrigado por la programacion, animaciones y sobre todo por el hecho de crear webs muy complejas de la nada, llevando el diseño y desarrollo de la mano para crear e innovar</p>
            <p className="p">A continuacion te dejo mi contacto y varios de mis proyectos ya terminados.</p>
            <RedesContainer />
        </section>
    )
}

export default AboutMeContainer