import React from 'react'
import{ Switch, Route, BrowserRouter, Redirect} from 'react-router-dom'

const PrivateRoute =(props) =>{
    return(
        <Route component={localStorage.getItem('token')?
    props.component : () => <Redirect to= '/'/>}/>

    )
}
export default PrivateRoute