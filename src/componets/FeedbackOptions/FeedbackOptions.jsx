import React from 'react';
import b from './Button/Button.module.css';
import s from './FeedbackOptions.module.css';




function FeedbackOptions({ options, onLeaveFeedback,countTotalFeedback } ) {
    
    return (
        <div className={s.Container}>
        
            {options.map(option =>
                <button type='button' key={option} onClick={() => onLeaveFeedback(option)}
                    className={b.Button} >
                    {option}</button>)}
            
        </div>

        )
}
    

export default FeedbackOptions;
