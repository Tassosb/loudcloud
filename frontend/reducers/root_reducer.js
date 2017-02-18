import { combineReducers } from 'redux'
import errors from './errors_reducer';
import session from './session_reducer';
import modal from './modal_reducer';
import userInView from './user_in_view_reducer';
import tracks from './tracks_reducer';
import playQueue from './play_queue_reducer';
import currentTrack from './current_track_reducer';
import trackInView from './track_in_view_reducer';

const rootReducer = combineReducers({
  errors,
  session,
  modal,
  userInView,
  tracks,
  playQueue,
  currentTrack,
  trackInView
});

export default rootReducer;
