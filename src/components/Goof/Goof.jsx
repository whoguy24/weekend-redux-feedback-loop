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

function Goof () {

    // Define Navigate and Dispatch
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Define Local State
    const [goof, setGoof] = useState('');

    // Handle Button Click
    function handleButtonClick () {
        dispatch({
            type: 'SET_GOOF',
            payload: goof
        })
        goToNextPage('/comments');
    }

    // Navigate to Next Page
    // Perhaps a DRY opportunity next week for this function?
    function goToNextPage(path) {
        navigate(path);
    };

    // Render Elements on the DOM
    return (
        <div>
            <p>Please write a brief but thoughtful essay on the following topic:</p>
            <p>What ethical questions emerged from the popular television serial "Star Trek: The Original Series", and how do they apply to a 21st century worldview? Please utilize examples from the show.</p>
            <input 
                type="text"
                value={ goof } 
                onChange={(event) => setGoof(event.target.value)}
            />
            <button onClick={ handleButtonClick }>Next</button>
        </div>
    )
}

// Export Component
export default Goof;