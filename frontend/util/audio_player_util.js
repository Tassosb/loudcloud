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
      Math.floor(this.audioEl.currentTime) === Math.floor(this.audioEl.duration)
    );
  }

  getCurrentTime () {
    return Math.floor(this.audioEl.currentTime)
  }

  getDuration () {
    return Math.floor(this.audioEl.duration)
  }

  getVolume () {
    return this.audioEl.volume;
  }
}
