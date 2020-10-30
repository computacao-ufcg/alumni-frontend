import React from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'
import Data from "./fakeData.json"

const Egressos = () => {
    return(
        <React.Fragment>
            <Header></Header>
            <div className={'egressosPg'}>
                <Title name={"Egressos"}/>
                <div className = "posts">
                    {Data.map(post => {
                        return(
                            <>
                                <h4>{post.nome}</h4>
                                <p>{post.ano_conclusao}</p>
                                <p>{post.trabalho_atual}</p>
                                
                            </>
                        )   

                    })}
                </div> 
            </div>
        </React.Fragment>
    )
}

export default Egressos