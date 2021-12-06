/////////////////////////////////////////
/// IMPORT STYLES, ROUTER, COMPONENTS ///
/////////////////////////////////////////

// Styles
import './App.css';

// Import Router Nonsense
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

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
import Admin from '../Admin/Admin.jsx';

/////////////////////////////////
/// DEFINE COMPONENT FUNCTION ///
/////////////////////////////////

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/feedback'
    })
    .then((res) => {
      const feedbackList = res.data;
      dispatch({
        type: 'SET_FEEDBACK_LIST',
        payload: feedbackList
      })
    })
  }, [])
  
  // Render DOM
  return (
    <div className='App'>

      {/* Define header */}
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
      </header>

      {/* Define Router Navigation */}
      <Router>

        {/* Direct links for development purposes */}
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
          <li>
            <Link to="/admin">Admin</Link>
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
          <Route path="/admin" element={<Admin />} />
        </Routes>

      </Router>

    </div>
  );
}

// Export Component
export default App;