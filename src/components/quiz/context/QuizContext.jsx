import { createContext } from "react";

export const QuizContext = createContext({
    questions : [],
    name: '',
    setName: ()=>{},
    score: 0,
    setScore: ()=>{},
    showContent: {
        showQuizHome : true,
        showQuestion: false,
        showResult: false
    },
    setShowContent: () => {}
});


