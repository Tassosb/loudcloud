import React from 'react';
import { connect } from 'react-redux';
import { receiveCurrentTrack } from '../../actions/current_track_actions';
import { receivePlayQueue } from '../../actions/play_queue_actions';
import { updateTrackPlays } from '../../actions/track_actions';

//Playbutton takes size and trackQueuePos
class PlayButton extends React.Component {
  constructor (props) {
    super(props);
    this.playCounted = false;
  }

  componentDidMount () {
  }

  render () {
    const { playing, size, pauseTrack, playTrack,
      trackId, trackQueuePos, currentQueuePos,
      tracks, updateQueue, currentTrackId, updateTrackPlays } = this.props;

    const track = tracks[trackId];

    let icon, action;
    if (playing && (trackQueuePos === currentQueuePos || trackId === currentTrackId)) {
      icon = size === 'small' ? "fa fa-pause" : "fa fa-pause-circle";
      action = pauseTrack;
    } else {
      icon = size === 'small' ? "fa fa-play" : "fa fa-play-circle";
      action = () => {
        if (!this.playCounted && trackQueuePos === currentQueuePos) {
          updateTrackPlays({
            id: trackId,
            num_plays: track.num_plays + 1,
            queuePos: track.queuePos
          });
          this.playCounted = true;
        }
        updateQueue(tracks);
        playTrack(track.queuePos);
      };
    }

    let klass = size === 'small' ?
    'small-music-button' : 'reg-music-button';

    return (
      <div className={ klass }>
        <i onClick={ action } className={ icon }></i>
      </div>
    );
  }
}

//play button seems likes it should not need to know all tracks
//But for now I need them to updat the queue every time the play
//button is clicked.

const mapStateToProps = ({ currentTrack, tracks, playQueue }) => {
  const currentTrackId = currentTrack.playing ?
      playQueue[currentTrack.currentQueuePos].id : 0;
  return {
    playing: currentTrack.playing,
    currentQueuePos: currentTrack.currentQueuePos,
    currentTrackId,
    tracks
  }
};

const mapDispatchToProps = (dispatch) => ({
  playTrack: (trackQueuePos) => dispatch(receiveCurrentTrack({
    currentQueuePos: trackQueuePos, playing: true})),
  pauseTrack: () => dispatch(receiveCurrentTrack({
    playing: false})),
  updateQueue: (tracks) => dispatch(receivePlayQueue(tracks)),
  updateTrackPlays: (track) => dispatch(updateTrackPlays(track))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayButton);
