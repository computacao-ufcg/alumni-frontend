import React from 'react'

import Header from '../../components/Header'

import Title from '../../components/Title'

import './styles.css'

const Empregador = () => {
    
    return(
        <React.Fragment>
            <Header></Header>
            <div className ={'mempregadorPg'}>
                <Title name={"Empregador"}/> 
            </div>
            <div className ={'selectBoxes'}>
                <select>
                    <option disabled selected>Setor</option>
                    <option value="">Público</option>
                    <option value="">Privado</option>
                </select>
                <select>
                    <option disabled selected>Tipo</option>
                    <option value="">Empresa</option>
                    <option value="">Indústria</option>
                    <option value="">Universidade</option>
                    <option value="">Terceiros</option>
                </select>
                <button type='submit'>Associar</button>
            </div>
        </React.Fragment>
    )
}

export default Empregador;