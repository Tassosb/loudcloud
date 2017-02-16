import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER_IN_VIEW = 'RECEIVE_USER_IN_VIEW';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveUser = (user) => ({
  type: RECEIVE_USER_IN_VIEW,
  user
});

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const updateUser = (user) => dispatch => {
  return APIUtil.updateUser(user)
    .then((user) => dispatch(receiveUser(user)),
          (errors) => dispatch(receiveUserErrors(errors)));
};
