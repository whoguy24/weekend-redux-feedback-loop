/////////////////////////
/// IMPORT COMPONENTS ///
/////////////////////////

import React from 'react';
import { useNavigate } from 'react-router-dom';

/////////////////////////////////
/// DEFINE COMPONENT FUNCTION ///
/////////////////////////////////

function Goof () {

    // Define Navigation for Button
    const navigate = useNavigate();

    // Handle Next Button
    function goToNextPage() {
        navigate('/comments');
    };

    return (
        <div>
            <p>Goof</p>
            <button onClick={ goToNextPage }>Next</button>
        </div>
    )
}

// Export Component
export default Goof;