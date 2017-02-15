import * as APIUtil from '../util/session_api_util.js';
import { receiveModal } from './modal_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const clearSessionErrors = () => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: {}
})

export const logIn = (user) => dispatch => {
  return APIUtil.login(user)
    .then((currentUser) => {
      dispatch(receiveCurrentUser(currentUser))
      dispatch(receiveModal(''))
    },
      (errors) => dispatch(receiveSessionErrors(errors.responseJSON)));
};

export const signUp = (user) => dispatch => {
  return APIUtil.signup(user)
    .then((currentUser) => {
      dispatch(receiveCurrentUser(currentUser))
      dispatch(receiveModal(''))
    },
      (errors) => dispatch(receiveSessionErrors(errors.responseJSON)));
};

export const logOut = () => dispatch => {
  return APIUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)));
};
