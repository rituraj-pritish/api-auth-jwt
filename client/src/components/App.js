import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from './NavBar';
import Homepage from './Homepage';
import Dashboard from './Dashboard';
import Form from './form/Form';
import CustomError from './CustomError';
import GoogleSuccessRedirect from './success-redirect/GoogleSuccessRedirect';
import ProtectedRoute from '../HOCs/ProtectedRoute';

const App = ({ error, isAuthenticated }) => {
  return (
    <Router>
      <NavBar />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <ProtectedRoute exact path='/dashboard' component={Dashboard} />
          <Route
            exact
            path='/success-redirect'
            component={GoogleSuccessRedirect}
          />
          <Route
            path='/sign'
            render={() => (isAuthenticated ? <Redirect to='/' /> : <Form />)}
          />
        </Switch>
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
