/////////////////////////
/// IMPORT COMPONENTS ///
/////////////////////////

import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/////////////////////////////////
/// DEFINE COMPONENT FUNCTION ///
/////////////////////////////////

function UnderstandingForm () {

    // Define Navigate and Dispatch
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Define Local State
    const [understanding, setUnderstanding] = useState('');
    const [error, setError] = useState('');

    // Handle Button Click
    function handleButtonClick () {
        if (understanding >= 0 && understanding <= 5) {
            dispatch({
                type: 'SET_UNDERSTANDING',
                payload: understanding
            })
            goToNextPage('/support');
        }
        else {
            setUnderstanding('');
            setError('Please enter a number between zero and five.');
        }
    }

    // Navigate to Next Page
    // Perhaps a DRY opportunity next week for this function?
    function goToNextPage(path) {
        navigate(path);
    };

    // Render Elements on the DOM
    return (
        <div>
            <p>On a scale of 1 to 5, well do you understand the material presented?</p>
            <input 
                type="number"
                value={ understanding } 
                onChange={(event) => setUnderstanding(event.target.value)}
            />
            <button onClick={ handleButtonClick }>Next</button>
            { error, <p className="text-error">{error}</p> }
        </div>
    )
}

// Export Component
export default UnderstandingForm;