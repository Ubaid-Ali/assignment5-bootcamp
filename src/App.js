import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';
import CounterContex from './CounterContex';

function App() {

// let [counterState, setCounterState] = useState(12);
let countState = useState(0);

  return (
    <CounterContex.Provider value={countState}>
      <div className="App">
        <Parent />
      </div>
    </CounterContex.Provider>
  );
}

export default App;
