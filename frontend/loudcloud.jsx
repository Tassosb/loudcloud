import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import { fetchTracks } from './actions/track_actions';
import { receivePlayQueue } from './actions/play_queue_actions';
import { receiveCurrentTrack } from './actions/current_track_actions';
import { fetchUser } from './actions/user_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  window.fetchTracks = fetchTracks;
  window.receivePlayQueue = receivePlayQueue;
  window.receiveCurrentTrack = receiveCurrentTrack;
  window.fetchUser = fetchUser;

  ReactDOM.render(<Root />, root);
})
