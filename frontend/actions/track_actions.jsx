import * as APIUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACK_IN_VIEW = 'RECEIVE_TRACK_IN_VIEW';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';

export const receiveTracks = (tracks) => ({
  type: RECEIVE_TRACKS,
  tracks
})

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

let nextQueuePos = 1; //close over this, we don't want to repeat queuePos in a session
export const fetchTracks = (specs) => dispatch => {
  return APIUtil.fetchTracks(specs)
    .then((tracks) => {
      let newTracks = Object.assign({}, tracks);
      Object.keys(tracks).forEach((trackId) => {
        newTracks[trackId]['queuePos'] = nextQueuePos;
        nextQueuePos++
      }) //Add queue position to each track.
      dispatch(receiveTracks(newTracks))});
}

export const updateTrackPlays = (track) => dispatch => {
  const prevQueuePos = track.queuePos;
  return APIUtil.updateTrack(track)
    .then((track) => {
      const queuedTrack = Object.assign({}, track, {queuePos: prevQueuePos})
      dispatch(receiveTrack(queuedTrack))
    });
}

export const updateTrack = (track) => dispatch => {
  return APIUtil.updateTrack(track)
    .then((track) => {
      dispatch(receiveTrackInView(track));
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
