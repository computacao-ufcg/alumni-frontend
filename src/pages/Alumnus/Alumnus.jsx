import React, {useEffect} from 'react'
import { Pagination } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import ListAlumnus from './ListAlumnus'
import Header from '../../components/Header'

import Title from '../../components/Title'
import { backend } from '../../services/api'

import './styles.css'
import { useState } from 'react';



const Alumnus = () => {
    const [data, setData] = useState([])
    const [page, setPage] = useState(0)

    useEffect(()=>{
        handleProfile(page)

    },[])

    const handleProfile = async (page) =>{
        let query = 'linkedin/entries/' + page
        const res = await backend.get(query,{headers:{'Authentication-Token': localStorage.getItem('token')}})
        .then(res => {
            console.log(res)
            setData(res.data)

        })
        .catch(err =>{
            console.log(err)
        })
    }
     const handlePage = (eventKey) =>{
        setPage(eventKey-1)
        console.log(eventKey)
        handleProfile(eventKey-1)
     }

    return(
        <React.Fragment>
            <Header></Header>
            <div className={'alumnusPerfis'}>
                <Title name={"Alumnus"}/> 
            </div>
            <div className={'alumnusPossibleMatches'}>
                <p>Associações Possíveis</p>
                <div className={'alumnusList'}>
                    <ListAlumnus listData={data.content ? data.content :[]}/>
                    <hr></hr>
                    <Pagination
                    pages={data.totalPages ? data.totalPages :0}
                    maxButtons={5}
                    onSelect ={handlePage}
                    activePage={page+1}
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    />
                    
                   {/* <div className={'alumnusSelectBoxes'}>
                    
                    <Egresso data={data} placeholder={'Egressos'} style={{width:500}}/>
                    <Match data ={data2} placeholder={'Possíveis Matches'} style ={{width:500}}/>
                    </div>*/}
                </div>
                <button type= 'button'>Associar</button>
            </div>
        </React.Fragment>
    )
}

export default Alumnus;