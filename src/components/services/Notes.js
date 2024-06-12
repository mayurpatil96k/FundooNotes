import { post } from './Axios'

const headers = {
    'Content-Type': 'application/json'

  }
  
export const getAllNotes = () => {
  console.log('In Service Layer...')
  console.log(signdata)
  return post('user/userSignUp', signdata, headers)
}