import * as APIUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';

export const receiveTracks = (tracks) => ({
  type: RECEIVE_TRACKS,
  tracks
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
