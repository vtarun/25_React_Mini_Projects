import React, { useContext } from 'react'
import { QuizContext } from '../context/QuizContext'

function ResultComponent() {
    const {score, setScore, questions, name, showContent, setShowContent} = useContext(QuizContext);
    function retakeQuiz(){
      setShowContent({ showQuizHome: true, showQuestion: false, showResult: false });
      setScore(0);
    }

    const totalQuestion = questions.length;
  return (
    <>
    {showContent.showResult &&  <div>
        <h3> Hey {name}, you scored {score}/{totalQuestion}.</h3>
        <button onClick={retakeQuiz}>Retake the quiz</button>
    </div>
    }
    </>
  )
}

export default ResultComponent
