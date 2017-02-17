import { RECEIVE_PLAY_QUEUE } from '../actions/play_queue_actions';
import { selectTracksAsArray } from './selectors';
 //Not sure why selectTracksAsArray isn't getting imported?!

const generatePlayQueue = (tracks) => {
  let playQueue = {};
  const trackList = Object.keys(tracks).map((id) => tracks[id])

  trackList.forEach((track) => {
    playQueue[track.queuePos] = track;
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
