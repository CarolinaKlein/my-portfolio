import React from 'react';
import Navbar from './components/Navbar'
import {
  Switch,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import Mission_Booked from './missionBooked.jpeg'

const App = () => (
  <>
    <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"/>
        </Switch>
    </Router>
    <div className="intro">
      <p>Hello, World! I'm <span>Carolina Klein</span>.</p>
      <p>I am a Full Stack Web Developer</p>
    </div>
    <input type="button"/>
    <h1 id="projects">My projects</h1>

      <Card style={{ width: '25rem' }}>
      <Card.Body>
      <Card.Img src={Mission_Booked}></Card.Img>
        <Card.Link href="#"/>
      </Card.Body>
      </Card>

    
    <h1 id="resume">My resume</h1>


    <h1 id="contact">Contact</h1>

  </>
);


export default App;
