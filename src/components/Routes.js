import React from 'react'
import{ Router, Switch, Route} from 'react-router'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../components/NotFound'

import {history} from '../history'

const Routes = () => (
    <Router history = {history}>
        <Switch>
            <Route component={Home} exact path ="/"/>
            <Route component={Login} exact path ="/login"/>
            <Route component={NotFound} path ="/"/>
        </Switch>
    </Router>
)
export default Routes;