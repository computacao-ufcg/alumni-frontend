import React, {useState,useEffect} from 'react'
import 'rsuite/dist/styles/rsuite-default.css';
import ListAlumnus from './ListAlumnus'
import { backend } from '../../../services/api'

import './styles.css'
import {Pagination, SelectPicker, Input, InputGroup } from 'rsuite'



const AssociacoesPendentes = (props) => {
    const [dataAux, setDataAux] = useState([])
    const [page, setPage] = useState(0)
    const [dataSelect, setDataSelect] = useState([])
    const [selectEmpresa, setSelectEmpresa] = useState('Faça a Associação')

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
        handleSelect(value.possibleMatches[20])
    }

    const handleSelect = (data) =>{
        let listAux = []
        data.map((e,index)=>{
            let item = {
                'label': e.fullName,
                'value': index,
                'role': 'default'
            }
            listAux.push(item)
        })
        setDataSelect(listAux)
    }

    const handleMatch = () =>{
        
    }

    return (
        <div>
            <div className={'mainAssociacoes'}>
                <div>
                <ListAlumnus handleAlumnus={handleAlumnus} listData={dataAux.content ? dataAux.content :[]}/>
                    <hr></hr>
                </div>
                <div className={'possivelMatch'}>
                    <Input style={{width:600}} disabled placeholder = {selectEmpresa}/>
                    <hr></hr>
                    <SelectPicker  data={dataSelect} style={{ width: 600 }} />
                    <hr></hr>
                    <button onClick={handleMatch}>Associar</button>
                </div>
            </div>
            <div className ={'paginacao'}>
                <Pagination
                    pages={dataAux.totalPages ? dataAux.totalPages :0}
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
    </div>
    )
}

export default AssociacoesPendentes;