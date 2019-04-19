import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }, context) => (

  <Route {...rest} render={props => (
    context.auth.loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
)

PrivateRoute.contextTypes = {
  auth: PropTypes.object
}

export default PrivateRoute
