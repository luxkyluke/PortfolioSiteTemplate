import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../components/App.jsx';

const Root = () => {
  return (
  	/*basename={process.env.PUBLIC_URL}*/
    <Router basename={process.env.PUBLIC_URL}>
      <App/>
    </Router>
  );
};

export default Root;

