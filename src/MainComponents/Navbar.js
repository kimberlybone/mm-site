import React from 'react'
import '../MainComponents.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <a href='#' class='logo'> Mocha Moves </a>
        <ul class='main-nav'>
          <li>
            <a href='#' class='nav-links'>Youtube</a>
          </li>
          <li>
            <a href='#' class='nav-links'>Instagram</a>
          </li>
          <li>
            <a href='#' class='nav-links'>About</a>
          </li>
          <li>
            <a href='#' class='nav-links'>Contact</a>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar
