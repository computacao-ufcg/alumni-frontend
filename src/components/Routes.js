import React from 'react'
import{ Switch, Route, BrowserRouter} from 'react-router-dom'

import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Empregador from '../pages/Empregador/Empregador'
import Alumnus from '../pages/Alumnus/Alumnus'
import NotFound from '../components/NotFound'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route component={() => <Home/>} exact path ="/home"/>
            <Route component={() => <Login/>} exact path ="/"/>
            <Route component={() => <Empregador/>} exact path ="/empregador"/>
            <Route component={() => <Alumnus/>}  exact path ="/alumnus"/>
            <Route component={() => <NotFound/>} path ="/"/>
        </Switch>
    </BrowserRouter>
)
export default Routes;