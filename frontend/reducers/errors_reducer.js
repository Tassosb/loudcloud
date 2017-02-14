import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import { CLEAR_ERRORS } from '../actions/errors_actions';

const defaultState = {
  session: {}
};

const errorsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return Object.assign({}, state, {session: action.errors});
    case CLEAR_ERRORS:
      return defaultState;
    default:
      return state;
  };
};

export default errorsReducer;
