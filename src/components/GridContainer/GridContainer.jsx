import React from 'react'
import './GridContainer.css'
import imagenChica from '../../assets/images/chica.jpg'
import imagenChico from '../../assets/images/chico.jpg'



function GridContainer() {
    return (
        <div className="grid">
            <article className="article">
                <a className="a" href="#" title="Trabajo1">
                    <figure className="figure">
                        <img src={imagenChica} alt="Imagen" className="img" loading="lazy" />
                    </figure>
                    <h4 className="h4">Nombre del trabajo</h4>
                </a>
            </article>
            <article className="article">
                <a className="a" href="#" title="Trabajo1">
                    <figure className="figure">
                        <img src={imagenChico} alt="Imagen" className="img" loading="lazy" />
                    </figure>
                    <h4 className="h4">Nombre del trabajo</h4>
                </a>
            </article>

        </div>
    )
}

export default GridContainer