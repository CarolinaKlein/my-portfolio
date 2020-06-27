import React from 'react';
import Home from '../src/pages/Home/Home.jsx'
import Navbar from '../src/components/Navbar'
import About from '../src/pages/About/About.jsx'
import Projects from '../src/pages/Projects/Projects.jsx'
import Resume from '../src/pages/Resume/Resume.jsx'
import Contact from '../src/pages/Contact/Contact.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'


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
