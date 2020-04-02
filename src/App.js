import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Navbar from './MainComponents/Navbar'
// import HomeHeader from './MainComponents/HomeHeader'
// import OurStories from './MainComponents/OurStories'
import HomePage from './MainComponents/HomePage'
import YoutubePage from './MainComponents/YoutubePage'
import InstagramPage from './MainComponents/InstagramPage'
import AboutPage from './MainComponents/AboutPage'
import ContactPage from './MainComponents/ContactPage'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>

        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/youtube">
            <YoutubePage/>
          </Route>
          <Route exact path="/instagram">
            <InstagramPage/>
          </Route>
          <Route exact path="/about">
            <AboutPage/>
          </Route>
          <Route exact path="/contact">
            <ContactPage/>
          </Route>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
