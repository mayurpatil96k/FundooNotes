import { post } from './Axios'

export const signup = (signdata) => {
  console.log('In Service Layer...')
  console.log(signdata)
  const headers = {
    'Content-Type': 'application/json'
  }
  return post('user/userSignUp', signdata, headers)
}

export const login = (loginData) => {
  console.log('In Service Layer...')
  console.log(loginData)
  const headers = {
    'Content-Type': 'application/json'
  }
  return post('user/login', loginData, headers)
}
