import React, { Fragment } from 'react'
import Alert from 'react-bootstrap/Alert'

const BookForm = function (
  { message, handleSubmit, handleChange, book }
) {
  console.log(arguments)

  return (
    <Fragment>
      { message && <Alert variant="danger" dismissible>{message}</Alert> }
      <form onSubmit={handleSubmit} className="d-flex flex-column p-5">
        <label htmlFor="title">Title</label>
        <input value={book.title} name="title" onChange={handleChange}/>

        <label htmlFor="author">Author</label>
        <input value={book.author} name="author" onChange={handleChange}/>

        <label htmlFor="totalPages">Total Pages</label>
        <input value={book.totalPages} name="total_pages" type="number" min="0" onChange={handleChange}/>

        <label htmlFor="currentPage">Current Page</label>
        <input value={book.current_page} name="current_page" type="number" min="0" onChange={handleChange}/>

        <label htmlFor="dateStarted">Date Started</label>
        <input value={book.date_started} name="date_started" type="date" onChange={handleChange}/>

        <button type="submit">Submit</button>
      </form>
    </Fragment>
  )
}

export default BookForm
