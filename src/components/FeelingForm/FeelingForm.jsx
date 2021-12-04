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

function FeelingForm () {

    // Define Navigate and Dispatch
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Define Local State
    const [rating, setRating] = useState('');

    // Handle Button Click
    function handleButtonClick () {
        dispatch({
            type: 'SET_FEELING',
            payload: rating
        })
        goToNextPage('/understanding');
    }

    // Navigate to Next Page
    // Perhaps a DRY opportunity next week for this function?
    function goToNextPage(path) {
        navigate(path);
    };

    // Render Elements on the DOM
    return (
        <div>
            <p>On a scale of 1 to 5, how are you feeling today?</p>
            <input 
                type="number"
                value={ rating } 
                onChange={(event) => setRating(event.target.value)}
            />
            <button onClick={ handleButtonClick }>Next</button>
        </div>
    )
}

// Export Component
export default FeelingForm;