import React from 'react';
import { connect } from 'react-redux';
import Waveform from '../../util/waveform_util';
import { receiveCurrentTrack } from '../../actions/current_track_actions';
import { receivePlayQueue } from '../../actions/play_queue_actions';
import { updateTrackPlays } from '../../actions/track_actions';

class TrackWaveform extends React.Component {
  constructor (props) {
    super(props);
    this.state = {playCounted: false}

    this.handleClick = this.handleClick.bind(this);
    this.addTrackPlay = this.addTrackPlay.bind(this);
  }

  componentDidMount () {
    const { track, currentTrack } = this.props;
    const canvas = this.refs[`waveform-canvas-${track.id}`];
    this.waveform = new Waveform({
      canvas,
      duration: track.duration,
      peaks: track.waveform,
      currentTrack
    })

    this.waveform.draw();

    canvas.addEventListener('click', this.handleClick);
  }

  handleClick (e) {
    const { track, receiveCurrentTrack, tracks,
              currentTrack, playQueue, updateQueue } = this.props;
    const trackPlaying = playQueue[currentTrack.currentQueuePos];

    var relClickPos = e.offsetX;
    var canvasWidth = e.currentTarget.offsetWidth;

    const elapsedTime = Math.floor((relClickPos / canvasWidth) * track.duration)

    if (trackPlaying && track.id === trackPlaying.id) {
      receiveCurrentTrack({ elapsedTime, changeTime: true, playing: true });
    } else {
      updateQueue(tracks);
      this.addTrackPlay(track);
      receiveCurrentTrack({
        currentQueuePos: track.queuePos,
        playing: true,
        changeTime: true,
        elapsedTime: this.waveform.currentTime
      });
    }
  }

  addTrackPlay (track) {
    const { updateTrackPlays } = this.props;
    if (!this.state.playCounted) {
      updateTrackPlays(track.id);
      this.setState({playCounted: true});
    }
  }

  update (trackPlaying) {
    const { track, currentTrack } = this.props;

    if (track.id === trackPlaying.id) {
      const newTime = currentTrack.elapsedTime % track.duration;
      this.waveform.currentTime = newTime;
      this.waveform.draw();
    }
  }

  render () {
    const { track, size, currentTrack, playQueue } = this.props;
    const trackPlaying = playQueue[currentTrack.currentQueuePos];

    const width = size === 'index' ? 500 : 700;
    const height = size === 'index' ? 60 : 150;

    if (this.waveform && trackPlaying) {
      this.update(trackPlaying);
    }

    return (
      <canvas ref={`waveform-canvas-${track.id}`}
        width={ width } height={ height } />
    );
  }
}

const mapStateToProps = ({ currentTrack, playQueue, tracks }) => ({
  currentTrack,
  playQueue,
  tracks
});

const mapDispatchToProps = (dispatch) => ({
  receiveCurrentTrack: (currentTrack) => dispatch(receiveCurrentTrack(currentTrack)),
  updateQueue: (tracks) => dispatch(receivePlayQueue(tracks)),
  updateTrackPlays: (trackId) => dispatch(updateTrackPlays(trackId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackWaveform);
