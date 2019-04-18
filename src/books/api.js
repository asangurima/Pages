import apiUrl from '../apiConfig'
import axios from 'axios'

export const createBook = (user, book) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/books',
    headers: { 'Authorization': `Token token=${user.token}` },
    data: { book }
  })
}
