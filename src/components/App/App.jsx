/////////////////////////////////////////
/// IMPORT STYLES, ROUTER, COMPONENTS ///
/////////////////////////////////////////

// Styles
import './App.css';

// Import Router Nonsense
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Components
import React from 'react';
import Welcome from '../Welcome/Welcome.jsx';
import FeelingForm from '../FeelingForm/FeelingForm.jsx';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm.jsx';
import SupportForm from '../SupportForm/SupportForm.jsx';
import CommentsForm from '../CommentsForm/CommentsForm.jsx';

/////////////////////////////////
/// DEFINE COMPONENT FUNCTION ///
/////////////////////////////////

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
      </header>
      <Router>

       <ul>
          <li>
            <Link to="/">Welcome</Link>
          </li>
          <li>
            <Link to="/feeling">Feeling</Link>
          </li>
          <li>
            <Link to="/understanding">Understanding</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Link to="/comments">Comments</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/feeling" element={<FeelingForm />} />
          <Route path="/understanding" element={<UnderstandingForm />} />
          <Route path="/support" element={<SupportForm />} />
          <Route path="/comments" element={<CommentsForm />} />
        </Routes>

      </Router>
    </div>
  );
}

// Export Component
export default App;