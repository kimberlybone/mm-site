import React from 'react';
import Navbar from './MainComponents/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="mm-body">
        <img className="mm-image" src="IMG_1021.JPG" alt="mm" />
        <div class="mm-body-head"><text className="mm-body-num">6</text> Black Women from </div>
        <div class="mm-body-head2"><text className="mm-body-num">6</text> Different Walks of Life</div>
      </div>
    </div>
  );
}

export default App;
