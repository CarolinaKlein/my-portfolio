import React from 'react';
import Navbar from './components/Navbar'
import {
  Switch,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import Card from 'react-bootstrap/Card'

const App = () => (
  <>
    <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"/>
        </Switch>
    </Router>
    <div class="mainIntroDiv">
      <div class="intro">Hello, World! I'm</div><div id="pink">Carolina Klein</div><div class="intro">.</div>
    </div>
    <div class="introSecondLine">I am a Full Stack Web Developer</div>
    <input type="button" onClick="document.getElementById('projects').scrollIntoView();" />
    <h1 id="projects">My projects</h1>

      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
      </Card>

    
    <h1 id="resume">My resume</h1>


    <h1 id="contact">Contact</h1>

  </>
);


export default App;
