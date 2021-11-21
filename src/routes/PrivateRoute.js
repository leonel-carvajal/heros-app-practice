import PropTypes from 'prop-types'
import {Route,Redirect} from 'react-router-dom';

export const PrivateRoute = ({isAuthenticated,component:Componenet,...rest}) => {

  localStorage.setItem('LastPath',rest.location.pathname)
  return (
    <Route {...rest}
    component={
      (props=>(
        (isAuthenticated)
        ?<Componenet {...props}/>
        :(<Redirect to='/login'/>)
      ))
    }
    />
  )
}
PrivateRoute.propType ={
  isAuthenticated:PropTypes.bool.isRequired,
  component:PropTypes.func.isRequired
}