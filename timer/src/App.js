import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';
class App extends Component {

  render() {

    return (
      <div className="App">
          <h1>Hey, There! Welcome to my Timer App built in React!</h1>
        <Timer start={Date.now()}/>
      </div>
    );
  }
}

export default App;
