import React from 'react'
import{ Switch, Route, BrowserRouter} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Home from '../../pages/Home'
import Login from '../../pages/Login'
import Empregador from '../../pages/Empregador'
import Alumnus from '../../pages/Alumnus'
import NotFound from './NotFound'
import Egressos from '../../pages/Egressos'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <PrivateRoute component={() => <Home/>} path ="/home"/>
            <Route component={() => <Login/>} exact path ="/"/>
            <PrivateRoute component={() => <Empregador/>} path ="/empregador"/>
            <PrivateRoute component={() => <Alumnus/>}  path ="/alumnus"/>
            <PrivateRoute component={() => <Egressos/>}  path ="/egressos"/>
            <Route component={() => <NotFound/>} path ="/"/>
        </Switch>
    </BrowserRouter>
)
export default Routes;