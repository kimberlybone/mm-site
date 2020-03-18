import React from 'react'
import '../MainComponents.css'

function Navbar() {
  return (
    <div className='nav-div'>
      <a href='#' class='logo'> Mocha Moves </a>
      <nav className='navbar'>
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
            <a href='#'><button class='nav-contact'>Contact</button></a>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar
