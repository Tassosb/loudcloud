import React from 'react';
import { connect } from 'react-redux';
import LogInButton from '../buttons/log_in_button';
import SignUpButton from '../buttons/sign_up_button';

class NavBar extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='nav-bar'>
        <div className='nav-logo'>
          <img src={ logoWithText } />
        </div>
        <div className='nav-bar-buttons'>
          <LogInButton />
          <span>or</span>
          <SignUpButton />
        </div>
      </div>
    )
  }
}

export default NavBar;
