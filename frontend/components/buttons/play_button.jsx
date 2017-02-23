import React from 'react';
import { connect } from 'react-redux';
import { receiveCurrentTrack } from '../../actions/current_track_actions';
import { receivePlayQueue } from '../../actions/play_queue_actions';
import { updateTrackPlays } from '../../actions/track_actions';

const sizes = {
  'small': 'small-music-button',
  'regular': 'reg-music-button',
  'big': 'big-music-button'
}

//Playbutton takes size, trackQueuePos, and trackId
class PlayButton extends React.Component {
  constructor (props) {
    super(props);
    this.state = {playCounted: false, elapsedTime: 0};
    this.addTrackPlay = this.addTrackPlay.bind(this);
  }

  addTrackPlay (track) {
    const { trackId, currentTrackId, updateTrackPlays } = this.props;
    if (!this.state.playCounted && currentTrackId !== trackId) {
      updateTrackPlays({
        id: trackId,
        num_plays: track.num_plays + 1,
        queuePos: track.queuePos
      });
      this.setState({playCounted: true});
    }
  }

  componentWillReceiveProps (newProps) {
    if (newProps.currentTrackId === this.props.trackId &&
          newProps.elapsedTime !== this.props.elapsedTime) {
            debugger
            this.setState({ elapsedTime: newProps.elapsedTime });
          }
  }

  render () {
    const { playing, size, pauseTrack, playTrack,
      trackId, trackQueuePos, currentQueuePos,
      tracks, updateQueue, currentTrackId, elapsedTime } = this.props;

    const track = tracks[trackId];
    let icon, action;
    if (playing && (trackId === currentTrackId)) {
      icon = size === 'small' ? "fa fa-pause" : "fa fa-pause-circle";
      action = pauseTrack;
    } else {
      icon = size === 'small' ? "fa fa-play" : "fa fa-play-circle";
      action = () => {
        updateQueue(tracks);
        if (track) {
          debugger
          playTrack(track, this.state.elapsedTime);
          this.addTrackPlay(track);
        }
      };
    }

    let klass = sizes[size];

    return (
      <div className={ klass }>
        <i onClick={ action } className={ icon }></i>
      </div>
    );
  }
}

const mapStateToProps = ({ currentTrack, tracks, playQueue }) => {
  let currentTrackId = 0
  if (currentTrack.playing) {
    const trackPlaying = playQueue[currentTrack.currentQueuePos];
    if (trackPlaying) { currentTrackId = trackPlaying.id; }
  }

  return {
    playing: currentTrack.playing,
    currentQueuePos: currentTrack.currentQueuePos,
    elapsedTime: currentTrack.elapsedTime,
    currentTrackId,
    tracks
  }
};

const mapDispatchToProps = (dispatch) => ({
  playTrack: (track, elapsedTime) => {
    debugger
    dispatch(receiveCurrentTrack({
    currentQueuePos: track.queuePos, playing: true, elapsedTime, changeTime: true }))
  },
  pauseTrack: () => dispatch(receiveCurrentTrack({
    playing: false})),
  updateQueue: (tracks) => dispatch(receivePlayQueue(tracks)),
  updateTrackPlays: (track) => dispatch(updateTrackPlays(track))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayButton);
