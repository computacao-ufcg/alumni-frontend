import React from 'react'
import{ Router, Switch, Route} from 'react-router'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Egressos from '../pages/Egressos/Egressos'
import NotFound from '../components/NotFound'

import {history} from '../history'

const Routes = () => (
    <Router history = {history}>
        <Switch>
            <Route component={Home} exact path ="/"/>
            <Route component={Login} exact path ="/login"/>
            <Route component={Egressos} exact path ="/egressos"/>
            <Route component={NotFound} path ="/"/>
        </Switch>
    </Router>
)
export default Routes;