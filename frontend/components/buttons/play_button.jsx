import React from 'react';
import { connect } from 'react-redux';
import { receiveCurrentTrack } from '../../actions/current_track_actions';
import { receivePlayQueue } from '../../actions/play_queue_actions';

//Playbutton takes size and trackQueuePos
const PlayButton = ({ playing, size, pauseTrack, playTrack,
                        trackId, trackQueuePos, currentQueuePos,
                          tracks, updateQueue, currentTrackId }) => {
  let icon, action;
  if (playing && (trackQueuePos === currentQueuePos || trackId === currentTrackId)) {
    icon = size === 'small' ? "fa fa-pause" : "fa fa-pause-circle";
    action = pauseTrack;
  } else {
    icon = size === 'small' ? "fa fa-play" : "fa fa-play-circle";
    action = (e) => {
      updateQueue(tracks);
      playTrack(tracks[trackId].queuePos);
    };
  }
  let klass = size === 'small' ?
    'small-music-button' : 'reg-music-button';

  return (
    <div className={ klass }>
      <i onClick={ action } className={ icon }></i>
    </div>
  )
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
  updateQueue: (tracks) => dispatch(receivePlayQueue(tracks))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayButton);
