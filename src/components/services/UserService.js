import { post } from './Axios'

const headers = {
    'Content-Type': 'application/json'
  }
  
export const signup = (signdata) => {
  console.log('In Service Layer...')
  console.log(signdata)
  return post('user/userSignUp', signdata, headers)
}

export const login = (loginData) => {
  console.log('In Service Layer...')
  console.log(loginData)
  
  return post('user/login', loginData, headers)
}
