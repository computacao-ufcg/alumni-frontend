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
   
  const [data, setData] = useState(<Classificados/>)
  const [activeNav, setActiveNav] = useState('Classificados')
  
  const handleNav = (eventKey) =>{
    if(eventKey === 'Classificados'){
      setData(<Classificados/>)
    }else if( eventKey === 'Desclassificados'){
      setData(<Desclassificados/>)
    }
    setActiveNav(eventKey)
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