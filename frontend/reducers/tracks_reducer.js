import { RECEIVE_TRACKS } from '../actions/track_actions';



const tracksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TRACKS:

      return action.tracks;
    default:
      return state;
  }
}

export default tracksReducer;
