import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { editBook, getBook } from './api.js'

import BookForm from './BookForm.js'

class BookEdit extends Component {
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
      updated: false,
      message: null
    }
  }
  componentDidMount () {
    const id = this.props.match.params.id
    const { user } = this.props
    getBook(user, id)
      .then(response => this.setState({ book: response.data.book }))
      .catch(console.log)

    console.log(this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { book } = this.state
    const { user } = this.props

    editBook(user, book)
      .then(() => console.log(this.state))
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

    console.log(this.state)
    console.log(this.props)

    if (!book) {
      return <p>loading...</p>
    }

    if (updated) {
      return <Redirect to={`/books/${book.id}`} />
    }

    return (
      <BookForm
        book={book}
        message={message}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default withRouter(BookEdit)
