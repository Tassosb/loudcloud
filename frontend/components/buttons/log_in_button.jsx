import React from 'react';
import { connect } from 'react-redux';
import { receiveModal } from '../../actions/modal_actions';

const LogInButton = ({ showLogIn }) => {
  const handleClick = (e) => {
    e.preventDefault();
    showLogIn();
  }

  return (
    <button
      className='log-in-button'
      onClick={ handleClick }>Sign in</button>
  );
}

const mapDispatchToProps = (dispatch) => ({
  showLogIn: () => dispatch(receiveModal('logIn'))
})

export default connect(
  null,
  mapDispatchToProps
)(LogInButton);
