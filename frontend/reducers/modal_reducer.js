import { RECEIVE_MODAL } from '../actions/modal_actions';

const modalReducer = (state = '', action) => {
  switch(action.type) {
    case RECEIVE_MODAL:
    debugger
      return action.modal;
    default:
      return '';
  }
}

export default modalReducer;
