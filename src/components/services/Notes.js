import { Get, post } from './Axios'

export const getAllNotes = () => {
  const key = localStorage.getItem('API_KEY')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: key
  }
  return Get('notes/getNotesList', { headers })
}


export const createNote = (note) => {
  const key = localStorage.getItem('API_KEY')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: key
  }
  console.log("Adding Notes...")
  return post('notes/addNotes',note, { headers })
}

export const deleteNote = (note)=>{
  const key = localStorage.getItem('API_KEY')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: key
  }
  console.log("Removinng Notes...")
  return post('notes/addNotes',note, { headers })
}
