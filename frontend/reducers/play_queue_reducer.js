import { RECEIVE_PLAY_QUEUE } from '../actions/play_queue_actions';

const generatePlayQueue = (tracks) => {
  let playQueue = {};
  const trackList = Object.keys(tracks).map((id) => tracks[id])

  trackList.forEach((track) => {
    const {id, artist, audio_url, duration, image_url, title} = track;
    const queued = {id, artist, audio_url, duration, image_url, title};
    playQueue[track.queuePos] = queued;
  })

  return playQueue;
}

const playQueueReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_PLAY_QUEUE:
      return generatePlayQueue(action.tracks);
    default:
      return state;
  }
}

export default playQueueReducer;
