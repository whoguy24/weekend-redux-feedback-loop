// INITIALIZE REACT, REDUX, APP AND OTHER NONSENSE
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware  } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// CREATE REDUCERS

// Feeling Rating Reducer
const feelingRating = (state = {}, action) => {
    return state;
}

// Feeling Rating Reducer
const supportRating = (state = {}, action) => {
    return state;
}

// Feeling Rating Reducer
const understandingRating = (state = {}, action) => {
    return state;
}

// Feeling Rating Reducer
const comments = (state = {}, action) => {
    return state;
}

// Create Redux Store
const storeInstance = createStore(
    combineReducers({
        feelingRating,
        supportRating,
        understandingRating,
        comments
    }),
    applyMiddleware( logger )
);

// Wrap App.jsx in Provider Component
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();