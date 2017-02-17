import React from 'react';
import { connect } from 'react-redux';
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
          <div className='image-tile-medium'>
            <img src={ track.artist.image_url } />
          </div>
          <div className='track-details'>
            <div className='track-item-top'>

              <div className='index-play-button'>
                <PlayButton size='regular' trackQueuePos={ track.queuePos } />
              </div>
              <div className='track-item-info'>
                <h2>{ track.artist.name }</h2>
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
