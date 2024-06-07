import { post } from 'axios'

export const signup = (signdata) => {
  console.log('agaya bhai tu service me')
  console.log(signdata);
  const headers ={
    'Content-Type': 'application/json'
  }
  return post('user/signup',signdata,headers);
}
