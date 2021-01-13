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
        backend.get('match/list/' + page, {headers:{'Authentication-Token': localStorage.getItem('token')}})
        .then(res =>{
            setData(res.data.content)
            setDataMaster(res)
            console.log(res)
            console.log(res.data)
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
                    data={data}
                    onRowClick={data => {
                        console.log(data);
                    }}
                    >
                    <Column width={300} >
                        <HeaderCell >Nome do Egresso</HeaderCell>
                        <Cell dataKey="registration">
                    
                        </Cell>
                    </Column>
                    <Column width={120} >
                        <HeaderCell>Linkedin</HeaderCell>
    
                        <Cell>
                        {rowData => {
                            return (
                            <span>
                                <a target={'_blank'} href={rowData.linkedinId}>Link</a> 
                            
                            </span>
                            );
                        }}
                        </Cell>
                    </Column>
                    <Column width={120} >
                        <HeaderCell >Deletar Associação</HeaderCell>
                        <Cell dataKey="registration">
                    
                        </Cell>
                    </Column>
                    </Table>
                </div>
            </div>
        ) 

}
export default Associados