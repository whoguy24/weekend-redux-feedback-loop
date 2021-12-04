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

    // Render Elements on the DOM
    return (
        <div>
            <p>Your feedback has been submitted. Thank you!</p>
            <button onClick = {() => { navigate('/') }}>Done</button>
        </div>
    )
}

// Export Component
export default ThankYou;