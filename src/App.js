import React, { Component } from 'react';
import './App.css';


import Game from './components/Game';






class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Tic Tac Toe</h1>
        </header>
        <div className="game-container">
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
