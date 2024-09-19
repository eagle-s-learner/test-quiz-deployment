import { useCallback, useState } from "react";
import QUESTIONS from "../question";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQIndex = userAnswers.length;

    const quizComplete = activeQIndex === QUESTIONS.length;

    // console.log('1')
    const handleSelectAnswer = useCallback(function handleSelectAnswer(
        selectAnswer
    ) {
        // console.log('2');
        // console.log('3');
        setUserAnswers((prev) => {
            return [...prev, selectAnswer];
        });
    },
    []);

    const handleSkipAnswer = useCallback(
        () => handleSelectAnswer(null),
        [handleSelectAnswer]
    );

    if (quizComplete) {
        return <Summary userAnswers={userAnswers}/>
    }

    return (
        <div id="quiz">
            <Question
                key={activeQIndex}
                index={activeQIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
}
