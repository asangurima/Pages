import React, { Fragment } from 'react'
import Alert from 'react-bootstrap/Alert'

const BookForm = (
  { message, title, author, totalPages, currentPage, dateStarted, handleSubmit, handleChange }
) => (
  <Fragment>
    { message && <Alert variant="danger" dismissible>{message}</Alert> }
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input value={title} name="title" onChange={handleChange}/>

      <label htmlFor="author">Author</label>
      <input value={author} name="author" onChange={handleChange}/>

      <label htmlFor="totalPages">Total Pages</label>
      <input value={totalPages} name="totalPages" type="number" onChange={handleChange}/>

      <label htmlFor="currentPage">Current Page</label>
      <input value={currentPage} name="currentPage" type="number" onChange={handleChange}/>

      <label htmlFor="dateStarted">Date Started</label>
      <input value={dateStarted} name="date started" type="date" onChange={handleChange}/>

      <button type="submit">Submit</button>
    </form>
  </Fragment>
)

export default BookForm
