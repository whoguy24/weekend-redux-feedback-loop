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

function Goof () {

    // Define Navigate and Dispatch
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Define Local State
    const [goof, setGoof] = useState('');
    const [error, setError] = useState('');

    // Define Redux Reducers
    const feedback = useSelector((store) => store.feedbackReducer);

    // Set Value if One Exists in Redux Store
    useEffect(() => {
        if (feedback.goof) {
            setGoof(feedback.goof)
        }
    }, []);

    // Handle Button Click
    function handleButtonClick( direction ) {
        if (direction === 'Forward') {
            if (goof.length >= 500) {
                dispatch({
                    type: 'SET_GOOF',
                    payload: goof
                })
                navigate('/review')
            }
            else {
                setError('Wow, what a great start! You are well on your way to the required 500 characters for this step.');
            }
        }
        else if (direction === 'Back') {
            navigate('/support')
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
            <p>Please write a brief but thorough essay on the following topic:</p>
            <p>What ethical questions emerged from the popular television serial "Star Trek: The Original Series", and how do they apply to a 21st century worldview? Please utilize examples from the show.</p>
            <input 
                type="text"
                value={ goof } 
                onChange={(event) => setGoof(event.target.value)}
            />
            { error, <p className="text-error">{error}</p> }
            <button onClick = {() => { handleButtonClick('Back') }}>Back</button>
            <button onClick = {() => { handleButtonClick('Forward') }}>Next</button>
        </div>
    )
}

// Export Component
export default Goof;