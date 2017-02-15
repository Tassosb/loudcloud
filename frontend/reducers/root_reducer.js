import { combineReducers } from 'redux'
import errors from './errors_reducer';
import session from './session_reducer';
import modal from './modal_reducer';

const rootReducer = combineReducers({
  errors,
  session,
  modal
});

export default rootReducer;
