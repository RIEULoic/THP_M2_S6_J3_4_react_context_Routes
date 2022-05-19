import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import StudyCase from './components/StudyCase';
import ThemeContextProvider from './context/ThemeContext';
import ToggleButton from './components/togglebutton/ToggleButton';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      
        <Navbar />
        <ToggleButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} >
            <Route path="/works/:bookSlug" element={<StudyCase />} />
          </Route>
        </Routes>
        
      </ThemeContextProvider>
    </div>
  );
}

export default App;
