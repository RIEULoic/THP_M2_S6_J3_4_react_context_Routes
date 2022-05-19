import React, { useContext } from 'react';
import './ToggleButton.css';
import ThemeContext from '../../context/ThemeContext';

export default function ToggleButton() {

const theme = useContext(ThemeContext);
const mode = (theme.currentTheme === 'light') ? 'Darkmode OFF' : 'Darkmode On'

  return (
    <button onClick={theme.toggleTheme} className="myButton">
      {mode}
    </button>
  )
}


