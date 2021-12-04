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

function CommentsForm () {

    // Define Navigate and Dispatch
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Define Local State
    const [comments, setComments] = useState('');

    // Handle Button Click
    function handleButtonClick () {
        dispatch({
            type: 'SET_COMMENTS',
            payload: comments
        })
        goToNextPage('/review');
    }

    // Navigate to Next Page
    // Perhaps a DRY opportunity next week for this function?
    function goToNextPage(path) {
        navigate(path);
    };

    // Render Elements on the DOM
    return (
        <div>
            <p>Please leave some comments. This step is optional.</p>
            <input 
                type="text"
                value={ comments } 
                onChange={(event) => setComments(event.target.value)}
            />
            <button onClick={ handleButtonClick }>Next</button>
        </div>
    )
}

// Export Component
export default CommentsForm;