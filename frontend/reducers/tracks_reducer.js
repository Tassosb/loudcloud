import { RECEIVE_TRACKS,
         RECEIVE_TRACK,
         PLAY_TRACK,
         RECEIVE_TRACK_LIKE,
         REMOVE_TRACK_LIKE } from '../actions/track_actions';
import { RECEIVE_CURRENT_TRACK } from '../actions/current_track_actions';


const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  let track;
  switch(action.type) {
    case RECEIVE_TRACKS:
      return action.tracks;
    case RECEIVE_TRACK:
      return Object.assign({}, state, {[action.track.id]: action.track});
    case PLAY_TRACK:
      track = state[action.trackId];
      let playedTrack = Object.assign({}, track, {num_plays: track.num_plays + 1});
      return Object.assign({}, state, {[action.trackId]: playedTrack});
    case RECEIVE_TRACK_LIKE:
      track = state[action.trackId];
      let likedTrack = Object.assign(
        {},
        track,
        {num_likes: track.num_likes + 1, liked_by_current_user: true}
      );
      return Object.assign({}, state, {[action.trackId]: likedTrack});
    case REMOVE_TRACK_LIKE:
      track = state[action.trackId];
      let unlikedTrack = Object.assign(
        {},
        track,
        {num_likes: track.num_likes - 1, liked_by_current_user: false}
      );
      return Object.assign({}, state, {[action.trackId]: unlikedTrack});
    default:
      return state;
  }
}

export default tracksReducer;
