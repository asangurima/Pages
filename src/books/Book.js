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
    console.log('this.props:', this.props)
    console.log('this.state:', this.state)
    getBook(user, id)
      .then(d => { console.log(d); return d })
      .then(response => this.setState({ book: response.data.book }))
      .catch(console.log)
  }

  handleDeleteBook = () => {
    const { user } = this.props
    const id = this.props.match.params.id
    deleteBook(user, id)
      .then(console.log('Deleted!!!!!'))
      .then(() => this.setState({ redirect: true }))
      .catch(console.log)
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: '/books', state: { message: 'Succesfully deleted book!' }
      }} />
    }
  }

  render () {
    if (!this.state.book) {
      return <p> loading... </p>
    }
    const { title, author } = this.state.book
    const totalPages = this.state.book.total_pages
    const currentPage = this.state.book.current_page
    const dateStarted = this.state.book.date_started

    return (
      <Fragment>
        <h4>{title}</h4>
        <p>Author: {author}</p>
        <p>Total Pages: {totalPages} </p>
        <p>Current Page: {currentPage} </p>
        <p>Date Started: {dateStarted} </p>
        {this.renderRedirect()}
        <button onClick={this.handleDeleteBook}> Delete </button>
        <Link to={this.props.match.url + '/edit'}><button>Edit</button></Link>
      </Fragment>
    )
  }
}

export default withRouter(Book)
