import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
//tests
import { updateTrack } from './actions/track_actions';
import { updateTrackPlays } from './actions/track_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  //tests
  window.updateTrack = updateTrack;
  window.updateTrackPlays = updateTrackPlays;

  ReactDOM.render(<Root />, root);
})
