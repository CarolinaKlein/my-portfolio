import React from 'react'
import './SmoothScroll'

const Navbar = () => {

  // const main = document.querySelector('.home');
  // const nav = document.querySelector('.navbar');


  // window.onscroll = function () {

  //     if (window.pageYOffset > (main.offsetHeight - nav.offsetHeight)) {
  //         nav.classList.remove('bottom-nav');
  //         nav.classList.add('nav');
  //     } else {
  //         nav.classList.add('bottom-nav');
  //         nav.classList.remove('nav');

  //     }
  // }
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
