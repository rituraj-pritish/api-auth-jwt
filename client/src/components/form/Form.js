import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Form.style.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
  };

  const [signInActive, updateSignInActive] = useState(true);
  const slide = () => {
    updateSignInActive(!signInActive);
  };
  const containerClass = signInActive
    ? 'left-panel-active'
    : 'right-panel-active';

  return (
      <div className={`container ${containerClass} `} id='container'>
        <div className='form-container sign-up-container'>
          <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <div className='social-container'>
              <Link to='/auth/facebook' className='social'>
                <i className='fab fa-facebook-f'></i>
              </Link>
              <Link href='#' className='social'>
                <i className='fab fa-google-g'></i>
              </Link>
            </div>
            <span>or use your email for registration</span>
            <input
              type='text'
              placeholder='Name'
              name='name'
              value={name}
              onChange={handleChange}
            />
            <input
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={handleChange}
            />
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={handleChange}
            />
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
              value={password2}
              onChange={handleChange}
            />
            <button>Sign Up</button>
          </form>
        </div>
        <div className='form-container sign-in-container'>
          <form onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <div className='social-container'>
              <Link to='/auth/facebook' className='social'>
                <i className='fab fa-facebook-f'></i>
              </Link>
              <Link to='/auth/google' className='social'>
                <i className='fab fa-google-g'></i>
              </Link>
            </div>
            <span>or use your account</span>
            <input
              type='email'
              placeholder='Email'
              name='email'
              value={email}
              onChange={handleChange}
            />
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={handleChange}
            />
            <a href='#'>Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className='overlay-container'>
          <div className='overlay'>
            <div className='overlay-panel overlay-left'>
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className='ghost' id='signIn' onClick={slide}>
                Sign In
              </button>
            </div>
            <div className='overlay-panel overlay-right'>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className='ghost' id='signUp' onClick={slide}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Form;
