import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <div class='number-buttons'>
            <div class='clear-numbers'>
                <p>clear</p>
            </div>    
            <div class='main-numbers'>
                <p class='number'>7</p>
                <p class='number'>8</p>
                <p class='number'>9</p>
                <p class='number'>4</p>
                <p class='number'>5</p>
                <p class='number'>6</p>
                <p class='number'>1</p>
                <p class='number'>2</p>
                <p class='number'>3</p>
            </div>
            <div class='zero'>
                <p>0</p>
            </div>
        </div>
    )
};

export default NumberButton;