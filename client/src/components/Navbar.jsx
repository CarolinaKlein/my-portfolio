import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/App.css';

const Navbar = () => {

  return(
    <nav className="navbar">
        <ul>
             <Link to="/home">
              <li>Home</li>
             </Link>
             <Link to="/resume">
               <li>Projects</li>
             </Link>
             <Link to="/projects">
               <li>Resume</li>
             </Link>
             <Link to="/contact">
               <li>Contact</li>
             </Link>
        </ul>
    </nav>
  )
}

export default Navbar