import { receiveModal } from './modal_actions';
import { receiveCurrentUser } from './session_actions';
import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER_IN_VIEW = 'RECEIVE_USER_IN_VIEW';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveUserInView = (user) => ({
  type: RECEIVE_USER_IN_VIEW,
  user
});

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const updateUser = (formData, userId) => dispatch => {
  return APIUtil.updateUser(formData, userId)
    .then((user) => {
      dispatch(receiveUserInView(user))
      dispatch(receiveModal(''))
      dispatch(receiveCurrentUser(user))
    },
      (errors) => dispatch(receiveUserErrors(errors)));
};

export const fetchUser = (userId) => dispatch => {
  return APIUtil.fetchUser(userId)
    .then((user) => dispatch(receiveUserInView(user)));
};
