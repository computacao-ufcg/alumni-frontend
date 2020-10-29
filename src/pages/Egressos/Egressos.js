import React from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'

const Egressos = () => {
    return(
        <React.Fragment>
            <Header></Header>
            <div className={'egressosPg'}>
                <Title name={"Egressos"}/> 
            </div>
        </React.Fragment>
    )
}

export default Egressos