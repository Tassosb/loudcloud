import { RECEIVE_TRACKS, RECEIVE_TRACK, PLAY_TRACK } from '../actions/track_actions';
import { RECEIVE_CURRENT_TRACK } from '../actions/current_track_actions';


const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TRACKS:
      return action.tracks;
    case RECEIVE_TRACK:
      return Object.assign({}, state, {[action.track.id]: action.track});
    case PLAY_TRACK:
      const track = state[action.trackId];
      let playedTrack = Object.assign({}, track, {num_plays: track.num_plays + 1});
      return Object.assign({}, state, {[action.trackId]: playedTrack});
    default:
      return state;
  }
}

export default tracksReducer;
