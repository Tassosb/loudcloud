import { RECEIVE_CURRENT_TRACK } from '../actions/current_track_actions';

const defaultState = {
  currentQueuePos: 0,
  playing: false,
  restart: false,
  elapsedTime: 0,
  duration: 0,
  changeTime: false
}

const currentTrackReducer = (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_TRACK:
      return Object.assign({}, state, action.currentTrack);
    default:
      return state;
  }
}

export default currentTrackReducer;
