/////////////////////////
/// IMPORT COMPONENTS ///
/////////////////////////

import React from 'react';
import { useNavigate } from 'react-router-dom';

/////////////////////////////////
/// DEFINE COMPONENT FUNCTION ///
/////////////////////////////////

function Review () {

    // Define Navigation for Button
    const navigate = useNavigate();

    // Handle Next Button
    function goToNextPage() {
        navigate('/thank-you');
    };

    return (
        <div>
            <p>Review</p>
            <button onClick={ goToNextPage }>Submit</button>
        </div>
    )
}

// Export Component
export default Review;