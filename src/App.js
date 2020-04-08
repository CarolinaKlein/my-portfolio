import React from 'react';
import Navbar from './components/Navbar'
import {
  Switch,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';

const App = () => (
  <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/"/>
      </Switch>
  </Router>
);


export default App;
