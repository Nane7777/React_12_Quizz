import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import {useState} from "react";

export default function Question({
                                     key,
                                     questionText,
                                     answers,
                                     onSelectAnswer,
                                     selectedAnswer,
                                     onSkipAnswer
                                 }) {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    })

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[key].answers[0] === answer
            })
        }, 1000);
    }

    let answerState = '';

    if (answer.selectedAnswer) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    }

    return (
        <div id="question">
            <QuestionTimer
                timeout={10000}
                onTimeout={onSkipAnswer}
            />
            <h2>{questionText}</h2>
            <Answers
                answers={answers}
                selectedAnswer={selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    )
}