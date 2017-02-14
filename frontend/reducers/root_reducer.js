import { combineReducers } from 'redux'
import errors from './errors_reducer';
import session from './session_reducer';

const rootReducer = combineReducers({
  errors,
  session
});

export default rootReducer;
