import React from 'react';
import { connect } from 'react-redux';
import { unlikeTrack, likeTrack } from '../../actions/track_actions';


const LikeButton = ({ track, currentUser, likeTrack, unlikeTrack }) => {

  const handleClick = (e) => {
    if (!currentUser) { return; }
    e.preventDefault();
    if (!track.liked_by_current_user) {
      likeTrack(track, currentUser.id);
    } else {
      unlikeTrack(track, currentUser.id);
    }
  }

  const klass = track.liked_by_current_user ? ' liked' : ''

  return (
    <button onClick={ handleClick } className={'like-button' + klass}>
      <i className="fa fa-heart" aria-hidden="true"></i>
      <span>{ track.num_likes }</span>
    </button>
  )
}

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  likeTrack: (track, userId) => dispatch(likeTrack(track, userId)),
  unlikeTrack: (track, userId) => dispatch(unlikeTrack(track, userId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeButton);
