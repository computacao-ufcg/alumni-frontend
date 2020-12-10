import React from 'react'
import './styles.css'
import {Table} from 'rsuite'
import { useState } from 'react';
const { Column, HeaderCell, Cell } = Table;


const ListAlumnus =(props) =>{

    return(
        <div className={'listAlumnus'}>
        
            <div className={'associados'}>
            <Table
            height={480}
            width={800}
            data={props.listData}
            onRowClick={data => {
                props.handleAlumnus(data)
            }}
            >
            <Column width={300} >
                <HeaderCell >Nome do Egresso</HeaderCell>
                <Cell dataKey={'fullName'} >
                    {rowData => {
                        return (
                            <a index={rowData.index}>{rowData.alumnus.fullName}</a>
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