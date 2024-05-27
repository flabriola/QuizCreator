import React from 'react';
import './How.css';
import { Link } from 'react-router-dom';
import one from '../Screen Shot 2024-05-24 at 14.35.09.png';
import two from '../Screen Shot 2024-05-24 at 14.36.11.png';
import three from '../Screen Shot 2024-05-24 at 14.36.34.png';
import four from '../Screen Shot 2024-05-24 at 14.37.03.png';
import five from '../Screen Shot 2024-05-24 at 15.29.09.png';
import six from '../Screen Shot 2024-05-24 at 15.29.58.png';
import seven from '../Screen Shot 2024-05-24 at 14.37.55.png';
import eight from '../Screen Shot 2024-05-24 at 14.38.13.png';
import nine from '../Screen Shot 2024-05-24 at 14.38.31.png';
import ten from '../Screen Shot 2024-05-24 at 14.39.07.png';
import eleven from '../Screen Shot 2024-05-24 at 14.39.45.png';

function How() {

    return (
        <>
            <Link id='ht-b' to='/how-to'><div id='htd'>How To Use</div></Link>
            <div id='how-menu'>
                <a href='#hgg'><h2>GPT</h2></a>
                <a href='#hjj'><h2>JSON</h2></a>
                <a href='#hpp'><h2>Quiz</h2></a>
            </div>

            <div id='how-main-container'>
                <div id='hgg'></div>
                <div id='howto-spacer'></div>
                <div id='howto-gpt'>
                    <h1>How to: GPT-4o</h1>
                    <p>Start by selecting the GPT option in <a href='/quiz'>Main Menu</a></p>
                    <img alt='main menu with gpt option selected' src={one} id='img-one'></img>
                    <h4>Ctrl/command V</h4>
                    <p>Select the textbox and paste the desired text</p>
                    <img alt='gpt create page with text pasted into textarea' src={two} id='img-two'></img>
                    <h4>Select number of questions</h4>
                    <p>Using the pointer select from a minimum of 5 and maximum of 50 questions</p>
                    <img alt='question numbers selector with 10 selected' src={three} id='img-three'></img>
                    <h4>Press Create</h4>
                    <p>Press create and wait for GPT-4o to prepare quiz</p>
                    <img alt='loading page of gpt create' src={four} id='img-four'></img>
                    <div id='hjj'></div>
                </div>

                <div id='howto-json'>
                    <h1>How to: JSON</h1>
                    <p>Start by selecting the JSON option in <a href='/quiz'>Main Menu</a></p>
                    <img alt='json selected in main menu' src={five} id='img-five'></img>
                    <h4>Paste your Quiz</h4>
                    <p>Simply select the text area and paste your text. The text must follow the exact
                        format as shown in the placeholder text. Press create and start quiz.
                    </p>
                    <img alt='json create with text pasted' src={six} id='img-six'></img>
                    <div id='hpp'></div>
                </div>

                <div id='howtoplay'>
                    <h1>How to: Quiz</h1>
                    <p>Once started the quiz will display the question, possible answers (2-4),
                        the tag button and question tracker.
                    </p>
                    <img alt='quiz' src={seven} id='img-seven'></img>
                    <h4>Tag button</h4>
                    <p>Press the tag button to tag questions. The tagged questions will be
                        tagged in the tracker, which you can return to later.
                    </p>
                    <img alt='tracker demo' src={eight} id='img-eight'></img>
                    <img alt='tracker tags' src={nine} id='img-nine'></img>
                    <h4>Questions tracker</h4>
                    <p>This will display the questions in the quiz. In black are the
                        questions that have been answered, grey unanswered and the tag on the right.
                        Click on the number you wish to visit.
                    </p>
                    <img alt='questions tracker' src={ten} id='img-ten'></img>
                    <h4>Submit</h4>
                    <p>You will be allowed to submit once all questions have been answered.
                    </p>
                    <img alt='submit button' src={eleven} id='img-eleven'></img>
                </div>
            </div>
        </>
    );
}

export default How;


