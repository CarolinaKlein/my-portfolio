import React from 'react';
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => (
  <>
    <Router>
        <Navbar/>
    </Router>
    <div className="intro">
      <p>Hello, World! I'm <span>Carolina Klein</span>.</p>
      <p>I am a Full Stack Web Developer</p>
    </div>
    <input type="button"/>
    <h1 id="projects">My projects</h1>
    <Projects/>

    
    <h1 id="resume">My resume</h1>


    <h1 id="contact">Contact</h1>

  </>
);


export default App;
