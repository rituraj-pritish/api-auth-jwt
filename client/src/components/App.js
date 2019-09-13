import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from './NavBar';
import Homepage from './Homepage';
import Dashboard from './Dashboard';
import Form from './form/Form';
import CustomError from './CustomError';
import GoogleSuccessRedirect from './success-redirect/GoogleSuccessRedirect';

const App = ({ error, isAuthenticated }) => {
  return (
    <Router>
      <NavBar />
      <div className='container'>
        <Route exact path='/' component={Homepage} />
        <Route
          exact
          path='/dashboard'
          component={isAuthenticated ? Dashboard : Form}
        />
        <Route
          exact
          path='/success-redirect'
          component={GoogleSuccessRedirect}
        />

        <CustomError error={error} />
      </div>
    </Router>
  );
};

const mapStateToProps = state => ({
  error: state.auth.errorMessage,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(App);
