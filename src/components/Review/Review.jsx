/////////////////////////
/// IMPORT COMPONENTS ///
/////////////////////////

import React from 'react';
import { useNavigate } from 'react-router-dom';

/////////////////////////////////
/// DEFINE COMPONENT FUNCTION ///
/////////////////////////////////

function Review () {

    // Define Navigate and Dispatch
    const navigate = useNavigate();

    // Handle Button Click
    function handleButtonClick () {
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
            <button onClick={ handleButtonClick }>Submit</button>
        </div>
    )
}

// Export Component
export default Review;