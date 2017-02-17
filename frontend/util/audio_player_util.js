export default class AudioPlayer {
  constructor (audioEl) {
    this.audioEl = audioEl;
  }

  setPlayTime (time) {
    this.audioEl.currentTime = time;
  }

  pause () {
    this.audioEl.pause()
  }

  play () {
    this.audioEl.play()
  }

  isSongOver () {
    return (
      this.audioEl.currentTime === this.audioEl.duration
    );
  }

  getCurrentTime () {
    return Math.floor(this.audioEl.currentTime)
  }

  getDuration () {
    return Math.floor(this.audioEl.duration)
  }
}
