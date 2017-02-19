import React from 'react';
import { connect } from 'react-redux';

class Waveform extends React.Component {

  componentDidMount () {
    const { track } = this.props;
    var wavesurfer = WaveSurfer.create({
      container: `#waveform${track.id}`,
      waveColor: '#8c8c8c',
      progressColor: '#ff5500',
      barWidth: 2,
      pixelRatio: 1,
      height: 40,
      mediaType: 'audio',
      maxCanvasWidth: 400,
      fillParent: true,
      audioContext:
    });
    let duration = 0
    wavesurfer.load(this.props.track.audio_url);
    wavesurfer.on('ready', function () {
      wavesurfer.getDuration();
    });
    window.wavesurfer = wavesurfer;
  }

  render () {
    let duration = null;
    if (this.wavesurfer) {
      duration = this.wavesurfer.getDuration();
     };
    return (
      <div>
        <div id={`waveform${this.props.track.id}`}>
        </div>
        <span className='track-duration'>{ this.duration }</span>
      </div>
    )
  }
}


export default Waveform;
