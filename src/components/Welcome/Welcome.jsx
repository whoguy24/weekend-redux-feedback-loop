/////////////////////////
/// IMPORT COMPONENTS ///
/////////////////////////

import React from 'react';
import { useNavigate } from 'react-router-dom';

/////////////////////////////////
/// DEFINE COMPONENT FUNCTION ///
/////////////////////////////////

function Welcome () {

    // Define Navigation for Button
    const navigate = useNavigate();

    // Handle Next Button
    function goToNextPage() {
        navigate('/feeling');
    };

    // Render DOM
    return (
        <div>
            <p>Welcome to Feedback Form!</p>
            <button onClick={ goToNextPage }>Next</button>
        </div>
    )
}

// Export Component
export default Welcome;