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

function FeelingForm () {

    // Define Navigate and Dispatch
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Define Redux Reducers
    const feedback = useSelector((store) => store.feedbackReducer);
    const [error, setError] = useState('');

    // Define Local State
    const [feeling, setFeeling] = useState(0);

    useEffect(() => {
        if (feedback.feeling) {
            setFeeling(feedback.feeling)
        }
    }, []);

    // Handle Button Click
    function handleButtonClick () {
        if (feeling) {
            dispatch({
                type: 'SET_FEELING',
                payload: feeling
            })
            goToNextPage('/understanding');
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
            <p>How are you feeling today?</p>
            <SmileRating value={feeling} setValueFunction={setFeeling} />
            { error, <p className="text-error">{error}</p> }
            <button onClick={ handleButtonClick }>Next</button>
        </div>
    )
}

// Export Component
export default FeelingForm;