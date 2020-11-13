import React, {useEffect,useState} from 'react'
import {backend} from '../../../services/api'

const Classificados = () => {
    const [page, setPage] = useState(0)
    const [data, setData] = useState([])
    const [dataMaster, setDataMaster] = useState({})

    useEffect(()=>{
        handleClassificados()
    },[])

    const handleClassificados = async() =>{
        const res = await backend.get('employer/' + page,{headers:{'Authentication-Token': localStorage.getItem('token')}})
        .then(res =>{
            setData(res.content)
            setDataMaster(res)
            console.log(res)
        })
        .catch(err =>{
            console.log(err)

        })
    }

    return (
        <div>
            Classificados
        </div>
    )
}
export default Classificados
