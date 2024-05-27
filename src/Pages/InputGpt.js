import React, { useState } from 'react';
import './InputGpt.css';
import PrimaryButton from '../Components/PrimaryButton.js'
import QuizObject from '../Components/QuizObject.js';
import { Link } from 'react-router-dom';
import SecondaryButton from '../Components/SecondaryButton';

function InputGpt() {
    const [textValue, setValue] = useState('');
    const [quantityValue, setQuantValue] = useState('');
    const [isCreating, setIsCreating] = useState(false);
    const [quizCreated, setQuizCreated] = useState(false);
    const [quiz, setQuiz] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    const [isUploading, setIsUploading] = useState(false);
    const [uploaded, setUploaded] = useState(false);

    const createQuiz = async () => {

        if (isUploading || uploaded) {

            if (quantityValue) {
                setIsCreating(true);
                setQuizCreated(false);
                try {
                    // wait until uploaded is true to create quiz
                    while (!uploaded) {
                        await new Promise(resolve => setTimeout(resolve, 1000));
                    }
                    const quizData = await QuizObject(quantityValue, textValue, imageUrls);
                    setQuizCreated(true);
                    setQuiz(quizData);
                } catch (error) {
                    console.error("Failed to create quiz:", error);
                } finally {
                    setIsCreating(false);
                }
            } else {
                alert("Please choose question number");
            }

        } else if (textValue) {
            if (quantityValue) {
                setIsCreating(true);
                setQuizCreated(false);
                try {
                    const quizData = await QuizObject(quantityValue, textValue, imageUrls);
                    setQuizCreated(true);
                    setQuiz(quizData);
                } catch (error) {
                    console.error("Failed to create quiz:", error);
                } finally {
                    setIsCreating(false);
                }
            } else {
                alert("Please choose question number");
            }
        } else {
            alert("Please insert text or upload a file");
        }
    };

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            setIsUploading(true);
            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await fetch('http://localhost:5000/upload', {
                    method: 'POST',
                    body: formData,
                });

                if (!response.ok) {
                    throw new Error('Upload failed');
                }

                const data = await response.json();
                setUploaded(true);
                setIsUploading(false);
                setImageUrls(data.urls); // Set image URLs in state
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
    };

    const handleChangeT = (event) => {
        setValue(event.target.value);
    };

    const handleChangeQ = (event) => {
        setQuantValue(event.target.value);
    };

    return (
        <>
            <Link id='ht-b' to='/how-to'><div id='htd'>How To Use</div></Link>
            <div id='main-container'>
                <div id='description'>
                    <h4>Upload Content to Generate Quiz</h4>
                    <p>You may upload a PDF, PNG(s) or simply paste text into the textarea.
                        The file/text must contain the information you wish GPT 4 to
                        formulate the questions on. Select the desired number
                        of questions and press create.
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
                            placeholder='Paste piece of text'
                            {...(uploaded ? { disabled: true } : {})}
                        >
                        </textarea>
                    </div>
                    <div id='buttons'>
                        <div>
                            <input
                                type="number"
                                id="quantity"
                                name="quantity"
                                min="5"
                                max="50"
                                value={quantityValue}
                                onChange={handleChangeQ}
                            />
                        </div>
                        <div id='spacer'></div>
                        <SecondaryButton
                            text='Upload'
                            id='upload-button'
                            // onClick={() => document.getElementById('file-upload').click()}
                            // onclick pop alert
                            onClick={() => alert('Upload feature is currently disabled. APIs are not available. Please use text function.')}
                        />
                        <input
                            type="file"
                            id="file-upload"
                            accept="application/pdf"
                            style={{ display: 'none' }}
                            // onChange={handleFileUpload}
                        />
                        <div id='spacer'></div>
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
