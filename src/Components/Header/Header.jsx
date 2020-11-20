import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header>
      <div className='header-content'>
        <h1 className='want'>I want to lift in NJ </h1>
      </div>
      <nav className='nav'>
        <ul className='navLinks'>
          <li className='page-links'>
            <Link exact to='/about'>
              About 
            </Link></li>
          <li className='page-links'>
            <Link exact to='/contact'>
              Contact to Add!
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}