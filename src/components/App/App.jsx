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
import Goof from '../Goof/Goof.jsx';
import CommentsForm from '../CommentsForm/CommentsForm.jsx';
import Review from '../Review/Review.jsx';
import ThankYou from '../ThankYou/ThankYou.jsx';

/////////////////////////////////
/// DEFINE COMPONENT FUNCTION ///
/////////////////////////////////

function App() {
  
  // Render DOM
  return (
    <div className='App'>

      {/* Define header */}
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
      </header>

      {/* Define Router Navigation */}
      <Router>

        {/* Links for development purposes */}
        {/* <ul>
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
            <Link to="/goof">Goof</Link>
          </li>
          <li>
            <Link to="/comments">Comments</Link>
          </li>
          <li>
            <Link to="/review">Review</Link>
          </li>
          <li>
            <Link to="/thank-you">Thank You</Link>
          </li>
        </ul> */}

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/feeling" element={<FeelingForm />} />
          <Route path="/understanding" element={<UnderstandingForm />} />
          <Route path="/support" element={<SupportForm />} />
          <Route path="/goof" element={<Goof />} />
          <Route path="/comments" element={<CommentsForm />} />
          <Route path="/review" element={<Review />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>

      </Router>

    </div>
  );
}

// Export Component
export default App;