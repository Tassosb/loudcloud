import { RECEIVE_TRACKS, RECEIVE_TRACK } from '../actions/track_actions';
import { RECEIVE_CURRENT_TRACK } from '../actions/current_track_actions';


const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TRACKS:
      return action.tracks;
    case RECEIVE_TRACK:
      return Object.assign({}, state, {[action.track.id]: action.track});
    default:
      return state;
  }
}

export default tracksReducer;
