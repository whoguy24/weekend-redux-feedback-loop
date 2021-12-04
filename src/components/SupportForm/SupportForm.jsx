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

    useEffect(() => {
        if (feedback.support) {
            setSupport(feedback.support)
        }
    }, []);

    // Handle Button Click
    function handleButtonClick () {
        dispatch({
            type: 'SET_SUPPORT',
            payload: support
        })
        goToNextPage('/goof');
    }

    function handleButtonClick () {
        if (support) {
            dispatch({
                type: 'SET_SUPPORT',
                payload: support
            })
            goToNextPage('/goof');
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
            <p>How well do you feel supported by your instructors and cohort-mates?</p>
            <SmileRating value={support} setValueFunction={setSupport} />
            { error, <p className="text-error">{error}</p> }
            <button onClick={ handleButtonClick }>Next</button>
        </div>
    )
}

// Export Component
export default SupportForm;