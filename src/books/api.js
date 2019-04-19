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

export const editBook = (user, book) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + `/books/${book.id}`,
    headers: { 'Authorization': `Token token=${user.token}` },
    data: {
      book: {
        author: book.author,
        title: book.title,
        current_page: book.currentPage,
        total_pages: book.totalPages,
        date_started: book.dateStarted
      }
    }
  })
}

export const indexBooks = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/books',
    headers: { 'Authorization': `Token token=${user.token}` }
  })
}

export const getBook = (user, id) => {
  return axios({
    method: 'GET',
    url: apiUrl + `/books/${id}`,
    headers: { 'Authorization': `Token token=${user.token}` }
  })
}

export const deleteBook = (user, id) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + `/books/${id}`,
    headers: { 'Authorization': `Token token=${user.token}` }
  })
}
