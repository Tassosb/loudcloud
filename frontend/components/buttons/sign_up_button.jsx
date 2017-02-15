import React from 'react';
import { connect } from 'react-redux';
import { receiveModal } from '../../actions/modal_actions';

const SignUpButton = ({ showSignUp }) => {
  const handleClick = (e) => {
    e.preventDefault();
    showSignUp();
  }

  return (
    <button
      className='sign-up-button'
      onClick={ handleClick }>Create account</button>
  );
}

const mapDispatchToProps = (dispatch) => ({
  showSignUp: () => dispatch(receiveModal('signUp'))
})

export default connect(
  null,
  mapDispatchToProps
)(SignUpButton);
