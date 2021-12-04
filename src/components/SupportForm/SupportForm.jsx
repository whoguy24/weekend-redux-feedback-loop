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

function SupportForm () {

    // Define Navigate and Dispatch
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Define Local State
    const [support, setSupport] = useState(0);
    const [error, setError] = useState('');

    // Define Redux Reducers
    const feedback = useSelector((store) => store.feedbackReducer);

    // Set Value if One Exists in Redux Store
    useEffect(() => {
        if (feedback.support) {
            setSupport(feedback.support)
        }
    }, []);

    // Handle Button Click
    function handleButtonClick( direction ) {
        if (support) {
            dispatch({
                type: 'SET_SUPPORT',
                payload: support
            })
            if (direction === 'Forward') {
                navigate('/goof')
            }
            else if (direction === 'Back') {
                navigate('/understanding')
            }
        }
        else {
            setError('Please choose a rating before proceeding.');
        }
    }

    // Render Elements on the DOM
    return (
        <div>
            <p>How well do you feel supported by your instructors and cohort-mates?</p>
            <SmileRating value={support} setValueFunction={setSupport} />
            { error, <p className="text-error">{error}</p> }
            <button onClick = {() => { handleButtonClick('Back') }}>Back</button>
            <button onClick = {() => { handleButtonClick('Forward') }}>Next</button>
        </div>
    )
}

// Export Component
export default SupportForm;