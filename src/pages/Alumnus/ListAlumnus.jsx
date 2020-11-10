import React from 'react'


const ListAlumnus =(props) =>{
    return(
        <div>
            {props.listData.map((aluno,index)=>
            <div key={index}>
                {aluno.fullName}
            </div>
            )}
        </div>
    )
}
export default ListAlumnus