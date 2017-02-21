import { RECEIVE_TRACK_IN_VIEW } from '../actions/track_actions';
import { RECEIVE_TRACK_COMMENT, REMOVE_TRACK_COMMENT } from '../actions/comment_actions';

const defaultState = {
  id: 0,
  title: "",
  audio_url: "",
  image_url: "",
  credits: "",
  artist: {},
  comments: {}
}

const trackInViewReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newTrack;
  switch(action.type) {
    case RECEIVE_TRACK_IN_VIEW:
      return action.track;
    case RECEIVE_TRACK_COMMENT:
      newTrack = Object.assign({}, state);
      newTrack.comments[action.comment.id] = action.comment;
      return newTrack;
    case REMOVE_TRACK_COMMENT:
      newTrack = Object.assign({}, state);
      delete newTrack.comments[action.commentId];
      return newTrack;
    default:
      return state;
  }
}

export default trackInViewReducer;
