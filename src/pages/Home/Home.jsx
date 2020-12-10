import React, {useState,useEffect} from 'react'
import{Link} from 'react-router-dom'
import Header from '../../components/Header'
import Title from '../../components/Title'
import GraphGenero from './GraphGenero.jsx'
import GraphSetor from './GraphSetor.jsx'
import GraphLocal from './GraphLocal.jsx'
import GraphProfissoes from './GraphProfissoes.jsx'
import { backend } from '../../services/api'

import "./styles.css"


const Home = (props) => { 

    const [dataAux, setDataAux] = useState([])
    const [page, setPage] = useState(0)
   
    useEffect(()=>{
        handleProfile()

    },[])

    const handleProfile = async () =>{
        let query = 'statistics?courseName=COMPUTING_SCIENCE&level=UNDERGRADUATE' 
        const res = await backend.get(query,{headers:{'Authentication-Token': localStorage.getItem('token')}})
        .then(res => {
            console.log(res)
            setDataAux(res.data)

        })
        .catch(err =>{
            console.log(err)
        })
    }
    
    
    

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