import React, {useState,useEffect} from 'react'
import{Link} from 'react-router-dom'
import Header from '../../components/Header'
import Title from '../../components/Title'
import GraphStatistics from './GraphStatistics.jsx'
import { backend } from '../../services/api'

import "./styles.css"


const Home = (props) => { 

    const [dataAux, setDataAux] = useState([])
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(true)
   
    useEffect(()=>{
        handleProfile()

    },[])

    const handleProfile = async () =>{
        setLoading(true)
        let query = 'statistics?courseName=COMPUTING_SCIENCE&level=UNDERGRADUATE' 
        const res = await backend.get(query,{headers:{'Authentication-Token': localStorage.getItem('token')}})
        .then(res => {
            console.log(res)
            setDataAux(res.data)
            setLoading(false)

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
                <div className={'containerGraph'}>
                    <div className={"grafico"}>
                        {loading ? null : 
                            <GraphStatistics data={dataAux}></GraphStatistics>
                        }
                    </div>  
                </div>      
            </div> 
            
        </React.Fragment>
    )
}

export default Home;