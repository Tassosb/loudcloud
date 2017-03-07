import { RECEIVE_TRACK_IN_VIEW,
         CLEAR_TRACK_IN_VIEW,
         RECEIVE_TRACK_LIKE,
         REMOVE_TRACK_LIKE,
         PLAY_TRACK } from '../actions/track_actions';
import { RECEIVE_TRACK_COMMENT, REMOVE_TRACK_COMMENT } from '../actions/comment_actions';

const defaultState = {
  id: 0,
  title: "",
  audio_url: "",
  image_url: "",
  credits: "",
  num_likes: 0,
  num_comments: 0,
  num_plays: 0,
  liked_by_current_user: false,
  artist: {},
  comments: {}
}

const trackInViewReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newTrack;
  switch(action.type) {
    case RECEIVE_TRACK_IN_VIEW:
      return Object.assign({}, defaultState, action.track);
    case RECEIVE_TRACK_COMMENT:
      newTrack = Object.assign({}, state);
      newTrack.comments[action.comment.id] = action.comment;
      newTrack.num_comments++
      return newTrack;
    case REMOVE_TRACK_COMMENT:
      newTrack = Object.assign({}, state);
      delete newTrack.comments[action.commentId];
      newTrack.num_comments--
      return newTrack;
    case PLAY_TRACK:
      return Object.assign({}, state, {num_plays: state.num_plays + 1});
    case RECEIVE_TRACK_LIKE:
      return Object.assign(
        {},
        state,
        {num_likes: state.num_likes + 1, liked_by_current_user: true}
      );
    case REMOVE_TRACK_LIKE:
      return Object.assign(
        {},
        state,
        {num_likes: state.num_likes - 1, liked_by_current_user: false}
      );
    default:
      return state;
  }
}

export default trackInViewReducer;
