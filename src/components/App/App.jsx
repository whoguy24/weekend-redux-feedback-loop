import React from 'react';
import axios from 'axios';
import './App.css';

// Import Components
import CommentsForm from '../CommentsForm/CommentsForm.jsx';
import FeelingForm from '../FeelingForm/FeelingForm.jsx';
import SupportForm from '../SupportForm/SupportForm.jsx';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm.jsx';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <CommentsForm />
      <FeelingForm />
      <SupportForm />
      <UnderstandingForm />
    </div>
  );
}

export default App;
