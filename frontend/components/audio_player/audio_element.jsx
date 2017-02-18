import React from 'react';
import { connect } from 'react-redux';
import AudioPlayer from '../../util/audio_player_util';

class AudioElement extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const $audioEl = $('audio')[0];
    const { receiveCurrentTrack, elapsedTime, setVolume } = this.props;

    this.AudioPlayer = new AudioPlayer($audioEl);

    $audioEl.addEventListener('durationchange', () => {
      receiveCurrentTrack({
        duration: this.AudioPlayer.getDuration()
      })
    });

    $audioEl.addEventListener('volumechange', () => {
      console.log('volume changed')
      console.log(this.AudioPlayer.getVolume())
    });

    this.timerId = window.setInterval(() => {
      const elapsedTime = this.AudioPlayer.getCurrentTime();
      receiveCurrentTrack({
        elapsedTime
      });
    }, 200)
  }

  componentWillUnmount () {
    window.clearInterval(this.timerId);
  }

  componentDidUpdate () {
    const { playing,
            restart,
            elapsedTime,
            changeTime,
            playNextSong,
            playLastSong,
            receiveCurrentTrack,
          } = this.props;

    if (changeTime) {
      this.AudioPlayer.setPlayTime(elapsedTime);
      receiveCurrentTrack({ changeTime: false });
    } else if (restart) {
      if (this.AudioPlayer.getCurrentTime() < 1) {
        playLastSong();
      }
      this.AudioPlayer.setPlayTime(0)
      receiveCurrentTrack({ restart: false })
    } else if (this.AudioPlayer.isSongOver()) {
      playNextSong()
    } else {
      playing ? this.AudioPlayer.play() : this.AudioPlayer.pause();
    }

  }

  render () {
    const { audioUrl, playing } = this.props;

    return (
      <audio
        src={ audioUrl }
        autoPlay={ playing }></audio>
    );
  }
}

const mapStateToProps = ({ currentTrack }) => ({
  playing: currentTrack.playing,
  restart: currentTrack.restart,
  elapsedTime: currentTrack.elapsedTime,
  changeTime: currentTrack.changeTime
})

export default connect(
  mapStateToProps
)(AudioElement);
