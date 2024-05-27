import React from 'react';
import './PrimaryButton.css';

function PrimaryButton(props) {

    return (
        <div id='pButtonContainer' onClick={props.onClick}>
            <h3>{props.text}</h3>
        </div>
    );

}

export default PrimaryButton;