import { RECEIVE_CURRENT_TRACK } from '../actions/current_track_actions';

const elapsedTimesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_TRACK:
      const { track, elapsedTime } = action.currentTrack
      if (track !== undefined) {
        const adjusted = elapsedTime % track.duration;
        return Object.assign(
          {},
          state,
          {[track.id]: adjusted}
        );
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default elapsedTimesReducer;
