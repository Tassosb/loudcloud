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

const compareNumPlays = (t1, t2) => {
  return spaceship(t2.num_plays, t1.num_plays);
}

const sortingFunctions = {
  numPlays: compareNumPlays
}

export const selectTracksAsArray = (state, sort_by) => {
  const tracksAsArray = Object.keys(state.tracks)
                              .map((id) => state.tracks[id])
  if (sort_by) {
    return tracksAsArray.sort(compareNumPlays)
  } else {
    return tracksAsArray
  }
};
