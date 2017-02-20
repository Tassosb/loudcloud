import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { receiveModal } from '../../actions/modal_actions';

const SplashUploadButton = ({ router, openLoginForm }) => {

  const handleClick = (e) => {
    e.preventDefault();
    openLoginForm();
    router.push('/upload');
  }

  return (
    <button onClick={ handleClick } className='splash-upload-button'>
      Upload your own
    </button>
  )
}


const mapDispatchToProps = (dispatch) => ({
  openLoginForm: () => dispatch(receiveModal('logIn'))
})

export default connect(
  null,
  mapDispatchToProps
)(withRouter(SplashUploadButton));
