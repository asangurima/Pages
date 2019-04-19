import React, { Component, Fragment } from 'react'
import { Redirect, Link, withRouter } from 'react-router-dom'

import { getBook, deleteBook } from './api.js'

class Book extends Component {
  constructor () {
    super()

    this.state = {
      book: null,
      redirect: false
    }
  }

  componentDidMount () {
    const { user } = this.props
    const id = this.props.match.params.id
    getBook(user, id)
      .then(d => { return d })
      .then(response => this.setState({ book: response.data.book }))
      .catch()
  }

  handleDeleteBook = () => {
    const { user } = this.props
    const id = this.props.match.params.id
    deleteBook(user, id)
      .then(() => this.setState({ redirect: true }))
      .catch()
  }

    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to={{
          pathname: '/books', state: { message: 'Succesfully deleted book!' }
        }} />
      }
    }

    render () {
      const { book } = this.state
      const { user } = this.props
      const isUploadedByUser = book ? user.id === book.user.id : false

      const editButtonLink = <Link to={`/books/${this.props.match.params.id}/edit`}>
        <button>Edit</button>
      </Link>
      const deleteButtonLink = <button onClick={this.handleDeleteBook}>Delete</button>

      if (!book) {
        return <p>Loading...</p>
      }

      return (
        <Fragment>
          <h4>{book.title}</h4>
          <p>Author: {book.author}</p>
          {/*  <p>Total Pages: {book.totalPages} </p>
        <p>Current Page: {book.currentPage} </p>
        <p>Date Started: {book.dateStarted} </p>
        */}
          {this.renderRedirect()}
          { isUploadedByUser ? editButtonLink : ''}
          { isUploadedByUser ? deleteButtonLink : ''}
          <Link to="/books">
            <button>Back to all Books</button>
          </Link>
        </Fragment>
      )
    }
}

export default withRouter(Book)
