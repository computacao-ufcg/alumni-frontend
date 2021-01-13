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
    const [possibleMatches, setPossibleMatches] = useState([])
    const [selectAluno, setSelectAluno] = useState('Faça a Associação')
    const [selectedRegistration, setSelectedRegistration] = useState('')
    const [selectedProfile, setSelectedProfile] = useState('')

    useEffect(()=>{
        handleProfile(page)
    },[])

    const handleProfile = async (page) =>{
        let query = 'match/pending/' + page
        backend.get(query,{ headers:{'Authentication-Token': localStorage.getItem('token')} })
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
        setSelectedRegistration(value.alumnus.registration)
        setPossibleMatches(value.possibleMatches)
        handleSelect(value.possibleMatches)
    }

    const handleSelect = (data) =>{
        let listAux = []
        data.forEach((e,index)=>{
            let item = {
                'label': e.profile.fullName,
                'value': index,
                'role': 'default'
            }
            listAux.push(item)
        })
        setDataSelect(listAux)
    }

    const handleSelectProfile = (index) => {
        const match = {
            'registration': selectedRegistration,
            'linkedinId': possibleMatches[index].profile.linkedinId
        }

        setSelectedProfile(match)
    }

    const handleMatch = async () =>{
        const reqBody = {
            registration: selectedProfile.registration,
            linkedinId: selectedProfile.linkedinId,
        }

        const query = `/match?registration=${selectedProfile.registration}&linkedinId=${selectedProfile.linkedinId}`
        
        try {
            const res = await backend.post(query, {}, { headers: { 
                'Authentication-Token': localStorage.getItem('token'),
                'Content-Type': 'application/json; charset=UTF-8'
            }})
            console.log(res)
        } catch (err) {
            console.log(err.response)
        }
    }

    return (
        <div>
            <div className={'mainAssociacoes'}>
                <div>
                <ListAlumnus handleAlumnus={handleAlumnus} listData={dataAux.content ? dataAux.content :[]}/>
                    <hr></hr>
                </div>
                <div className={'possivelMatch'}>
                    <Input style={{width:600}} disabled placeholder = {selectAluno}/>
                    <hr></hr>
                    <SelectPicker data={dataSelect} style={{ width: 600 }} onSelect={i => handleSelectProfile(i)} />
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