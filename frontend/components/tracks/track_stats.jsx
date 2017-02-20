import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import EditTrackButton from '../buttons/edit_track_button';
import DeleteTrackButton from '../buttons/delete_track_button';

const TrackStats = ({ track, currentUser, showDelete }) => {
  let isOwnSong = currentUser ?
    (track.artist.id === currentUser.id) : false;

  return (
    <div className='track-stats flex-row'>
      <div className='track-stats-left'>
        <div className='flex-item'>
          <button className='like-button'>
            <i className="fa fa-heart" aria-hidden="true"></i>
            <span>{ Math.floor(Math.random() * 100)}</span>
          </button>
          { isOwnSong &&
            <EditTrackButton track={ track } />
          }
          { showDelete && isOwnSong &&
            <DeleteTrackButton track={ track } />
          }
        </div>
      </div>
      <div className='track-stats-right'>
        <div className='flex-item'>
          <i className='fa fa-play' aria-hidden='true'></i>
          <span>{ track.num_plays }</span>
        </div>
        <Link className='flex-row' to='/'>
          <i className="fa fa-comment" aria-hidden="true"></i>
          <span>{ Math.floor(Math.random() * 100)}</span>
        </Link>
      </div>
    </div>
  )
}


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
})

export default connect (
  mapStateToProps
)(TrackStats);
