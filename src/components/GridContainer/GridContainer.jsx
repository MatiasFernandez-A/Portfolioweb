import React from 'react'
import './GridContainer.css'


function GridContainer() {
    return (
        <div className="grid">
            <article className="article">
                <a className="a" href="#" title="Trabajo1">
                    <figure className="figure">
                        <img src="#" alt="Imagen" className="img" loading="lazy" />
                    </figure>
                    <h4 className="h4">Nombre del trabajo</h4>
                </a>
            </article>
            <article className="article">
                <a className="a" href="#" title="Trabajo1">
                    <figure className="figure">
                        <img src="#" alt="Imagen" className="img" loading="lazy" />
                    </figure>
                    <h4 className="h4">Nombre del trabajo</h4>
                </a>
            </article>

        </div>
    )
}

export default GridContainer