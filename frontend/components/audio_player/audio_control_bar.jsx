import React from 'react';
import { connect } from 'react-redux';
import PlayButton from '../buttons/play_button';
import AudioElement from './audio_element';
import ProgressBar from './progress_bar';
import VolumeControl from './volume_control';
import CurrentTrackDetail from './current_track_detail';
import { receiveCurrentTrack } from '../../actions/current_track_actions';
import { receivePlayQueue } from '../../actions/play_queue_actions';

class AudioControlBar extends React.Component {
  constructor (props) {
    super(props);

    this.playNextSong = this.playNextSong.bind(this);
    this.handlePlayNext = this.handlePlayNext.bind(this);
    this.restartSong = this.restartSong.bind(this);
    this.playLastSong = this.playLastSong.bind(this);
  }

  getLastQueuePos () {
    let maxPos = 0;
    Object.keys(this.props.playQueue).forEach((pos) => {
     let posNum = parseInt(pos);
      if (posNum > maxPos) { maxPos = posNum }
    })

    return maxPos;
  }

  getFirstQueuePos () {
    let minPos = null;
    Object.keys(this.props.playQueue).forEach((pos) => {
     let posNum = parseInt(pos);
      if (!minPos || posNum < minPos) { minPos = posNum }
    })

    return minPos;
  }

  handlePlayNext (e) {
    this.playNextSong(false)
  }

  playNextSong (auto) {
    if (auto && Object.keys(this.props.playQueue).length === 1 ) {
      this.props.receiveCurrentTrack({playing: false})
      return;
    }

    if (auto) { this.props.receiveCurrentTrack({ elapsedTime: 0 }) }

    const lastQueuePos = this.getLastQueuePos();
    let currentQueuePos = (this.props.currentTrack.currentQueuePos + 1) % (lastQueuePos + 1)
    if (currentQueuePos === 0 ) {
      currentQueuePos = this.getFirstQueuePos();
    }
    this.props.receiveCurrentTrack({
      currentQueuePos: currentQueuePos
    });
  }

  playLastSong () {
    let currentQueuePos = this.props.currentTrack.currentQueuePos - 1
    if (currentQueuePos === this.getFirstQueuePos() - 1 ) {
      currentQueuePos = this.getLastQueuePos();
    }
    this.props.receiveCurrentTrack({
      currentQueuePos: currentQueuePos
    });
  }

  restartSong () {
    this.props.receiveCurrentTrack({
      restart: true
    });
  }

  render () {
    const { currentTrack, playQueue, receiveCurrentTrack } = this.props;
    const { restart, playing, currentQueuePos, changeTime } = currentTrack;
    const trackPlaying = playQueue[currentQueuePos] || {};

    if (playing) { this.listening = true }
    if (!this.listening || !trackPlaying) { return null; }

    return (
      <div className='audio-control-full-width'>
        <div className='audio-control-bar'>
          <div className='audio-control-buttons'>
            <div className='last-song-button'>
              <i className="fa fa-step-backward"
                aria-hidden="true"
                onClick={ this.restartSong }></i>
            </div>
            <PlayButton size='small' trackId={ trackPlaying.id }
              trackQueuePos={ currentQueuePos } />
            <div className='next-song-button'>
              <i className="fa fa-step-forward"
                aria-hidden="true"
                onClick={ this.handlePlayNext }></i>
            </div>
          </div>
          <div className='progress-bar-box'>
            <ProgressBar
              trackPlaying={ trackPlaying }
              receiveCurrentTrack={ receiveCurrentTrack } />
          </div>
          <VolumeControl />
          <div className='current-track-details-box'>
            <CurrentTrackDetail track={ trackPlaying }/>
          </div>
          <AudioElement
            audioUrl={ trackPlaying.audio_url }
            playNextSong={ this.playNextSong }
            receiveCurrentTrack={ receiveCurrentTrack }
            setVolume={ this.setVolume }
            playLastSong={ this.playLastSong }/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ currentTrack, playQueue }) => ({
  currentTrack,
  playQueue
})

const mapDispatchToProps = (dispatch) => ({
  receiveCurrentTrack: (currentTrack) => dispatch(receiveCurrentTrack(currentTrack)),
  receivePlayQueue: (nextQueue) => dispatch(receivePlayQueue(nextQueue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioControlBar)
