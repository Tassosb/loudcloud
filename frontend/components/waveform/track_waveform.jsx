import React from 'react';
import { connect } from 'react-redux';
import Waveform from '../../util/waveform_util';
import { receiveCurrentTrack } from '../../actions/current_track_actions';

class TrackWaveform extends React.Component {
  constructor (props) {
    super(props);
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
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.currentTrack) { return; }
    if (this.props.currentTrack.elapsedTime !==
              nextProps.currentTrack.elapsedTime) {

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

    const width = size === 'index' ? 500 : 600;
    const height = size === 'index' ? 60 : 100;

    if (this.waveform && trackPlaying) {
      this.update(trackPlaying);
    }

    return (
      <canvas ref={`waveform-canvas-${track.id}`}
        width={ width } height={ height } />
    );
  }
}

const mapStateToProps = ({ currentTrack, playQueue }) => ({
  currentTrack,
  playQueue
});

const mapDispatchToProps = (dispatch) => ({
  receiveCurrentTrack: (currentTrack) => dispatch(receiveCurrentTrack(currentTrack))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrackWaveform);
