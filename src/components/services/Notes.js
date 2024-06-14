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
  return post('notes/trashNotes',note, { headers })
}
export const arcNote = (note)=>{
  const key = localStorage.getItem('API_KEY')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: key
  }
  console.log("Removinng Notes...")
  return post('notes/archiveNotes',note, { headers })
}

export const updateNote = (note)=>{
  const key = localStorage.getItem('API_KEY')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: key
  }
  console.log("updating Note...")
  return post('notes/updateNotes',note, { headers })
}

