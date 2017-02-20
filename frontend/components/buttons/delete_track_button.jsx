import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { receiveModal } from '../../actions/modal_actions';

const DeleteTrackButton = ({ showDeleteTrackForm }) => {
  const handleClick = (e) => {
    e.preventDefault();
    showDeleteTrackForm();
  }

  return (
    <button
      className='delete-track-button'
      onClick={ handleClick }>
      <i className="fa fa-trash-o" aria-hidden="true"></i>
      Delete track
    </button>
  );
}

const mapDispatchToProps = (dispatch) => ({
  showDeleteTrackForm: () => dispatch(receiveModal('deleteTrack'))
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(DeleteTrackButton));
