import React, {useState} from 'react'
import Title from '../../components/Title'
import Header from '../../components/Header'
import {as, backend} from '../../services/api'
import './styles.css'


const Login = () =>{ 
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")    
    
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        let query = 'publicKey'
        const res = await backend.get(query,{})
        if(res){
            let publickey = res.data.publicKey
            handleLogin(name, password, publickey)
            
        }else{
            alert('Public Key não encontrada')
        }

    }

    const handleLogin = async (name, password, publickey) => {
        let query = 'as/tokens'
        const res = await as.post(query,{
            "credentials": {
                "username": name ,
                "password": password,
              },
              "publicKey": publickey
        })
        .then(res =>{
            localStorage.setItem('token',res.data.token)
            window.location.href = '/home'
        })
        .catch(err =>{
            alert('Usuário ou senha incorretos')
        })
        
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
            <button className ="Envios" type="button" onClick ={handleSubmit}>Login</button>
            
        </fieldset>
        </form>
        </>
    )
}
export default Login