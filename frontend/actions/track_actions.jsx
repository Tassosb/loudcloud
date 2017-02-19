import { receiveModal } from './modal_actions';
import * as APIUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACK_IN_VIEW = 'RECEIVE_TRACK_IN_VIEW';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';

let nextQueuePos = 1; //close over this, we don't want to repeat queuePos in a session
export const receiveTracks = (tracks) => {
  let queuedTracks = Object.assign({}, tracks);
  Object.keys(tracks).forEach((trackId) => {
    queuedTracks[trackId]['queuePos'] = nextQueuePos;
    nextQueuePos++
  }) //Add queue position to each track.

  return {
    type: RECEIVE_TRACKS,
    tracks: queuedTracks
  }
}

export const receiveTrack = (track) => ({
  type: RECEIVE_TRACK,
  track
})

export const receiveTrackInView = (track) => ({
  type: RECEIVE_TRACK_IN_VIEW,
  track
})

export const receiveTrackErrors = (errors) => ({
  type: RECEIVE_TRACK_ERRORS,
  errors
})

export const fetchTracks = (specs) => dispatch => {
  return APIUtil.fetchTracks(specs)
    .then((tracks) => {
      dispatch(receiveTracks(tracks))
    });
}

export const fetchTrack = (trackId) => dispatch => {
  return APIUtil.fetchTrack(trackId)
    .then((track) => {
      //we need this to update the play queue correctly when
      //user clicks play on the track show page
      dispatch(receiveTracks({[track.id]: track}));
      dispatch(receiveTrackInView(track));
    });
}

export const updateTrackPlays = (track) => dispatch => {
  const prevQueuePos = track.queuePos;
  return APIUtil.updateTrackPlays(track)
    .then((track) => {
      const queuedTrack = Object.assign({}, track, {queuePos: prevQueuePos})
      dispatch(receiveTrack(queuedTrack));
      dispatch(receiveTrackInView(queuedTrack));
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
