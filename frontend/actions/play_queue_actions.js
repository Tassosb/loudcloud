export const RECEIVE_PLAY_QUEUE = 'RECEIVE_PLAY_QUEUE';

export const receivePlayQueue = (tracks) => ({
  type: RECEIVE_PLAY_QUEUE,
  tracks
})
