import React from 'react'

import Header from '../../components/Header'

import Title from '../../components/Title'


import './styles.css'

const Alumnus = () => {
    
    
    return(
        <React.Fragment>
            <Header></Header>
            <div className={'alumnusPerfis'}>
                <Title name={"Alumnus"}/> 
            </div>
            <div class={'possibleMatches'}>
                <p>Associações Possíveis</p>
                <button type= 'submit'>Associar</button>
            </div>
        </React.Fragment>
    )
}

export default Alumnus;