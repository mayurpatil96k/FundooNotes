import { Get, post } from './Axios'

export const getAllLabels = () => {
  const key = localStorage.getItem('API_KEY')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: key
  }
  return Get('noteLabels/getNoteLabelList', { headers })
}
