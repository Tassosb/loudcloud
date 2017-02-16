import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import { fetchTracks } from './actions/track_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  window.fetchTracks = fetchTracks;

  ReactDOM.render(<Root />, root);
})
