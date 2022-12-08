import React from 'react'
/* rfcd para activar snippets de react */
import AboutMeContainer from '../AboutMeContainer/AboutMeContainer'
import InicioContainer from '../InicioContainer/InicioContainer'
import TecnologiasContainer from '../TecnologiasContainer/TecnologiasContainer'
import WorksContainer from '../WorksContainer/WorksContainer'
import './MainContainer.css'
import '../CursorContainer/CursorContainer.js'


function MainContainer() {
    return (
        <main className="main">
            <div id='cursor'></div>
            <InicioContainer />
            <WorksContainer />
            <TecnologiasContainer/>
            <AboutMeContainer />

        </main>
    )
}

export default MainContainer;
