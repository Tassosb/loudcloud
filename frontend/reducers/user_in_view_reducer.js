import { RECEIVE_USER_IN_VIEW } from '../actions/user_actions';

const defaultState = {
  id: 0,
  name: '',
  email: '',
  location: '',
  image_url: ''
}

const userInViewReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_IN_VIEW:
      const newUser = {};
      Object.keys(action.user).forEach((attr) => {
        newUser[attr] = action.user[attr] || defaultState[attr]
      });
      return newUser;
    default:
      return state;
  }
}

export default userInViewReducer;
