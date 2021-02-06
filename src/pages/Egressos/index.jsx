import React from 'react'
import Header from '../../components/Header'
import Title from '../../components/Title'
import {useState,useEffect} from 'react'
import { backend } from '../../services/api'
import ListEgressos from './listEgressos'
import { Pagination } from 'rsuite';
import './style.css'

const Egressos = () =>{

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
        <div className ={'linkedinPg'}>
            <Title name={"Linkedin"}/> 
        </div>
        <div className={'listEgressos'}>
            <ListEgressos listData={data.content ? data.content :[]}/>
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
        </div>
    </React.Fragment>
    )
}
export default Egressos