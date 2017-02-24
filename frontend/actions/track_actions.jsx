import { receiveModal } from './modal_actions';
import { selectTracksAsArray } from '../reducers/selectors';
import * as APIUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const REQUEST_TRACKS = 'REQUEST_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACK_IN_VIEW = 'RECEIVE_TRACK_IN_VIEW';
export const REQUEST_TRACK_IN_VIEW = 'REQUEST_TRACK_IN_VIEW';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';
export const PLAY_TRACK = 'PLAY_TRACK';
export const RECEIVE_TRACK_LIKE = 'RECEIVE_TRACK_LIKE';
export const REMOVE_TRACK_LIKE = 'REMOVE_TRACK_LIKE';


let nextQueuePos = 1; //close over this, we don't want to repeat queuePos in a session
export const receiveTracks = (tracks, specs) => {
  let queuedTracks = Object.assign({}, tracks);
  let baseQueuPos = nextQueuePos;
  Object.keys(tracks).forEach((trackId) => { //use temp_queue_pos to ensure ordering assigned in controller
    queuedTracks[trackId]['queuePos'] = baseQueuPos + tracks[trackId].temp_queue_pos;
    queuedTracks[trackId]['elapsedTime'] = 0;
    nextQueuePos++
  }) //Add queue position to each track.

  return {
    type: RECEIVE_TRACKS,
    tracks: queuedTracks
  }
}

export const playTrack = (trackId) => ({
  type: PLAY_TRACK,
  trackId
})

export const receiveTrackLike = (trackId) => ({
  type: RECEIVE_TRACK_LIKE,
  trackId
})

export const removeTrackLike = (trackId) => ({
  type: REMOVE_TRACK_LIKE,
  trackId
})

export const requestTracks = () => ({
  type: REQUEST_TRACKS
})

export const receiveTrack = (track) => ({
  type: RECEIVE_TRACK,
  track
})

export const receiveTrackInView = (track) => ({
  type: RECEIVE_TRACK_IN_VIEW,
  track
})

export const requestTrackInView = () => ({
  type: REQUEST_TRACK_IN_VIEW
})

export const receiveTrackErrors = (errors) => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
})

export const fetchTracks = (specs) => dispatch => {
  dispatch(requestTracks());
  return APIUtil.fetchTracks(specs)
    .then((tracks) => {
      dispatch(receiveTracks(tracks))
    });
}

export const fetchTrack = (trackId) => dispatch => {
  dispatch(requestTrackInView());
  return APIUtil.fetchTrack(trackId)
    .then((track) => {
      //we need this to update the play queue correctly when
      //user clicks play on the track show page, so we receiveTracks
      dispatch(receiveTracks({[track.id]: track}));
      dispatch(receiveTrackInView(track));
    });
}

export const updateTrackPlays = (track) => dispatch => {
  const prevQueuePos = track.queuePos;
  return APIUtil.updateTrackPlays(track)
    .then(() => {
      dispatch(playTrack(track.id));
    });
}

export const updateTrack = (formData, trackId) => dispatch => {
  return APIUtil.updateTrack(formData, trackId)
    .then((track) => {
      dispatch(receiveTrackInView(track));
      dispatch(receiveModal(''));
    },
      (errors) => dispatch(receiveTrackErrors(errors.responseJSON)));
}


export const createTrack = (track) => dispatch => {
  return APIUtil.createTrack(track)
    .then((track) => {
      dispatch(receiveTrackInView(track));
    },
      (errors) => dispatch(receiveTrackErrors(errors.responseJSON)));
}

export const deleteTrack = (trackId) => dispatch => {
  return APIUtil.deleteTrack(trackId)
    .then(() => dispatch(receiveModal('')));
}

export const likeTrack = (track) => dispatch => {
  return APIUtil.likeTrack(track.id)
    .then(() => {
      dispatch(receiveTrackLike(track.id));
    })
}

export const unlikeTrack = (track) => dispatch => {
  return APIUtil.unlikeTrack(track.id)
    .then(() => {
      dispatch(removeTrackLike(track.id))
    })
}
