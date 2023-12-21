// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import './App.css';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<Profile />}></Route>
          <Route path="/about" component={AboutMe} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
