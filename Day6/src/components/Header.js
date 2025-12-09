import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome To React</h1>
        <Display />
      </div>
    );
  }
}

export default App;
