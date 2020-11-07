import React, {useEffect} from 'react'
import {SelectPicker as Egresso}  from 'rsuite'
import {SelectPicker as Match}  from 'rsuite'
import 'rsuite/dist/styles/rsuite-default.css';
import Header from '../../components/Header'

import Title from '../../components/Title'
import { backend } from '../../services/api'


import './styles.css'

const Alumnus = () => {
    const data =[
        {
          "label": "Eugenia",
          "value": "Eugenia",
          "role": "Master"
        },
        {
          "label": "Kariane",
          "value": "Kariane",
          "role": "Master"
        },
        {
          "label": "Louisa",
          "value": "Louisa",
          "role": "Master"
        }
    ]
    const data2 =[
        {
          "label": "juju",
          "value": "gg",
          "role": "Master"
        },
        {
          "label": "Kariane",
          "value": "Kariane",
          "role": "Master"
        }
       
    ]

    useEffect(()=>{
        handleProfile()

    })

    const handleProfile = async () =>{
        let query = 'match/pending'
        const res = await backend.get(query,{headers:{'Authentication-Token': localStorage.getItem('token')}})
        .then(res => {
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return(
        <React.Fragment>
            <Header></Header>
            <div className={'alumnusPerfis'}>
                <Title name={"Alumnus"}/> 
            </div>
            <div className={'alumnusPossibleMatches'}>
                <p>Associações Possíveis</p>
                    <div className={'alumnusSelectBoxes'}>
                    
                    <Egresso data={data} placeholder={'Egressos'} style={{width:500}}/>
                    <Match data ={data2} placeholder={'Possíveis Matches'} style ={{width:500}}/>
                    </div>
                <button type= 'button'>Associar</button>
            </div>
        </React.Fragment>
    )
}

export default Alumnus;