import React from 'react';
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import About from './components/About/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact/Contact'
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => (
  <>
    <Landing/>
    <Router>
        <Navbar/>
    </Router>
    <About/>
    <Projects/>
    <Resume/>
    <Contact/>
  </>
);


export default App;