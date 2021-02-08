import React, {useEffect} from 'react'
import { Pagination } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import ListAlumnus from './AssociacoesPendentes/ListAlumnus'
import Header from '../../components/Header'

import Title from '../../components/Title'
import { backend } from '../../services/api'


import './styles.css'
import { useState } from 'react';
import { Nav, Dropdown, SelectPicker } from 'rsuite';

import AssociacoesPendentes from './AssociacoesPendentes';
import Associados from './Associados'




const Alumnus = () => {
    const [dataAux, setDataAux] = useState([])
    const [data, setData] = useState(<Associados data={dataAux}/>)
    const [activeNav, setActiveNav] = useState('Associados')
   
    
    const handleNav = (eventKey) =>{
      if(eventKey === 'Associados'){
        setData(<Associados data={dataAux}/>)
      }else if( eventKey === 'AssociacoesPendentes'){
        setData(<AssociacoesPendentes handleData = {handleData}/>)
      }
      setActiveNav(eventKey)
    }
  
    const handleData = (elemento) =>{
      let list = dataAux
      list.push(elemento)
      setDataAux(list)
    }
  
      return(
          <React.Fragment>
              <Header></Header>
              <div className ={'MatchesPg'}>
                  <Title name={"Alumnus"}/> 
              </div>
              <div className= 'matchesContainer'>
                <Nav onSelect={handleNav} activeKey={activeNav} appearance={'tabs'}>
                  <Nav.Item eventKey={'Associados'}>Associados</Nav.Item>
                  <Nav.Item eventKey={'AssociacoesPendentes'}>Associações Pendentes</Nav.Item>
                </Nav>
                {data}
              </div>
          </React.Fragment>
      )
  
}

{/** 
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
**/}

export default Alumnus;