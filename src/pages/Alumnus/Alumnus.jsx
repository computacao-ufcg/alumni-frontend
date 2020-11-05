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
                    <div className="selectBoxes">
                    <select>
                        <option disabled selected>Aluno</option>
                        <option value="">Lucas Gabriel</option>
                        <option value="">Ana Beatriz</option>
                    </select>
                    <select>
                        <option disabled selected>Possível Match</option>
                        <option value="">Lucas Gabriel</option>
                        <option value="">Lucas Barros</option>
                        <option value="">Lucas Souto</option>
                    </select>
                    </div>
                <button type= 'submit'>Associar</button>
            </div>
        </React.Fragment>
    )
}

export default Alumnus;