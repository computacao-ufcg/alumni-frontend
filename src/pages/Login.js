import React from 'react'

const Login = () =>( 
    <>
    <h1>Login</h1>
    <p>Preencha os campos abaixo para continuar</p>
    <form>
    <fieldset>
        <legend>
            Seus dados
        </legend>
        
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