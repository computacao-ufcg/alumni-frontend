import React from 'react'
import {SelectPicker as Setor}  from 'rsuite'
import {SelectPicker as Tipo}  from 'rsuite'
import 'rsuite/dist/styles/rsuite-default.css';
import Header from '../../components/Header'
import Title from '../../components/Title'
import Classificados from './Classificados'
import Desclassificados from './Desclassificados'
import { Nav, Dropdown } from 'rsuite';

import './styles.css'
import { useState } from 'react';

const Empregador = () => {
  
  const [dataAux, setDataAux] = useState([])
  const [data, setData] = useState(<Classificados data={dataAux}/>)
  const [activeNav, setActiveNav] = useState('Classificados')
 
  
  const handleNav = (eventKey) =>{
    if(eventKey === 'Classificados'){
      setData(<Classificados data={dataAux}/>)
    }else if( eventKey === 'Desclassificados'){
      setData(<Desclassificados handleData = {handleData}/>)
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
            <div className ={'mempregadorPg'}>
                <Title name={"Empregador"}/> 
            </div>
            <div className= 'empregadorContainer'>
              <Nav onSelect={handleNav} activeKey={activeNav} appearance={'tabs'}>
                <Nav.Item eventKey={'Classificados'}>Classificados</Nav.Item>
                <Nav.Item eventKey={'Desclassificados'}>Não Classificados</Nav.Item>
              </Nav>
              {data}
            </div>
        </React.Fragment>
    )
}

export default Empregador;