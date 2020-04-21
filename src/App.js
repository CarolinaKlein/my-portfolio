import React from 'react';
import Landing from './components/Landing'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => (
  <>
    <Landing/>
    <Router>
        <Navbar/>
    </Router>
    <Projects/>
    <h1 id="resume">My resume</h1>


    <h1 id="contact">Contact</h1>

  </>
);


export default App;
