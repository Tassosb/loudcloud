export const selectTracksAsArray = (state) => (
  Object.keys(state.tracks).map((id) => state.tracks[id])
);
