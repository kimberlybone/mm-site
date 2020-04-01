import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Navbar from './MainComponents/Navbar'
import HomeHeader from './MainComponents/HomeHeader'
import OurStories from './MainComponents/OurStories'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="mm-body">
          <HomeHeader></HomeHeader>
          <OurStories></OurStories>
        </div>
      </div>
      <Route path="/youtube" exact render={ () => <YoutubePage/> }/>
    </Router>
  );
}

export default App;
