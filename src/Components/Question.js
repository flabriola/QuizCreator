import React from 'react';
import './Question.css';

function Question({ question, selectedOption, onSelectOption }) {
    return (
        <div id='question-sub-container'>

            <h4 id='question-title'>{question.question}</h4>
            <div id='answers-container'>
                {question.answers.map((answer, index) => (
                    <label key={index} className="answer-container">
                        <input
                            type='radio'
                            name="answer"
                            value={answer}
                            checked={selectedOption === answer}
                            onChange={() => onSelectOption(answer)}
                            className='answers'
                        />
                        {answer}
                    </label>
                ))}
            </div>

        </div>
    );
}

export default Question;
