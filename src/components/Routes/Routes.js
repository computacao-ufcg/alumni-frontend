import React from 'react'
import{ Switch, Route, BrowserRouter} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Home from '../../pages/Home/Home'
import Login from '../../pages/Login/Login'
import Empregador from '../../pages/Empregador/Empregador'
import Alumnus from '../../pages/Alumnus/Alumnus'
import NotFound from '../NotFound'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <PrivateRoute component={() => <Home/>} path ="/home"/>
            <Route component={() => <Login/>} exact path ="/"/>
            <PrivateRoute component={() => <Empregador/>} path ="/empregador"/>
            <PrivateRoute component={() => <Alumnus/>}  path ="/alumnus"/>
            <Route component={() => <NotFound/>} path ="/"/>
        </Switch>
    </BrowserRouter>
)
export default Routes;