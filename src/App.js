import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';
import CounterContext from './CounterContext';

function App() {

// let [counterState, setCounterState] = useState(12);
let countState = useState(0);

  return (
    <CounterContext.Provider value={countState}>
      <div className="App">
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
