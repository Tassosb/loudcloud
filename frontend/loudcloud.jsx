import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import { fetchTracks } from './actions/track_actions';
import { receivePlayQueue } from './actions/play_queue_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  window.fetchTracks = fetchTracks;
  window.receivePlayQueue = receivePlayQueue;

  ReactDOM.render(<Root />, root);
})
