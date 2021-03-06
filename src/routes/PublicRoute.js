import React from 'react'
import PropTypes from 'prop-types'
import {Route,Redirect} from 'react-router-dom';

export const PublicRoute = ({isAuthenticated,component:Componenet,...rest}) => {

  return (
    <Route {...rest}
    component={
      (props=>(
        (!isAuthenticated)
        ?<Componenet {...props}/>
        :(<Redirect to='/'/>)
      ))
    }
    
    />

  )
}
PublicRoute.propType ={
  isAuthenticated:PropTypes.bool.isRequired,
  component:PropTypes.func.isRequired
}