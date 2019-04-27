import React, { Component } from 'react'

 const LoginLayout = ({children, ...rest}) => {
    return (
      <div className="wrapper">
       {children}
      </div>
    )
  }
   export default LoginLayout;