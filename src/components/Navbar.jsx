import React, { useContext } from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

  return(
    // <nav className={styles.navBar}>
    <nav class="navbar">
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