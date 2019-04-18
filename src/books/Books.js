import React, { Component, Fragment } from 'react'
// import axios from 'axios'
// import apiUrl from '../apiConfig'

import { Link } from 'react-router-dom'

import { indexBooks } from './api.js'

import Spinner from 'react-bootstrap/Spinner'

class Books extends Component {
  constructor () {
    super()

    this.state = {
      books: []
    }
  }

  componentDidMount () {
    const { user } = this.props
    console.log('books component mounted')
    indexBooks(user)
      .then(response => this.setState({
        books: response.data.books
      }))
      .catch(console.log)
  }

  render () {
    if (this.state.books.length === 0) {
      return <Spinner animation="border"/>
    }
    console.log('books component rendered')
    return (
      <Fragment>
        <h4> Books: </h4>
        <ul>
          {this.state.books.map(book => (
            <li key={book.id}>
              <Link to ={'/books/' + book.id}>{book.title}</Link>
            </li>
          ))}
        </ul>
      </Fragment>
    )
  }
}

export default Books
