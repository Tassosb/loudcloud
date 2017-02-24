import { REQUEST_CURRENT_USER,
         RECEIVE_CURRENT_USER,
        RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import { REQUEST_TRACKS,
         REQUEST_TRACK_IN_VIEW,
         RECEIVE_TRACKS,
         RECEIVE_TRACK_IN_VIEW } from '../actions/track_actions';

const defaultState = {
  session: false,
  tracks: false,
  trackInView: false
}

const loadingReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case REQUEST_CURRENT_USER:
      return Object.assign({}, state, {session: true});
    case RECEIVE_CURRENT_USER:
    case RECEIVE_SESSION_ERRORS:
      return Object.assign({}, state, {session: false});
    case REQUEST_TRACKS:
      return Object.assign({}, state, {tracks: true});
    case RECEIVE_TRACKS:
      return Object.assign({}, state, {tracks: false});
    case REQUEST_TRACK_IN_VIEW:
      return Object.assign({}, state, {trackInView: true});
    case RECEIVE_TRACK_IN_VIEW:
      return Object.assign({}, state, {trackInView: false});
    default:
      return state;
  }
}

export default loadingReducer;
