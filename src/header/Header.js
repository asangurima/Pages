import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <NavLink activeClassName="selected" to="/change-password">Change Password</NavLink>
    <NavLink activeClassName="selected" to="/sign-out">Sign Out</NavLink>
    <NavLink activeClassName="selected" to="/books">All Books</NavLink>
    <NavLink activeClassName="selected" to="/book-create">Add Book</NavLink>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <NavLink activeClassName="selected" to="/sign-up">Sign Up</NavLink>
    <NavLink activeClassName="selected" to="/sign-in">Sign In</NavLink>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <NavLink activeClassName="selected" exact to="/">Home</NavLink>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <h1>Pages</h1>
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
