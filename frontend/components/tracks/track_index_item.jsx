import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { receiveCurrentTrack } from '../../actions/current_track_actions';
import PlayButton from '../buttons/play_button';

const TrackStats = ({ track, currentUser }) => {
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
            <button className='edit-track-button'>
              <i className="fa fa-pencil" aria-hidden="true"></i>
              Edit
            </button>
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

class TrackIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render () {
    const { track, currentUser } = this.props;

    return (
      <li className='track-index-item'>
        <div className='track-index-item-flex'>
          <Link to={`/users/${track.artist.id}`}>
            <div className='image-tile-medium'>
              <img src={ track.image_url } />
            </div>
          </Link>
          <div className='track-details'>
            <div className='track-item-top'>

              <div className='index-play-button'>
                <PlayButton size='regular'
                  trackQueuePos={ track.queuePos }
                  trackId={ track.id }/>
              </div>
              <div className='track-item-info'>
                <Link to={`/users/${track.artist.id}`}>
                  <h2>{ track.artist.name }</h2>
                </Link>
                <h3>{ track.title }</h3>
              </div>
            </div>
            <div className='waveform-small'>
            </div>
            <TrackStats track={ track }
              currentUser={ currentUser }/>
          </div>
        </div>
      </li>
    )
  }
}

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
})

export default connect (
  mapStateToProps
)(TrackIndexItem);
