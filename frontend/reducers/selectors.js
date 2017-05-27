function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a
}

const spaceship = (a, b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

const compareByQueuePos = (t1, t2) => {
  return spaceship(t1.queuePos, t2.queuePos);
}

export const selectTracksAsArray = (state) => {
  const tracksAsArray = Object.keys(state.tracks)
                              .map((id) => state.tracks[id])

  return tracksAsArray.sort(compareByQueuePos)
};

export const selectCurrentTrack = (state) => {
  return state.playQueue[state.currentTrack.currentQueuePos];
}
