import React, {useEffect} from 'react'
import { Pagination } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import ListAlumnus from './ListAlumnus'
import Header from '../../components/Header'

import Title from '../../components/Title'
import { backend } from '../../services/api'


import './styles.css'
import { useState } from 'react';

import {SelectPicker}  from 'rsuite'







const Alumnus = () => {
    const [dataAux, setDataAux] = useState([])
    const [page, setPage] = useState(0)
    const [dataSelect, setDataSelect] = useState([])

    useEffect(()=>{
        handleProfile(page)

    },[])

    const handleProfile = async (page) =>{
        let query = 'match/pending/' + page
        const res = await backend.get(query,{headers:{'Authentication-Token': localStorage.getItem('token')}})
        .then(res => {
            console.log(res)
            setDataAux(res.data)

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

    const handleAlumnus = (value) =>{
        console.log(value)
        setDataSelect(value.possibleMatches[20])
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
                    
                    <ListAlumnus handleAlumnus={handleAlumnus} listData={dataAux.content ? dataAux.content :[]}/>
                    
                    <div className={'alumnusSelect'}>
                        <SelectPicker block data={dataSelect}></SelectPicker>
                        <button type= 'button'>Associar</button>
                    </div>
                </div>
            
            </div>
        </React.Fragment>
    )
}

export default Alumnus;