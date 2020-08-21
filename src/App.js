import React from 'react';
import logo from './logo.svg';
import HelloWorld from './state-drills/HelloWorld';
import TheDate from './TheDate'
import Counter from './state/Counter'
import Bomb from './state-drills/Bomb'
import RouletteGun from './state-drills/RouletteGun'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld />
        <TheDate />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter />
        <Bomb />
        <RouletteGun />
      </header>
    </div>
  );
}

export default App;
