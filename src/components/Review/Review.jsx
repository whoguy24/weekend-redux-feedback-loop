/////////////////////////
/// IMPORT COMPONENTS ///
/////////////////////////

import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/////////////////////////////////
/// DEFINE COMPONENT FUNCTION ///
/////////////////////////////////

function Review () {

    // Define Navigate and Dispatch
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Define Redux Reducers
    const feedback = useSelector((store) => store.feedbackReducer);

    // Handle Button Click
    function handleButtonClick () {
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback
        })
        .then((res) => {  
            dispatch({
                type: 'CLEAR_FEEDBACK',
            })
        })
        goToNextPage('/thank-you');
    }

    // Navigate to Next Page
    // Perhaps a DRY opportunity next week for this function?
    function goToNextPage(path) {
        navigate(path);
    };

    // Render Elements on the DOM
    return (
        <div>
            <p>Current Feedback:</p>
            <ul>
                <li>Feeling = {feedback.feeling}</li>
                <li>Understanding = {feedback.understanding}</li>
                <li>Support = {feedback.support}</li>
                <li>TOS Essay = "{feedback.goof}"</li>
                <li>Comments = "{feedback.comments}"</li>
            </ul>
            <button onClick={ handleButtonClick }>Submit</button>
        </div>
    )
}

// Export Component
export default Review;