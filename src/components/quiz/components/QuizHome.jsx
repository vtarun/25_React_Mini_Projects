import React, { useState, useContext } from 'react';
import { QuizContext } from './../context/QuizContext';
import QuestionComponent from './QuestionComponent';

function QuizHome() {
  const { name, showContent, setShowContent, setName } = useContext(QuizContext);

  function handleStart(event){
    event.preventDefault();
    setShowContent({showQuizHome: false, showQuestion: true, showResult: false});
  }

  return (
    <div>
        <h1>Welcome to quiz world {name}!</h1>
        {
        showContent.showQuizHome && <form>
          <label>Player name: </label>
          <input type="text" value={name} placeholder='enter player name' onChange={(event) => setName(event.target.value)} required/>
          <div style={{margin: '25px'}}>
            <button style={{backgroundColor: 'green'}} type="submit" onClick={handleStart} disabled={!name}>Start quiz</button>
          </div>
        </form>
        }
    </div>
  )
}

export default QuizHome;
