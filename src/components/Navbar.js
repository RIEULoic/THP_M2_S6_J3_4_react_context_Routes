import React from 'react';
import { Link } from 'react-router-dom';



export default function Navbar() {



  return (
      <nav className="App-header">
      <div>
        <Link to="/" className="App-link" >Accueil</Link>
        <Link to="/about" className="App-link" >L'agence</Link>
        <Link to="/works" className="App-link" >Projets</Link>  
        </div> 
           
      
      </nav>
  )  
}