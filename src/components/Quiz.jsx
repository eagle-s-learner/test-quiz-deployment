import { useState } from "react";
import QUESTIONS from "../question";
import quizeCompleteImg from '../assets/quiz-complete.png';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQIndex = userAnswers.length;
    
    const quizComplete = activeQIndex === QUESTIONS.length;
    
    function handleSelectAnswer(selectAnswer) {
        setUserAnswers((prev) => {
            return [...prev, answer];
        });
    }
    
    if(quizComplete){
        return <div id="summary">
            <img src={quizeCompleteImg} alt="quiz complete img" />
            <h2>Quiz Completed!</h2>
        </div>
    }
    
    const shuffledAns = [...QUESTIONS[activeQIndex].answers];
    shuffledAns.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[activeQIndex].text}</h2>
                <ul id="answers">
                    {shuffledAns.map((answer) => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>
                                {answer}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
