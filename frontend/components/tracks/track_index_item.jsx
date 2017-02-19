import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { receiveCurrentTrack } from '../../actions/current_track_actions';
import PlayButton from '../buttons/play_button';
import Waveform from '../waveform/waveform';
import TrackStats  from './track_stats';

class TrackIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render () {
    const { track, currentUser } = this.props;

    return (
      <li className='track-index-item'>
        <div className='track-index-item-flex'>
          <Link to={`/tracks/${track.id}`}>
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
                <Link to={`/tracks/${track.id}`}>
                  <h3>{ track.title }</h3>
                </Link>
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

//Waveform too slow!
// <Waveform track={ track } />

export default TrackIndexItem;
