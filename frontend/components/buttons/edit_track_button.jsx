import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { receiveModal } from '../../actions/modal_actions';
import { receiveTrackInView } from '../../actions/track_actions';

const EditTrackButton = ({ showEditTrackForm, track,
                            receiveTrackInView, router }) => {
  const handleClick = (e) => {
    e.preventDefault();
    receiveTrackInView(track);
    router.push(`tracks/${track.id}`)
    showEditTrackForm();
  }
  return (
    <button
      className='edit-track-button'
      onClick={ handleClick }>
      <i className="fa fa-pencil" aria-hidden="true"></i>
      Edit
    </button>
  );
}

const mapDispatchToProps = (dispatch) => ({
  showEditTrackForm: () => dispatch(receiveModal('editTrack')),
  receiveTrackInView: (track) => dispatch(receiveTrackInView(track))
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(EditTrackButton));
