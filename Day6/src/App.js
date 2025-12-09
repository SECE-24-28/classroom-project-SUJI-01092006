import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Display from './components/Display';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <h1>Welcome To React</h1>
        <Display />

        <Footer />
      </div>
    );
  }
}

export default App;
