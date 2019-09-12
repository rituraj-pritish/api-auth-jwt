import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link className='navbar-brand' to='/'>
        <img
          src=''
          width='30'
          height='30'
          class='d-inline-block align-top'
          alt=''
        />
        NavBar
      </Link>
      <div>
        <ul className='nav'>
          <li className='nav item'>
            <Link to='/dashboard' className='nav-link'>Dashboard</Link>
          </li>
          <li className='nav-item'>
            <Link to='/dashboard' className='nav-link'>Sign In/ Sign UP</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
