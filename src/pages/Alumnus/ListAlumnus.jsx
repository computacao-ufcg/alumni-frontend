import React from 'react'
import './styles.css'
import {Table} from 'rsuite'
import { useState } from 'react';
const { Column, HeaderCell, Cell } = Table;


const ListAlumnus =(props) =>{

    return(
        <div className={'listAlumnus'}>
           {/* {props.listData.map((aluno,index)=>
            <div key={index}>
                <button onClick={(e)=>{
                    e.preventDefault()
                    props.handleAlumnus(index)
                }}>{aluno.name}</button>
            </div>
            )}*/}
            <div className={'classificados'}>
            <Table
            height={480}
            width={800}
            data={props.listData}
            onRowClick={data => {
                console.log(data);
            }}
            >
            <Column width={300} >
                <HeaderCell >Nome do Egresso</HeaderCell>
                <Cell dataKey={'name'} >
                {rowData => {
                    function handleAction(event) {
                    props.handleAlumnus(event.target.getAttribute('index'))
                    }
                    return (
                        <a index={rowData.index} onClick={handleAction}>{rowData.name}</a>
                    );
                    }}
                </Cell>
            </Column>
            </Table>
        </div>

        </div>
    )
}
export default ListAlumnus