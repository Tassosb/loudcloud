function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a
}

export const selectTracksAsArray = (state) => (
  shuffle(Object.keys(state.tracks).map((id) => state.tracks[id]))
);
