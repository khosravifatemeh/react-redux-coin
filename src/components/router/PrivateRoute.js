import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import DashboardLayout from '../../layouts/DashboardLayout'
import * as authentication from '../../services/authentication';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={matchProps => (
    
    authentication.getAuthState().userToken  ? (
      <DashboardLayout>
        <Component {...matchProps}  />
      </DashboardLayout>
    ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: matchProps.location }
        }} />
      )
  )} />
)

// PrivateRoute.contextTypes = {
//   auth: PropTypes.object
// }

export default PrivateRoute
