import React from 'react';
import Waveform from '../../util/waveform_util';

class TrackWaveform extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    const { track } = this.props;
    const canvas = this.refs[`waveform-canvas-${track.id}`];
    this.waveform = new Waveform({
      canvas,
      duration: track.duration,
      peaks: track.waveform
    })
  }

  render () {
    const { track, size } = this.props;
    const width = size === 'index' ? 400 : 600;
    const height = size === 'index' ? 60 : 100;
    return (
      <canvas ref={`waveform-canvas-${track.id}`}
        width={ width } height={ height } />
    );
  }
}

export default TrackWaveform;
