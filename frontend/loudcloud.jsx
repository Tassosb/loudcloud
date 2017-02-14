import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';
import { logIn, signUp, logOut } from './actions/session_actions';
import { clearErrors } from './actions/errors_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  ReactDOM.render(<Root store={ store }/ >, root);
  window.store = store;
})
