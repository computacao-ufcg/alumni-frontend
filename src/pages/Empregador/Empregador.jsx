import React from 'react'

import Header from '../../components/Header'

import Title from '../../components/Title'

import './styles.css'

const Empregador = () => {
    
    return(
        <React.Fragment>
            <Header></Header>
            <div className={'mempregadorPg'}>
                <Title name={"Empregador"}/> 
            </div>
        </React.Fragment>
    )
}

export default Empregador;