import React from 'react'
import './styles.css'


const ListAlumnus =(props) =>{
    return(
        <div className={'listAlumnus'}>
            {props.listData.map((aluno,index)=>
            <div key={index}>
                <button onClick={(e)=>{
                    e.preventDefault()
                    props.handleAlumnus(index)
                }}>{aluno.name}</button>
            </div>
            )}
        </div>
    )
}
export default ListAlumnus