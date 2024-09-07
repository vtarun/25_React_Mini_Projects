import React, {useState, useContext} from 'react'
import { QuizContext } from '../context/QuizContext';

function QuestionComponent() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const { questions, setScore, showContent, setShowContent } = useContext(QuizContext);

    function handleChange(answer){
        setSelectedAnswer(answer);
    }
    function nextQuestion(){
        setSelectedAnswer(null);
        setCurrentIndex(currentIndex+1);
        setScore(prev => {
            if(questions[currentIndex].answer === selectedAnswer){
                return +prev + 1;
            }
            return prev;
        });
        
    }

    function submitAnswers(){
        setShowContent(prev => {
            return {...prev, showQuestion: false, showResult: true }
        });
        console.log(showContent);
        setScore(prev => {
            if(questions[currentIndex].answer === selectedAnswer){
                return +prev + 1;
            }
            return prev;
        });
    }

    const options = questions[currentIndex].options;

  return (
    <>
    {showContent.showQuestion && <div>
      <h3>{questions[currentIndex].question}</h3>
      <div className='radio-group'>
        {options.map(option => (
            <label key={option}>
                <input type="radio" id={option} value={option} onChange={()=>handleChange(option)} checked={selectedAnswer === option}/>{option}
            </label>)
        )}
      </div>
      { (questions.length === currentIndex+1) ? 
            <button onClick={submitAnswers}>Submit</button> :
            <button onClick={nextQuestion}>Next</button>
            
        }
    </div>
    }
    </>
  )
}

export default QuestionComponent
