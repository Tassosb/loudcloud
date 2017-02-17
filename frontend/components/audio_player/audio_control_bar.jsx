import React from 'react';
import { connect } from 'react-redux';
import PlayButton from '../buttons/play_button';

class AudioControlBar extends React.Component {

  render () {
    if (currentTrack.playing) { this.listening = true }

    if (this.listening) {
      return (
        <div className='audio-control-bar'>
          <PlayButton size='small' trackQueuePos={ currentTrack.currentQueuePos } />
        </div>
      )
    }


    const { currentTrack, playQueue }

  }
}

const mapStateToProps = ({ currentTrack, playQueue }) => ({
  currentTrack,
  playQueue
})

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudioControlBar)
