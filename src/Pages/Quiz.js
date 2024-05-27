import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Quiz.css';
import Question from '../Components/Question';
import SecondaryButton from '../Components/SecondaryButton';
import { Link } from 'react-router-dom';

function Quiz() {
    const location = useLocation();
    const { quiz } = location.state || {};
    const [index, setIndex] = useState(1);
    const [answers, setAnswers] = useState({});
    const [tags, setTags] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [userCorrAnswers, setUserCorrAnswers] = useState([]);

    const quizLength = Object.keys(quiz).length;

    function handleSelectOption(selectedOption) {
        setAnswers(prev => ({ ...prev, [index]: selectedOption }));
    }

    function toggleTag() {
        setTags(prev => ({ ...prev, [index]: !prev[index] }));
    }

    function previous() {
        if (index > 1) setIndex(index - 1);
    }

    function next() {
        if (index < quizLength) setIndex(index + 1);
    }

    function submit() {

        // iterate over the quiz object and add the number in quiz[key].correct to an array then set correctAnswers to that array
        let correctAnswers = [];
        for (let key in quiz) {
            correctAnswers.push(quiz[key].correct);
        }
        setCorrectAnswers(correctAnswers);

        let i = 0;
        let score = 0;

        // iterate over the quiz object against the answers from the user, and if the answer is correct add a true and a false if incorrect to an array then set userCorrAnswers to that array
        let userCorrAnswerss = [];
        for (let key in quiz) {
            if (quiz[key].answers[correctAnswers[i]] === answers[key]) {
                userCorrAnswers.push(true);
                score++;
            } else {
                userCorrAnswers.push(false);
            }
            i++;
        }
        setUserCorrAnswers(userCorrAnswerss);
        setScore(score);

        console.log("Correct Answers:", correctAnswers);
        console.log("User Correct Answers:", userCorrAnswers);
        console.log("Score:", score);

        setSubmitted(true);
        console.log("Submitting answers:", answers);
    }

    const isAllAnswered = Object.keys(answers).length === quizLength;

    return (
        <div id='quiz-layout'>
            <Link id='ht-b' to='/how-to'><div id='htd'>How To Use</div></Link>
            {!submitted && (
                <>
                    <div id='tag-button' className={tags[index] ? 'active' : ''} onClick={toggleTag}></div>

                    <div className='main-container'>
                        <div id='question-container'>
                            <div id='current-question'>{index} of {quizLength}</div>
                            <Question
                                question={quiz[index]}
                                selectedOption={answers[index]}
                                onSelectOption={handleSelectOption}
                            />

                            <div id='question-buttons'>
                                <div className={index === 1 ? 'disabled' : ''}>
                                    <SecondaryButton
                                        id='previous-button'
                                        text='Previous'
                                        onClick={previous}
                                    />
                                </div>
                                {index !== quizLength && (
                                    <SecondaryButton
                                        id='next-button'
                                        text='Next'
                                        onClick={next}
                                    />
                                )}
                                {index === quizLength && (
                                    <div className={isAllAnswered ? '' : 'disabled'}>
                                        <SecondaryButton
                                            id='submit-button'
                                            text='Submit'
                                            onClick={isAllAnswered ? submit : null}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div id='questions-tracker'>
                        <div id='tracker-nums'>
                            {Object.keys(quiz).map((key) => (
                                <div
                                    key={key}
                                    className={`tracker-item ${key === index.toString() ? 'current' : ''} ${answers[key] ? 'answered' : 'unanswered'}`}
                                    onClick={() => setIndex(parseInt(key))}
                                >
                                    {key}
                                </div>
                            ))}
                        </div>
                        <div id='tracker-tag'>
                            {Object.keys(quiz).map((key) => (
                                <div
                                    key={key}
                                    className={`tracker-item-t ${key === index.toString() ? 'current' : ''} ${answers[key] ? 'answered' : 'unanswered'}`}
                                >
                                    {tags[key] && <span className='tag-indicator'></span>}
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}

            {submitted && (
                <div className='main-container'>
                    <div id='results-container'>
                        <div id='results-header'>
                            <span>Results</span>
                            <span id='score'>{score}/{quizLength}</span>
                        </div>
                        <div id='results'>
                            {Object.keys(quiz).map((key) => (
                                <div key={key} className='result'>
                                    <div className='result-question'>
                                        {/* // check if the user's answer is correct or not and display the appropriate icon */}
                                        {quiz[key].answers[correctAnswers[key - 1]] === answers[key] ? (
                                            <span className=''>{key}. {quiz[key].question} &#10003;</span>
                                        ) : (
                                            <span className=''>{key}. {quiz[key].question} &times;</span>
                                        )}
                                    </div>
                                    {quiz[key].answers.map((answer, index) => (
                                        <div key={index}
                                            className={answer === answers[key] ? 'chosen-answer': 'answer'}
                                            id={quiz[key].correct === index ? 'correct' : undefined}>
                                            {answer}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Quiz;


