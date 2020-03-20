import React from 'react';
import Navbar from './MainComponents/Navbar'
import HomeHeader from './MainComponents/HomeHeader'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="mm-body">
        <HomeHeader></HomeHeader>
      </div>
    </div>
  );
}

export default App;
