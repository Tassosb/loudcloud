import { RECEIVE_USER_IN_VIEW } from '../actions/user_actions';

const defaultState = {
  id: 0,
  name: '',
  email: '',
  location: ''
}

const userInViewReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_IN_VIEW:
      return action.user;
    default:
      return state;
  }
}
