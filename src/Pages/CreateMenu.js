import React from 'react';
import './CreateMenu.css';
import openai from './openai.png';
import json from './json.png';
import CircleButton from '../Components/CircleButton';
import { Link } from 'react-router-dom';

function CreateMenu(props) {

    function handleHover(event, id) {
        // find which option text should be changed
        var optionText = document.getElementById(id);
        // add lower opacity effect 
        optionText.style.transition = 'opacity 0.3s';
        optionText.style.opacity = event.type === 'mouseenter' ? '0.3' : '1';
    }

    return (
        <>
            <Link id='ht-b' to='/how-to'><div id='htd'>How To Use</div></Link>
            <div id='createMenuContainer'>
                <div id='create-title'>
                    <h1 id='title'>Transform Notes and Presentations into Interactive Quizzes</h1>
                    <h4 id='description-cc'>Choose from using GPT-4, from openai, or JSON formatted questions to create your
                        quiz. Simply upload a body of text or pdf file to get started, or your own
                        questions and answers for an interactive inteface.
                    </h4>
                </div>

                <div id='optionsContainer'>
                    <div className="menuOption">
                        <Link to='/gpt-create'>
                            <CircleButton
                                src={openai}
                                alt="openai logo"
                                onMouseEnter={(e, id) => handleHover(e, 'gpt')}
                                onMouseLeave={(e, id) => handleHover(e, 'gpt')}
                            />
                        </Link>
                        <p className="optionText" id='gpt'>GPT 4</p>
                    </div>

                    <div className="menuOption">
                        <Link to='/json-create'>
                            <CircleButton
                                src={json}
                                alt="json logo"
                                onMouseEnter={(e, id) => handleHover(e, 'json')}
                                onMouseLeave={(e, id) => handleHover(e, 'json')}
                            />
                        </Link>
                        <p className="optionText" id='json'>JSON</p>
                    </div>
                </div>
            </div>
        </>
    );

}


export default CreateMenu;