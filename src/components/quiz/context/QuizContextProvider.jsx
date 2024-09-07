import { useState } from "react";

import { QuizContext } from "./QuizContext";
import { questions } from "../questions";
export default function QuizContextProvider({children}){
    const [name, setName] = useState('');
    const [score, setScore] = useState(0);
    const [showContent, setShowContent] = useState({
        showQuizHome : true,
        showQuestion: false,
        showResult: false
    });
    
    const ctxValue = {
        questions,
        name,
        score,
        showContent,
        setName,
        setScore,
        setShowContent
    }
    return <QuizContext.Provider value={ctxValue}>
        {children}
    </QuizContext.Provider>
}