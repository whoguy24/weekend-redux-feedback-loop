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

    // Set Value if One Exists in Redux Store
    useEffect(() => {
        if (feedback.understanding) {
            setUnderstanding(feedback.understanding)
        }
    }, []);

    // Handle Button Click
    function handleButtonClick( direction ) {
        if (understanding) {
            dispatch({
                type: 'SET_UNDERSTANDING',
                payload: understanding
            })
            if (direction === 'Forward') {
                navigate('/support')
            }
            else if (direction === 'Back') {
                navigate('/feeling')
            }
        }
        else {
            setError('Please choose a rating before proceeding.');
        }
    }

    // Render Elements on the DOM
    return (
        <div>
            <p>How well do you understand the material presented?</p>
            <SmileRating value={understanding} setValueFunction={setUnderstanding} />
            { error, <p className="text-error">{error}</p> }
            <button onClick = {() => { handleButtonClick('Back') }}>Back</button>
            <button onClick = {() => { handleButtonClick('Forward') }}>Next</button>
        </div>
    )
}

// Export Component
export default UnderstandingForm;