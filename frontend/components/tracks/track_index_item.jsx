import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { receiveCurrentTrack } from '../../actions/current_track_actions';
import PlayButton from '../buttons/play_button';

class TrackIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render () {
    const { track } = this.props;

    return (
      <li className='track-index-item'>
        <div className='track-index-item-flex'>
          <Link to={`/users/${track.artist.id}`}>
            <div className='image-tile-medium'>
              <img src={ track.artist.image_url } />
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
            <div className='track-stats'>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default TrackIndexItem;
