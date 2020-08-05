import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = () => {
  
  return(
    <nav className="navbar">
        <ul>
            <AnchorLink href="#about">About</AnchorLink>
            <AnchorLink href="#projects">Projects</AnchorLink>
            <AnchorLink href="#contact">Contact</AnchorLink>
        </ul>
    </nav>
  )
}


export default Navbar
