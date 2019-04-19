// import { validateUser } from '../helpers/http'
import { authUser } from './userApi';

export const getAuthState = () => {
  return {
    userToken: localStorage.getItem('userToken'),
  }
}

export const login = (email, password) => {
  return authUser(email, password).then(user => {
    localStorage.setItem('userToken', user.token)
    
    return {
      userToken: user.token,
  
    }
  })
}

export const logout = () => {
  return new Promise((resolve) => {
    localStorage.removeItem('userToken')
    resolve(true)
  })
}
