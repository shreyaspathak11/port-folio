// App.js
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Profile />
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    </Router>
  );
};

export default App;
