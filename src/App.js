import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Header from './components/medium/header';
import HomePage from './components/pages/homepage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <HomePage/>
      </div>
    );
  }
}

export default App;
