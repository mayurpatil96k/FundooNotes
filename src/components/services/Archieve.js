import { Get, post } from './Axios'

export const getAllArc = () => {
  const key = localStorage.getItem('API_KEY')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: key
  }
  return Get('notes/getArchiveNotesList', { headers })
}