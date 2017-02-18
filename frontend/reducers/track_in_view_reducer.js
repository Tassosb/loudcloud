import { RECEIVE_TRACK_IN_VIEW } from '../actions/track_actions';

const defaultState = {
  id: 0,
  title: "",
  audio_url: "",
  image_url: "",
  credits: "",
  artist_id: 0,
  comments: {}
}

const trackInViewReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TRACK_IN_VIEW:
      return action.track;
    default:
      return state;
  }
}

export default trackInViewReducer;
