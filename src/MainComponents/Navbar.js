import React from 'react'
import { Link } from 'react-router-dom'
import '../MainComponents.css'

function Navbar() {
  return (
    <div className='nav-div'>
      <a href='/' class='logo'> Mocha Moves </a>
      <nav className='navbar'>
          <ul class='main-nav'>
            <li>
              <Link to='/youtube' class='nav-links'>Youtube</Link>
            </li>
            <li>
              <Link to='/instagram' class='nav-links'>Instagram</Link>
            </li>
            <li>
              <Link to='/about' class='nav-links'>About</Link>
            </li>
            <Link to='/contact'><button class='nav-contact'>Contact</button></Link>
          </ul>
      </nav>
    </div>
  )
}

export default Navbar
