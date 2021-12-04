/////////////////////////
/// IMPORT COMPONENTS ///
/////////////////////////

import React from 'react';
import { useNavigate } from 'react-router-dom';

/////////////////////////////////
/// DEFINE COMPONENT FUNCTION ///
/////////////////////////////////

function ThankYou () {

    // Define Navigation for Button
    const navigate = useNavigate();

    // Handle Next Button
    function goToNextPage() {
        navigate('/');
    };

    return (
        <div>
            <p>Your feedback has been submitted.</p>
            <p>Thank you!</p>
            <button onClick={ goToNextPage }>Close</button>
        </div>
    )
}

// Export Component
export default ThankYou;