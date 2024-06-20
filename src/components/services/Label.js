import { Get, post, Delete ,Patch} from './Axios'

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
  return Delete('noteLabels/'+label+'/deleteNoteLabel', { headers })
}

export const updateLabels = (id,data) => {
  const key = localStorage.getItem('API_KEY')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: key
  }
  return Patch(`noteLabels/${id}`, data, { headers })
}