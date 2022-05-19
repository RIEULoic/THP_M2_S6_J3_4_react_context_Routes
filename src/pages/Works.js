import React from 'react';
import { Link } from 'react-router-dom';
import StudyCase from '../components/StudyCase';



export default function Works() {
  return (
    
    <div>
      <h1>Au fil des années, nous avons pu accompagner les meilleurs.</h1>
      <p>
        Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.
      </p>
      <div>
        <Link to="/works/platon" className="App-link" >Platon</Link>
        <Link to="/works/solane" className="App-link" >Solane</Link>
        <Link to="/works/sedal" className="App-link" >Sedal</Link>
      </div>
    </div>
  );
};