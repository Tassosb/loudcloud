import * as APIUtil from '../util/comment_api_util.js';

export const RECEIVE_TRACK_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const REMOVE_TRACK_COMMENT = 'RECEIVE_TRACK_COMMENT';

export const receiveTrackComment = (comment) => ({
  type: RECEIVE_TRACK_COMMENT,
  comment
});

export const removeTrackComment = (commentId) => ({
  type: REMOVE_TRACK_COMMENT,
  commentId
});

export const receiveCommentErrors = (errors) => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
})

export const createComment = (comment) => dispatch => {
  return APIUtil.createComment(comment)
    .then((comment) => {
      dispatch(receiveTrackComment(comment));
    },
      (errors) => dispatch(receiveCommentErrors(errors.responseJSON)));
}

export const deleteComment = (commentId) => dispatch => {
  return APIUtil.deleteComment(commentId)
    .then(() => dispatch(removeTrackComment(commentId)));
}
