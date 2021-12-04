/////////////////////////
/// IMPORT COMPONENTS ///
/////////////////////////

import React from 'react';
import { useNavigate } from 'react-router-dom';

/////////////////////////////////
/// DEFINE COMPONENT FUNCTION ///
/////////////////////////////////

function UnderstandingForm () {

    // Define Navigation for Button
    const navigate = useNavigate();

    // Handle Next Button
    function goToNextPage() {
        navigate('/support');
    };

    return (
        <div>
            <p>Understanding Form.</p>
            <button onClick={ goToNextPage }>Next</button>
        </div>
    )
}

// Export Component
export default UnderstandingForm;