import React, {useState,useEffect} from 'react'
import './styles.css'
import {Table, Pagination, SelectPicker, Input,} from 'rsuite'
import {backend} from '../../../services/api'

const { Column, HeaderCell, Cell } = Table;

const Associados = (props) => {
    const [page, setPage] = useState(0)
    const [data, setData] = useState([])
    const [dataMaster, setDataMaster] = useState({})
    const [selectAluno, setSelectAluno] = useState('Selecione o Egresso para deletar')
    
    useEffect(()=>{
        handleClassificados()
    },[])

    const handleClassificados = async() =>{
        const res = await backend.get('match/list/' + page,{headers:{'Authentication-Token': localStorage.getItem('token')}})
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
            <div className={'associados'}>
                <Table
                height={480}
                width={800}
                data={props.data}
                onRowClick={data => {
                    console.log(data);
                }}
                >
                <Column width={300} >
                    <HeaderCell >Nome do Egresso</HeaderCell>
                    <Cell dataKey="fullName">
                
                    </Cell>
                </Column>
                <Column width={120} >
                    <HeaderCell>Linkedin</HeaderCell>

                    <Cell>
                    {rowData => {
                        return (
                        <span>
                            <a target={'_blank'} href={rowData.linkedinID}>Link</a> 
                        
                        </span>
                        );
                    }}
                    </Cell>
                </Column>
                </Table>
            </div>
        </div>
    )
}
export default Associados