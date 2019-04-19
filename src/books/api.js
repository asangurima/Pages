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
  console.log(book)
  return axios({
    method: 'PATCH',
    url: apiUrl + `/books/${book.id}`,
    headers: { 'Authorization': `Token token=${user.token}` },
    data: {
      book: {
        author: book.author,
        title: book.title,
        current_page: book.current_page,
        total_pages: book.total_pages,
        date_started: book.date_started
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
