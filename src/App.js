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
    <div className="mainIntroDiv">
      <div className="intro">Hello, World! I'm</div><span id="pink">Carolina Klein</span><div className="intro">.</div>
    </div>
    <div className="introSecondLine">I am a Full Stack Web Developer</div>
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
