import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
//tests
import { updateTrack, fetchTrack } from './actions/track_actions';
import { updateTrackPlays, likeTrack } from './actions/track_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  //tests
  window.updateTrack = updateTrack;
  window.fetchTrack = fetchTrack;
  window.likeTrack = likeTrack;

  ReactDOM.render(<Root />, root);
})
