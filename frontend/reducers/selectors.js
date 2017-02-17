function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a
}

export const selectTracksAsArray = (state) => (
  Object.keys(state.tracks).map((id) => state.tracks[id])
);

const formatTime = (seconds) => {
  let minutes = Math.floor(seconds / 60);
  let secondsLeft = seconds % 60;
  const paddedSec = secondsLeft < 10 ? `0${secondsLeft}` : `${secondsLeft}`
  return minutes + ':' + paddedSec;
}

export const selectFormattedElapsedTime = (state) => (
  formatTime(state.currentTrack.elapsedTime)
);

export const selectFormattedDuration = (state) => (
  formatTime(state.currentTrack.duration)
);

export const selectPercentElapsedTime = ({ currentTrack }) => (
  Math.floor(
    (currentTrack.elapsedTime / currentTrack.duration)
  ) + '%'
);
