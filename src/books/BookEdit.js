import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../apiConfig'
import { Redirect } from 'react-router-dom'
import { editBook } from './api.js'

import BookForm from './BookForm.js'

class BookEdit extends Component {
  constructor () {
    super()

    this.state = {
      book: null,
      updated: false,
      message: null
    }
  }
  componentDidMount () {
    const id = this.props.match.params.id
    axios.get(`${apiUrl}/books/${id}`)
      .then(response => this.setState({ movie: response.data.book }))
      .catch(console.log)
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { book } = this.state
    const { user } = this.props

    editBook(user, book)
      .then(() => this.setState({ updated: true }))
      .catch(() => this.setState({
        book: { ...book,
          title: '',
          author: '',
          total_pages: '',
          current_page: '',
          date_started: '' },
        message: 'Update failed. Please fill out all forms and try again.'
      }))
  }

  handleChange = (event) => {
    console.log(event.target.name, event.target.value)

    const inputName = event.target.name
    const updatedInputValue = event.target.value

    const updatedBook = { ...this.state.book, [inputName]: updatedInputValue }

    this.setState({ book: updatedBook })
  }

  render () {
    const { book, updated, message } = this.state

    if (!book) {
      return <p>loading...</p>
    }

    if (updated) {
      return <Redirect to={`/books/${book.id}`} />
    }

    const { title, author, totalPages, currentPage, dateStarted } = book

    return (
      <BookForm
        title={title}
        author={author}
        total_pages={totalPages}
        current_page={currentPage}
        date_started={dateStarted}
        message={message}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default BookEdit
