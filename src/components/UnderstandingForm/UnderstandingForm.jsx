/////////////////////////
/// IMPORT COMPONENTS ///
/////////////////////////

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SmileRating from '../SmileRating/SmileRating.jsx';

/////////////////////////////////
/// DEFINE COMPONENT FUNCTION ///
/////////////////////////////////

function UnderstandingForm () {

    // Define Navigate and Dispatch
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Define Local State
    const [understanding, setUnderstanding] = useState(0);
    const [error, setError] = useState('');

    // Define Redux Reducers
    const feedback = useSelector((store) => store.feedbackReducer);

    useEffect(() => {
        if (feedback.understanding) {
            setUnderstanding(feedback.understanding)
        }
    }, []);

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
            setError('Please choose a rating before proceeding.');
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
            <SmileRating value={understanding} setValueFunction={setUnderstanding} />
            { error, <p className="text-error">{error}</p> }
            <button onClick={ handleButtonClick }>Next</button>
        </div>
    )
}

// Export Component
export default UnderstandingForm;