import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css';

const Navbar = () => {

  return(
    <nav className="navbar">
        <ul>
             <Link to="/home">Home</Link>
             <Link to="/resume">Resume</Link>
             <Link to="/projects">Projects</Link>
             <Link to="/contact">Contact Me</Link>
        </ul>
    </nav>
  )
}

export default Navbar