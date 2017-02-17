import React from 'react';
import { connect } from 'react-redux';
import PlayButton from '../buttons/play_button';

class AudioControlBar extends React.Component {
  constructor (props) {
    super(props);

    this.playNextSong = this.playNextSong.bind(this);
    this.restartSong = this.restartSong.bind(this);
  }

  playNextSong () {
    const queueLength = Object.keys(this.props.playQueue).length
    let currentQueuePos = (this.props.currentTrack.currentQueuePos + 1) % queueLength
    if (currentQueuePos === 0 ) { currentQueuePos++ }
    this.props.receiveCurrentTrack({
      currentQueuePos: currentQueuePos,
      playing: true
    });
  }

  restartSong () {
    //To be implements later: conditional restarting depending on time

    // const queueLength = Object.keys(this.props.playQueue).length
    // let currentQueuePos = this.props.currentTrack.currentQueuePos - 1;
    // if (currentQueuePos < 1) { currentQueuePos = queueLength}

    this.receiveCurrentTrack({
      restart: true
    });
  }

  render () {
    const { currentTrack, playQueue } = this.props;
    const { playing, currentQueuePos } = currentTrack;

    if (playing) { this.listening = true }

    if (this.listening) {
      return (
        <div className='audio-control-bar'>
          <div className='audio-control-buttons'>
            <div className='last-song-button'>
              <i className="fa fa-step-backward"
                aria-hidden="true"
                onClick={ this.restartSong }></i>
            </div>
            <PlayButton size='small' trackQueuePos={ currentQueuePos } />
            <div className='next-song-button'>
              <i className="fa fa-step-forward"
                aria-hidden="true"
                onClick={ this.playNextSong }></i>
            </div>
          </div>
          <div className='progress-bar'>
          </div>
          <div className='currentl-track-details'>
          </div>
          { playing &&
            <audio src={ playQueue[currentQueuePos].audio_url } autoPlay></audio>
            }
        </div>
      );
    } else {
      return null;
    }
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
