import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer.js';
import Header from '.Header/.Header.js';
class App extends Component {
  render() {
    return (

  <Header></Header>

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bienvenue </h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

             <Footer></Footer>

      </div>
    );
  }
}

export default App;
