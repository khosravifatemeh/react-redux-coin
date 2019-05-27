import React from 'react'
import { Route } from 'react-router-dom'
import  LoginLayout from '../../layouts/LoginLayout'

const RouteWithProps = ({ props, component: Component, ...rest }) => (
  <Route {...rest} render={(matchProps) => (
    <LoginLayout>
    <Component {...matchProps} {...props} />
    </LoginLayout>
  )} />
)

export default RouteWithProps