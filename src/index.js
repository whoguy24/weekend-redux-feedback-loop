///////////////////////////////////////////////////////
/// INITIALIZE REACT, REDUX, APP AND OTHER NONSENSE ///
///////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

///////////////////////
/// CREATE REDUCERS ///
///////////////////////

// Feedback Survey Reducer
// feedback = { feeling: '4', understanding: '2', support: '5', comments: 'Things are A-OK! 👌' }
const feedbackReducer = (state = {}, action) => {

    // Build new feedback object
    const updatedFeedback = {...state};

    // Update property based the desired action
    switch (action.type) {
        case 'SET_FEELING':
            updatedFeedback.feeling = action.payload;
            return  updatedFeedback;
        case 'SET_UNDERSTANDING':
            updatedFeedback.understanding = action.payload;
            return  updatedFeedback;
        case 'SET_SUPPORT':
            updatedFeedback.support = action.payload;
            return  updatedFeedback;
        case 'SET_COMMENTS':
            updatedFeedback.comments = action.payload;
            return  updatedFeedback;
        case 'CLEAR_FEEDBACK':
            updatedFeedback.feeling = '';
            updatedFeedback.understanding = '';
            updatedFeedback.support = '';
            updatedFeedback.comments = '';
            return  updatedFeedback;
        default:
            return state;
    }

}

//////////////////////////
/// CREATE REDUX STORE ///
//////////////////////////

// Combine Reducers into Store
// Apply Redux Logger
const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware( logger )
);

// Wrap App.jsx in Provider Component
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();