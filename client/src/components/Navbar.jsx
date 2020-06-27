import React from 'react'
import '../components/SmoothScroll'

const Navbar = () => {

  return(
    <nav className="navbar">
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
