import React from 'react'
import Title from '../../components/Title'
import Header from '../../components/Header'
import './styles.css'

const Login = () =>( 
    <>
    <Header></Header>
    <div className = {'loginScreen'}>
        <Title name ={"Login"}/>
    </div>
    <p>Preencha os campos abaixo para continuar</p>
    <form>
    <fieldset>
        
        <div class="input-block">
            <label for="name">User</label>
            <input name="name" id="name" required />
        </div>
        <div class="input-block">
            <label for="password">Senha</label>
            <input name="password" id="password" type='password'required />
        </div>
        <button className ="Envios" type="submit">Login</button>
    </fieldset>
    </form>
    </>
)
export default Login