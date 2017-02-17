import * as APIUtil from '../util/track_api_util';

export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';

export const receiveTracks = (tracks) => ({
  type: RECEIVE_TRACKS,
  tracks
})

export const fetchTracks = (specs) => dispatch => {
  return APIUtil.fetchTracks(specs)
    .then((tracks) => {
      let newTracks = Object.assign({}, tracks);
      Object.keys(tracks).forEach((trackId, idx) => {
        newTracks[trackId]['queuePos'] = idx + 1;
      }) //Add queue position to each track.
      dispatch(receiveTracks(newTracks))});
}
