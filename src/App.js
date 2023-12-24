// App.js
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Profile />
        <AboutMe />
        <Skills />
      </div>
    </Router>
  );
};

export default App;
