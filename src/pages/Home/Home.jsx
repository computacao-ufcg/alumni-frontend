import React from 'react'
import{Link} from 'react-router-dom'
import Header from '../../components/Header'
import Title from '../../components/Title'
import GraphGenero from './GraphGenero.jsx'
import GraphSetor from './GraphSetor.jsx'
import GraphLocal from './GraphLocal.jsx'
import GraphProfissoes from './GraphProfissoes.jsx'
import "./styles.css"


const Home = () => { 

    return(
        <React.Fragment>
            <Header></Header>
            <div className={'homePage'}>
                <Title name={"Home"}/> 
            </div>
            <div id ="pending-matches">
                <p>Associações Pendentes</p>
                <div className ={"botao1"}>
                    
                    <Link to={'alumnus'} >
                    <button className={"perfis"} type ="submit" >Perfis</button> 
                    </Link>
                </div>
                <div name="botao2">
                    <Link to={'empregador'}>
                    <button className={"empregadores"} type ="submit">Empregadores</button> 
                    </Link>
                </div>
                <div name="botao2">
                    <Link to={'egressos'}>
                    <button className={"egressos"} type ="submit">Linkedin</button> 
                    </Link>
                </div>
            
            </div>
            <div id="statistics">
                <p>Estatísticas</p>
                <div className = "container1">
                    <div className="setor">
                        <p>Setor de Trabalho</p>
                        <GraphSetor></GraphSetor>
                    </div>
                    <div className={"genero"}>
                        <p>Gênero</p>
                        <GraphGenero></GraphGenero> 
                    </div>  
                    
                </div> 
                <div className={"container2"}>
                    <div className="localTrabalho">
                        <p>País de Trabalho</p>
                        <GraphLocal></GraphLocal> 
                    </div>
                    <div className="Profissões">
                        <p>Profissões</p>
                        <GraphProfissoes></GraphProfissoes> 
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;