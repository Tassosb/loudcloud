import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
//tests
import { fetchSearchResults } from './actions/search_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  ReactDOM.render(<Root />, root);
})
