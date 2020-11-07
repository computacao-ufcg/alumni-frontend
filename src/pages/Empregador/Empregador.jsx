import React from 'react'
import {SelectPicker as Setor}  from 'rsuite'
import {SelectPicker as Tipo}  from 'rsuite'
import 'rsuite/dist/styles/rsuite-default.css';
import Header from '../../components/Header'
import Title from '../../components/Title'

import './styles.css'

const Empregador = () => {
   
    const data =[
        {
          "label": "Público",
          "value": "Público",
          "role": "Master"
        },
        {
          "label": "Privado",
          "value": "Privado",
          "role": "Master"
        }
    ]

    const data2 =[
        {
          "label": "Empresa",
          "value": "Empresa",
          "role": "Master"
        },
        {
          "label": "Indústria",
          "value": "Indústria",
          "role": "Master"
        },
        {
          "label": "Universidade",
          "value": "Universidade",
          "role": "Master"
        },
        {
            "label": "Terceiros",
            "value": "Terceiros",
            "role": "Master"
          }
    ]

    return(
        <React.Fragment>
            <Header></Header>
            <div className ={'mempregadorPg'}>
                <Title name={"Empregador"}/> 
            </div>
            <div className= 'empregadorContainer'>
                <div className ={'selectBoxes'}>
                    <Setor data={data} placeholder={'Setor'} style={{width:500}}/>
                    <Tipo data={data} placeholder={'Tipo'} style={{width:500}}/>
                </div>
                <button type='button'>Associar</button>
            </div>
        </React.Fragment>
    )
}

export default Empregador;