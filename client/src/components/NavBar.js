import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const NavBar = ({isAuthenticated}) => {
  console.log(isAuthenticated);
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark' style={{marginBottom: '30px'}}>
      <Link className='navbar-brand' to='/'>
        <img
          src=''
          width='30'
          height='30'
          className='d-inline-block align-top'
          alt=''
        />
        NavBar
      </Link>
      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav item'>
            <Link to='/dashboard' className='nav-link'>
              Dashboard
            </Link>
          </li>
        </ul>


          <ul className='nav navbar-nav ml-auto'>
          {isAuthenticated ? 
            <li className='nav item'>
              <Link to='/users/logout' className='nav-link'>
                Logout
              </Link>
            </li> :
            <li className='nav-item'>
            <Link to='/dashboard' className='nav-link'>
              Sign In/ Sign UP
            </Link>
          </li>}
        </ul>
      </div>
    </nav>
  );
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(NavBar);
