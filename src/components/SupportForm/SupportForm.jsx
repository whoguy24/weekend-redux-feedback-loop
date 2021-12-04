/////////////////////////
/// IMPORT COMPONENTS ///
/////////////////////////

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/////////////////////////////////
/// DEFINE COMPONENT FUNCTION ///
/////////////////////////////////

function SupportForm () {

    // Define Navigate and Dispatch
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Define Local State
    const [support, setSupport] = useState('');
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
        if (support >= 0 && support <= 5) {
            dispatch({
                type: 'SET_SUPPORT',
                payload: support
            })
            goToNextPage('/goof');
        }
        else {
            setSupport('');
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
            <p>On a scale of 1 to 5, how well do you feel supported by your instructors and cohort-mates?</p>
            <input 
                type="number"
                value={ support } 
                onChange={(event) => setSupport(event.target.value)}
            />
            <button onClick={ handleButtonClick }>Next</button>
            { error, <p className="text-error">{error}</p> }
        </div>
    )
}

// Export Component
export default SupportForm;