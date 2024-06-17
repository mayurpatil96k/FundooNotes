import { Get, post } from './Axios'

export const getAllTrash = () => {
  const key = localStorage.getItem('API_KEY')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: key
  }
  return Get('notes/getTrashNotesList', { headers })
}