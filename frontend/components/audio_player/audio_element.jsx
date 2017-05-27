import React from 'react';
import { connect } from 'react-redux';
import AudioPlayer from '../../util/audio_player_util';
import { selectCurrentTrack } from '../../reducers/selectors';

class AudioElement extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const audioEl = this.refs.audio;
    const { receiveCurrentTrack, elapsedTime, currentTrack } = this.props;

    this.AudioPlayer = new AudioPlayer(audioEl);

    audioEl.addEventListener('durationchange', () => {
      receiveCurrentTrack({
        duration: this.AudioPlayer.getDuration()
      })
    });

    this.timerId = window.setInterval(() => {
      const duration = this.AudioPlayer.getDuration();
      let elapsedTime = this.AudioPlayer.getCurrentTime();
      // const currentTrackId = currentTrack === undefined ? 0 : currentTrack.id;
      receiveCurrentTrack({
        elapsedTime,
        track: this.props.currentTrack
      });
    }, 250)
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
            receiveCurrentTrack
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
      receiveCurrentTrack({ elapsedTime: 0 })
      playNextSong(true);
    } else {
      playing ? this.AudioPlayer.play() : this.AudioPlayer.pause();
    }
  }

  render () {
    const { audioUrl, playing } = this.props;

    return (
      <audio
        ref='audio'
        src={ audioUrl }
        autoPlay={ playing }>
      </audio>
    );
  }
}

const mapStateToProps = (state) => ({
  playing: state.currentTrack.playing,
  restart: state.currentTrack.restart,
  elapsedTime: state.currentTrack.elapsedTime,
  changeTime: state.currentTrack.changeTime,
  currentTrack: selectCurrentTrack(state)
})

export default connect(
  mapStateToProps
)(AudioElement);
