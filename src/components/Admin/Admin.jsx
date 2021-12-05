/////////////////////////
/// IMPORT COMPONENTS ///
/////////////////////////

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/////////////////////////////////
/// DEFINE COMPONENT FUNCTION ///
/////////////////////////////////

function Admin () {

    // Define Navigate and Dispatch
    const navigate = useNavigate();

    // Define Redux Reducers
    const feedbackList = useSelector((store) => store.feedbackListReducer);

    // Handle Button Click
    function handleButtonClick() {
        navigate('/')
    }

    // Render Elements on the DOM
    return (
        <div>
            <h2>All Feedback</h2>



            <table>
                <thead>
                    <tr>
                        <td>Feeling</td>
                        <td>Understanding</td>
                        <td>Support</td>
                        <td>TOS Essay</td>
                        <td>Comments</td>
                        <td>Flagged</td>
                        <td>Date</td>
                    </tr>
                </thead>
                <tbody>  
                    {feedbackList.map((feedbackItem, id) => 
                        <tr key={id}>
                            <td>{feedbackItem.feeling}</td>
                            <td>{feedbackItem.understanding}</td>
                            <td>{feedbackItem.support}</td>
                            <td>{feedbackItem.goof}</td>
                            <td>{feedbackItem.comments}</td>
                            <td>{feedbackItem.flagged}</td>
                            <td>{feedbackItem.date}</td>
                        </tr>  
                    )}
                </tbody>
            </table>





            {/* <ul>
                {feedbackList.map((feedbackItem) => 
                    <li key={id}>{feedbackItem.feeling}</li>  
                )}
            </ul> */}



            <button onClick = {() => { handleButtonClick() }}>Done</button>
        </div>
    )
}

// Export Component
export default Admin;