import React from 'react'

function MainContainer() {
  return (
    <main className="main">
        
        <div className="seccion" id="inicio">
            <div className="circulos">
                <div className="circulo"></div>
                <div className="circulo"></div>
                <div className="circulo"></div>
                <div className="circulo"></div>
            </div>
            <section className="section">
                <h2 className="h2">Matias Fernandez Almeda</h2>
                <h3 className="h3">Desarrollador Web Frontend</h3>
            </section>
        </div>

        <section className="seccion" id="works">
            <h2 className="h2">Trabajos</h2>
            <p className="p">Aqui te preseto mis proyectos</p>

            <div className="grid">
                <article className="article">
                    <a href="#" title="Trabajo1">
                        <img src="#" alt="Imagen" className="img" loading="lazy" />
                        <h4 className="h4">Nombre del trabajo</h4>
                    </a>
                </article>
            </div>
        </section>

        <section className="seccion" id="about">
            <h2 className="h2">Sobre mi</h2>
            <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, natus aliquid consequatur veritatis dicta maxime.</p>
            <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, natus aliquid consequatur veritatis dicta maxime.</p>
            <p className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, natus aliquid consequatur veritatis dicta maxime.</p>
        </section>

        {/* Hacer los componentes de cada uno de los contenedores y ordenarlos bien */}

        
    </main>
  )
}

export default MainContainer