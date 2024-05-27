import React from 'react';
import './ExitButton.css';
import exit_icon from './reject.png';

function ExitButton(props) {

    return (
        <div id='exit-button' onClick={props.onClick}>
            <img src={exit_icon} ></img>
        </div>
    );

}

export default ExitButton;