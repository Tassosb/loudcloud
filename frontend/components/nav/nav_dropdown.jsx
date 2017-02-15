import React from 'react';
import { connect } from 'react-redux';
import { LogOutButton } from '../buttons/log_out_button';

const NavDropDown = ({ loggedIn }) => {
  return (
    <ul className='nav-dropdown'>
      <ul>
        <li><span>Profile</span></li>
        { loggedIn && <li><LogOutButton /></li>}
      </ul>
    </ul>
  )
}
