import React from 'react';
import QuizContextProvider from './context/QuizContextProvider';
import QuizHome  from './components/QuizHome';

import './index.css';
import ResultComponent from './components/ResultComponent';
import QuestionComponent from './components/QuestionComponent';

function Quiz() {

  return (
    <div>
        <QuizContextProvider>
            <QuizHome />
            <QuestionComponent />
            <ResultComponent />
        </QuizContextProvider>
    </div>
  )
}

export default Quiz;
