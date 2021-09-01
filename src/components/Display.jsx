import React from 'react';
import './Display.css';

const Display = ({btn, isCalculated, numbers, ans}) => {

    var displayKey ;
    if (isCalculated) {
        displayKey = 
            <>
                <div className='input-numbers'>{numbers}</div>
                <div className='answer'>{`=${ans}`}</div>
            </>
    }

    else {
        if (btn.length > 0){
             displayKey = <div className="input-numbers">{btn}</div>
        }
        else {
            displayKey = <div className="input-numbers">0</div>
        }
    }
    return (
        <div className = 'display-container'>
            {displayKey}
        </div>
    )
}

export default Display
