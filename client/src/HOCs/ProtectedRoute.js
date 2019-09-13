import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = ({isAuthenticated,component: Component, ...rest}) => {

  return (
    
    <Route {...rest} 
      render={props => {
        if (isAuthenticated) {
          return (<Component {...props} />);
        } else {
          return (<Redirect to={{ pathname: '/', state: {from: props.location}}} />);
        }
      }}
    />
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(ProtectedRoute);

//todo signup page route setup