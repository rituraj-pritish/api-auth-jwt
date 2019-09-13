import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { oAuth } from '../../actions/auth';
import { Redirect } from 'react-router-dom';

//todo change name to only redirect
//if token is not accessed, return wnt wrong message

const GoogleSuccessRedirect = ({ oAuth }) => {
  let redirect = false;
  useEffect(() => {
    oAuth();
    redirect = true;
  }, []);
  return <Redirect to='/' />
  
};

export default connect(
  null,
  { oAuth }
)(GoogleSuccessRedirect);
