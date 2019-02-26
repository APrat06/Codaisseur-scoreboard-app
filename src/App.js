import React, { Component } from 'react';
import './App.css';
import Title from './imports/Title'
import Scoreboard from './imports/Scoreboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title content='Welcome to my scoreboard app'/>
        </header>
        <main>
          <Scoreboard />
        </main>
      </div>
    );
  }
}

export default App;
