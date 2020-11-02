import React from 'react'
import{Link} from 'react-router-dom'
import Header from '../../components/Header'
import Title from '../../components/Title'
import "./styles.css"
import Data from "./fakeData.json"

const Home = () => {


    return(
        <React.Fragment>
            <Header></Header>
            <div className={'homePage'}>
                <Title name={"Home"}/> 
            </div>
            <div id ="pending-matches">
                <p>Associações Pendentes</p>
                <div name ="botao1">
                    <Link to={'alumnus'} >
                    <button className="perfis" type ="submit" >Perfis</button> 
                    </Link>
                </div>
                <div name="botao2">
                    <Link to={'empregador'}>
                    <button className="empregadores" type ="submit">Empregadores</button> 
                    </Link>
                </div>
            
            </div>
            <div id="statistics">
                <p>Estatísticas</p>
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

export default Home