import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavLink } from 'react-bootstrap'
// import './Header.css'
import "bootstrap/dist/css/bootstrap.css";

export default function Header() {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='/'>I want to lift in NJ</Navbar.Brand>
        <Nav className='mr-auto'>
        <Nav.Link href='/about'>About</Nav.Link>
        <Nav.Link href='/contact'>Contact me!</Nav.Link>
        </Nav>
      </Navbar>
      </>
  )
}