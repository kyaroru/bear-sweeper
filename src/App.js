import React, { Component } from 'react';
import logo from './Brownie.svg';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Difficulty from './routes/Difficulty';
import About from './routes/About';
import Game from './routes/Game';

const Index = () => (
  <header className="app-content">
    <img src={logo} className="app-logo" alt="logo" />
    <div style={{ marginTop: 30 }}>
      Bear Sweeper
    </div>
    <Link to="/difficulty" className="app-link margin-top">Start</Link>
    <Link to="/about" className="app-link margin-top">About</Link>
  </header>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/difficulty/" component={Difficulty} />
          <Route path="/game/" component={Game} />
        </div>
      </Router>
    );
  }
}

export default App;
