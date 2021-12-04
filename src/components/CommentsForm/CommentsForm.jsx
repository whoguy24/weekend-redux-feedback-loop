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

function CommentsForm () {

    // Define Navigate and Dispatch
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Define Local State
    const [comments, setComments] = useState('');

    // Define Redux Reducers
    const feedback = useSelector((store) => store.feedbackReducer);

    // Set Value if One Exists in Redux Store
    useEffect(() => {
        if (feedback.comments) {
            setComments(feedback.comments)
        }
    }, []);

    // Handle Button Click
    function handleButtonClick( direction ) {
        if (direction === 'Forward') {
            if (comments) {
                dispatch({
                    type: 'SET_COMMENTS',
                    payload: comments
                })
            }
            navigate('/review')
        }
        else if (direction === 'Back') {
            navigate('/goof')
        }
    }

    // Render Elements on the DOM
    return (
        <div>
            <p>Please leave some comments. This step is optional.</p>
            <button onClick = {() => { handleButtonClick('Back') }}>Back</button>
            <input 
                type="text"
                value={ comments } 
                onChange={(event) => setComments(event.target.value)}
            />
            <button onClick = {() => { handleButtonClick('Forward') }}>Next</button>
        </div>
    )
}

// Export Component
export default CommentsForm;