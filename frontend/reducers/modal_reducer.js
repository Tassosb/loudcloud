import { RECEIVE_MODAL } from '../actions/modal_actions';

const modalReducer = (state = '', action) => {
  switch(action.type) {
    case RECEIVE_MODAL:
      return action.modal;
    default:
      return state;
  }
}

export default modalReducer;
