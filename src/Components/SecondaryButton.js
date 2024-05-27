import React from 'react';
import './SecondaryButton.css';

function SecondaryButton(props) {

    return (
        <div id='sButtonContainer' onClick={props.onClick}>
            <h3>{props.text}</h3>
        </div>
    );

}

export default SecondaryButton;