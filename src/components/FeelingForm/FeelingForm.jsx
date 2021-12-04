/////////////////////////
/// IMPORT COMPONENTS ///
/////////////////////////

import React from 'react';
import { useNavigate } from 'react-router-dom';

/////////////////////////////////
/// DEFINE COMPONENT FUNCTION ///
/////////////////////////////////

function FeelingForm () {

    // Define Navigation for Button
    const navigate = useNavigate();

    // Handle Next Button
    function goToNextPage() {
        navigate('/understanding');
    };

    return (
        <div>
            <p>Feeling Form.</p>
            <button onClick={ goToNextPage }>Next</button>
        </div>
    )
}

// Export Component
export default FeelingForm;