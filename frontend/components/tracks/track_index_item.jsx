import React from 'react';
import { connect } from 'react-redux';
import { receiveCurrentTrack } from '../../actions/current_track_actions';
import PlayButton from '../buttons/play_button';

class TrackIndexItem extends React.Component{
  constructor(props) {
    super(props);

    this.handlePlayTrack = this.handlePlayTrack.bind(this);
    this.handlePauseTrack = this.handlePauseTrack.bind(this);
  }

  handlePlayTrack (e) {
    this.props.playTrack(this.props.track.queuePos);
  }

  handlePauseTrack (e) {
    this.props.pauseTrack(this.props.track.queuePos);
  }

  render () {
    const { track } = this.props;

    return (
      <li className='track-index-item'>
        <div className='track-index-item-flex'>
          <div className='image-tile-medium'>
            <img onClick={ this.handlePlayTrack } src={ track.artist.image_url } />
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

const mapDispatchToProps = (dispatch) => ({
  playTrack: (trackQueuePos) => dispatch(receiveCurrentTrack({
    currentQueuePos: trackQueuePos, playing: true})),
  pauseTrack: (trackQueuPos) => dispatch(receiveCurrentTrack({
    currentQueuePos: trackQueuPos, playing: false}))
})

export default connect(
null,
mapDispatchToProps
)(TrackIndexItem);
