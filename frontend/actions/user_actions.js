import * as APIUtil from '../util/user_api_util';

export const RECEIVE_USER_IN_VIEW = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveUser = (user) => ({
  type: RECEIVE_USER_IN_VIEW,
  user
});

export const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const updateUser = (user) => {
  return APIUtil.updateUser(user)
    .then((user) => receiveUser(user),
          (errors) => receiveUserErrors(errors));
};
