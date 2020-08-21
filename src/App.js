
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
        <Counter />
        <Bomb />
        <RouletteGun />
        <h2>Accordion</h2>
        <Accordion sections={sections} />
      </header>
    </div>
  );
}


export default App;
