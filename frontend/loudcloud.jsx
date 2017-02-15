import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import { logIn, signUp, logOut } from './actions/session_actions';
import { clearErrors } from './actions/errors_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  ReactDOM.render(<Root />, root);
})
