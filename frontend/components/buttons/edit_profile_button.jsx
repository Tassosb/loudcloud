import React from 'react';
import { connect } from 'react-redux';
import { receiveModal } from '../../actions/modal_actions';

const EditProfileButton = ({ showEditProfileForm }) => {
  const handleClick = (e) => {
    e.preventDefault();
    showEditProfileForm();
  }
  return (
    <button
      className='edit-profile-button'
      onClick={ handleClick }>Edit</button>
  );
}

const mapDispatchToProps = (dispatch) => ({
  showEditProfileForm: () => dispatch(receiveModal('editProfile'))
});

export default connect(
  null,
  mapDispatchToProps
)(EditProfileButton);
