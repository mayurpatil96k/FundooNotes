import { post } from './Axios'
export const addLabel = (data, noteId, lableId) => {
  const key = localStorage.getItem('API_KEY')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: key
  }
  return post(`/notes/${noteId}/addLabelToNotes/${lableId}/add`, data, { headers })
}


export const removeLabel = (data, noteId, lableId) => {
  const key = localStorage.getItem('API_KEY')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: key
  }
  return post(`/notes/${noteId}/addLabelToNotes/${lableId}/remove`, data, { headers })
}
