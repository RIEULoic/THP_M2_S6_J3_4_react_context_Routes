import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import studyCaseList from './studyCaseList';


const StudyCase = () => { 

const { bookSlug } = useParams();
console.log({bookSlug});


const [currentBook, setCurrentBook] = useState("undefined") //Si je mets useState(undefined), ça ne marche pas. Mon currentBook reste bloqué sur undefined et ne prend pas les nouvelles valeurs de setCurrentBook 

  useEffect(() => {
    const foundBook = studyCaseList.find((book) => book.slug === bookSlug);
    setCurrentBook(foundBook);
  }, [bookSlug])

  return (
  
    <div key={currentBook.slug}>
      <h4>{currentBook.title}</h4>
      <p>{currentBook.description}</p>
    </div>


  );
};


export default StudyCase;