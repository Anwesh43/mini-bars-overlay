import React from 'react';
import logo from './logo.svg';
import './App.css';
import MiniBarOverlayComponent from './MiniBarOverlayComponent'

function App() {
  return (
    <div className="App">
      <MiniBarOverlayComponent n = {10}/>
    </div>
  );
}

export default App;
