import { Get, post, Delete } from './Axios'

export const getAllLabels = () => {
  const key = localStorage.getItem('API_KEY')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: key
  }
  return Get('noteLabels/getNoteLabelList', { headers })
}

export const addLabels = (label) => {
  const key = localStorage.getItem('API_KEY')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: key
  }
  return post('noteLabels', label, { headers })
}

export const deleteLabels = (label) => {
  const key = localStorage.getItem('API_KEY')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: key
  }
  return Delete('/noteLabels/'+label+'/deleteNoteLabel', { headers })
}