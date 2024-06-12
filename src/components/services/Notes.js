import { Get } from './Axios'

const key = localStorage.getItem("API_KEY");
const trimmedStr = key.replace(/^"+|"+$/g, '');
const headers = {
  'Content-Type': 'application/json',
  'Authorization': trimmedStr
};

export const getAllNotes = () => {
  return Get('notes/getNotesList', { headers });
};