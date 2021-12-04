/////////////////////////
/// IMPORT COMPONENTS ///
/////////////////////////

import React from 'react';
import { useNavigate } from 'react-router-dom';

/////////////////////////////////
/// DEFINE COMPONENT FUNCTION ///
/////////////////////////////////

function CommentsForm () {

    // Define Navigation for Button
    const navigate = useNavigate();

    // Handle Next Button
    function goToNextPage() {
        navigate('/review');
    };

    return (
        <div>
            <p>Comments Form.</p>
            <button onClick={ goToNextPage }>Next</button>
        </div>
    )
}

// Export Component
export default CommentsForm;