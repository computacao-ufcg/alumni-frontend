import React, {useState} from 'react'
import Title from '../../components/Title'
import Header from '../../components/Header'
import{Link} from 'react-router-dom'
import './styles.css'

const Login = () =>{ 
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")    
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${name}`)
        alert(`Submitting Password ${password}`)
    }

    return(
    <>
        <Header></Header>
        <div className = {'loginScreen'}>
            <Title name ={"Login"}/>
        </div>
        <p>Preencha os campos abaixo para continuar</p>
        <form onSubmit={handleSubmit}>
        <fieldset>
            
            <div className="input-block">
                
                <input name="name" 
                    id="name" required  
                    onChange = {(e) => {setName(e.target.value)}} 
                    placeholder="User"/>
            </div>
            <div className="input-block">

                <input name="password" 
                    id="password" 
                    type='password'required 
                    onChange = {(e) => {setPassword(e.target.value)}}
                    placeholder="Senha" />
            </div>
            <Link to={'home'}>
                <button className ="Envios" type="submit">Login</button>
            </Link>
        </fieldset>
        </form>
        </>
    )
}
export default Login