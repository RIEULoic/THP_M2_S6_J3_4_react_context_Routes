import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import ToggleButton from './togglebutton/ToggleButton';


export default function Navbar() {

const {theme} = useContext(ThemeContext);

  return (
      <nav className="App-header">
      <div>
        <Link to="/" className="App-link" >Accueil</Link>
        <Link to="/about" className="App-link" >L'agence</Link>
        <Link to="/works" className="App-link" >Projets</Link>  
        </div> 
        {theme}   
      
      </nav>
  )  
}