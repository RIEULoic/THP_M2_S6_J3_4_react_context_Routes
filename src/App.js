import React, {useState, useEffect} from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import StudyCase from './components/StudyCase';
import ThemeContext from './context/ThemeContext';
import ToggleButton from './components/togglebutton/ToggleButton';

function App() {

  const [currentTheme, setCurrentTheme] = useState(localStorage.selectTheme || 'light');

  useEffect (() => {localStorage.setItem('selectTheme', currentTheme)}, [currentTheme]);


  return (
   
    <ThemeContext.Provider value={{currentTheme, toggleTheme: () => {currentTheme === "light" ? setCurrentTheme("dark") : setCurrentTheme("light")}}}>
      <div className={ currentTheme === "light" ? "lightTheme" : "darkTheme"}>
        <Navbar />
        <ToggleButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} >
            <Route path="/works/:bookSlug" element={<StudyCase />} />
          </Route>
        </Routes>
        </div>
      </ThemeContext.Provider>
    
  );
}

export default App;
