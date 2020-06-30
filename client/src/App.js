import React from 'react';
import Home from '../src/pages/Home/Home.jsx'
import Navbar from '../src/components/Navbar.jsx'
import About from '../src/pages/About/About.jsx'
import Projects from '../src/pages/Projects/Projects.jsx'
import Resume from '../src/pages/Resume/Resume.jsx'
import Contact from '../src/pages/Contact/Contact.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

// const main = document.querySelector('.home');
// const nav = document.querySelector('.navbar');


// window.onscroll = function () {

//       if (window.pageYOffset > (main.offsetHeight - nav.offsetHeight)) {
//           nav.classList.remove('bottom-nav');
//           nav.classList.add('nav');
//       } else {
//           nav.classList.add('bottom-nav');
//           nav.classList.remove('nav');

//       }
// }

const App = () => (
  <>
    <Home/>
    <Navbar/>
    <About/>
    <Projects/>
    <Resume/>
    <Contact/>
  </>
);


export default App;
