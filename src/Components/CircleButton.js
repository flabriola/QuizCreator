import React from 'react';
import './CircleButton.css';

function CircleButton(props) {

    return (
        <div id='buttonContainer' onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} onClick={props.onClick}>
            <img src={props.src} alt={props.src} />
        </div>
    );

}

export default CircleButton;