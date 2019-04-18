import React, { Component } from 'react'
// import axios from 'axios'
// import apiUrl from '../apiConfig'
import { Redirect } from 'react-router'
import { createBook } from './api.js'

import BookForm from './BookForm'

class BookCreate extends Component {
  constructor () {
    super()

    this.state = {
      book: {
        title: '',
        author: '',
        total_pages: '',
        current_page: '',
        date_started: ''
      },
      created: false,
      message: null
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { book } = this.state
    const { user } = this.props

    createBook(user, book)
      .then(response => this.setState({
        created: true,
        book: response.data.book
      }))
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

  handleChange = event => {
    console.log(event.target.name, event.target.value)

    const inputName = event.target.name
    const updatedInputValue = event.target.value

    const updatedBook = { ...this.state.book, [inputName]: updatedInputValue }

    this.setState({ book: updatedBook })
  }

  render () {
    const { book, created, message } = this.state

    if (created) {
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

export default BookCreate