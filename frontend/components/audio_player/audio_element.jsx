import React from 'react';
import AudioPlayer from '../../util/audio_player_util';

class AudioElement extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const $audioEl = $('audio')[0];
    const { receiveCurrentTrack } = this.props;

    this.AudioPlayer = new AudioPlayer($audioEl);

    $audioEl.addEventListener('durationchange', () => {
      receiveCurrentTrack({
        duration: this.AudioPlayer.getDuration()
      })
    });

    this.timerId = window.setInterval(() => {
      const elapsedTime = this.AudioPlayer.getCurrentTime();
      receiveCurrentTrack({ elapsedTime });
    }, 500)
  }

  componentWillUnmount () {
    window.clearInterval(this.timerId);
  }

  componentWillReceiveProps (newProps) {
    const { audioUrl, receiveCurrentTrack } = this.props;

  }

  componentDidUpdate () {
    const { playing,
            restart,
            playNextSong,
            receiveCurrentTrack
          } = this.props;

    if (restart) {
      this.AudioPlayer.setPlayTime(0)
      receiveCurrentTrack({ restart: false })
     }
    if (this.AudioPlayer.isSongOver()) { playNextSong }

    playing ? this.AudioPlayer.play() : this.AudioPlayer.pause();
  }

  render () {
    const { restart, audioUrl, playing } = this.props;

    return (
      <audio
        src={ this.props.audioUrl }
        autoPlay={ playing }></audio>
    );
  }
}

export default AudioElement;
