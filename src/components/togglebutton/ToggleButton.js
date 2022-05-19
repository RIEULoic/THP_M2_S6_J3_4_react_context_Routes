import React, { useContext } from 'react';
import './ToggleButton.css';
import { ThemeContext } from '../../context/ThemeContext';

export default function ToggleButton() {

const {toggleTheme, theme} = useContext(ThemeContext)

  return (
    <div onClick={toggleTheme} className="myButton">

    </div>
  )
}


