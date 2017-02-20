import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deleteTrack } from '../../actions/track_actions';
import { receiveModal } from '../../actions/modal_actions';

const DeleteTrackForm = ({ track, deleteTrack, clearModal, router }) => {

  const handleDelete = () => {
    deleteTrack(track.id)
      .then(() => router.push('profile'));
  }

  return (
    <div className='delete-track-form'>
      <h1>Delete Track?</h1>
      <p>
        Are you sure you want to delete this track?
      </p>
      <div>
        <span onClick={ clearModal }>Cancel</span>
        <span onClick={ handleDelete }>Delete</span>
      </div>
    </div>
  );
}

const mapStateToProps = ({ trackInView }) => ({
  track: trackInView
});

const mapDispatchToProps = (dispatch) => ({
  deleteTrack: (trackId) => dispatch(deleteTrack(trackId)),
  clearModal: () => dispatch(receiveModal(''))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DeleteTrackForm));
