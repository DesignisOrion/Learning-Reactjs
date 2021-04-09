import React from 'react';
import './App.css';
import Counter from './Counter';
import Documentation from './Documentation';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to my Counter App !</h2>
        <p>Learning Reactjs by @DesignIsOrion</p>
        <Counter/>
        <Documentation/>
      </header>
    </div>
  );
}

export default App;
