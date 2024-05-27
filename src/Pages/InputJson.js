import React, { useState } from 'react';
import './InputJson.css';
import PrimaryButton from '../Components/PrimaryButton.js'
import { Link } from 'react-router-dom';

function InputGpt() {

    const [textValue, setValue] = useState('');
    const [isCreating, setIsCreating] = useState(false);
    const [quizCreated, setQuizCreated] = useState(false);
    const [quiz, setQuiz] = useState(null);

    const createQuiz = async () => {
        if (textValue) {
            setIsCreating(true);
            setQuizCreated(false);
            try {
                const quizData = JSON.parse(textValue);
                setQuizCreated(true);
                setQuiz(quizData);
            } catch (error) {
                console.error("Failed to create quiz:", error);
            } finally {
                setIsCreating(false);
            }
        } else {
            alert("Please insert text");
        }
    };

    const handleChangeT = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <Link id='ht-b' to='/how-to'><div id='htd'>How To Use</div></Link>
            <div id='main-container'>
                <div id='description'>
                    <h4>Upload Content to Generate Quiz</h4>
                    <p>You should paste your questions and answers following a json format equals to
                        the placeholder text
                    </p>
                </div>
                <div id='input-container'>
                    <div id='textbox'>
                        <textarea
                            type="text"
                            cols='60'
                            rows='14'
                            value={textValue}
                            onChange={handleChangeT}
                            placeholder={`{

    "1": {

        "question": "JavaScript was created before Java?", 

        "answers":["True", "False"], 

        "correct":1

    }, 

    "2": { 

        "question": "Which of the following is not JavaScript syntax?", 

        "answers":["const", "function", "let", "print"], 

        "correct":3

    }

}
                            `}>
                        </textarea>
                    </div>
                    <div id='buttons-json'>
                        <div>
                        </div>
                        <PrimaryButton
                            text='Create'
                            onClick={createQuiz}
                        />
                    </div>
                </div>
                {isCreating || quizCreated ? (
                    <div className="overlay">
                        <div id='start-quiz'>
                            {isCreating &&
                                <>
                                    <div className='disabledButton primaryButton'>
                                        <div className='spinner'></div>
                                    </div>
                                </>
                            }
                            {quizCreated &&
                                <>
                                    <Link
                                        to='/quiz-game'
                                        state={{ from: 'InputGpt', quiz }}>
                                        <PrimaryButton
                                            text='Start Quiz'
                                            className='fade-in'
                                        />
                                    </Link>
                                </>
                            }
                        </div>
                    </div>
                ) : null}

            </div>
        </>
    );
}

export default InputGpt;
