import React from 'react'
import AboutMeContainer from '../AboutMeContainer/AboutMeContainer'
import InicioContainer from '../InicioContainer/InicioContainer'
import WorksContainer from '../WorksContainer/WorksContainer'
import './MainContainer.css'


function MainContainer() {
    return (
        <main className="main">
            <InicioContainer />
            <WorksContainer />
            <AboutMeContainer />
        </main>
    )
}

export default MainContainer