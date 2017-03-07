# LoudCloud

[LoudCloud live](http://loud-cloud.herokuapp.com "Live Link")

LoudCloud is a full-stack web application based on SoundCloud. It was built with a Ruby on Rails back end and React.js-Redux front end.

## Features and Implementation

### Music Streaming

The core feature of LoudCloud is seamlessly streaming music. The goal was an interface that provides the user total control, yet also alleviates the work of constantly adding tracks to a play queue. Complete control of music playback is provided by the audio controls bar, which appears the first time the user plays a track. The audio controls bar contains a volume knob, basic playback controls, an interactive progress bar, and a thumbnail of the currently playing track. The work of generating a play queue is automated each time the user clicks the wave form or the play button of a track. In each event, a new play queue is generated with all the tracks on the current page, in the order in which they appear. The play queue persists as the user navigates the website and is only replaced when the user chooses to play another track. In this way, the user is guided seamlessly to their next favorite track while still maintaining complete control over which song they are listening to.

After tracks are fetched from the database, they are received by the front end redux store and assigned a queue position according the order in which they were sent by the tracks controller. This allows the tracks controller in the backend to order the tracks based on number of plays, time created, or any other attribute.

All of the **tracks** on a given page are stored in the redux state as an object with the keys being the id's of each track and the values the tracks themselves.

The current **play queue** is stored in the redux state as an object with the keys being the queue positions of each track and the values being the tracks themselves. While the play queue may stay the same, the tracks on a page will change as the user navigates the site. Thus, the play queue needed to carry information about the tracks themselves.

```
const generatePlayQueue = (tracks) => {
  let playQueue = {};
  const trackList = Object.keys(tracks).map((id) => tracks[id])

  trackList.forEach((track) => {
    playQueue[track.queuePos] = track;
  })

  return playQueue;
}
```

With this implementation, every track on the page knows its position in the play queue. Additionally, the play queue has all the information it needs about every track it contains.

Information about the currently playing track is stored in the redux state as an object called **currentTrack**. It holds the current position in the play queue and information about play status and elapsed time. Finding information about the currently playing track is as easy as keying into the play queue with the current queue position. Many components, like wave forms, play buttons, and the progress bar, take direction from the current track slice of state.

Audio is played by the **AudioElement** component, which renders an HTML 5 audio element. To provide a customizable interface with the audio element, I created an **AudioPlayer** utility class. The AudioPlayer class takes in an audio element and provides convenient methods for setting and getting current time, volume, and duration. It is instantiated in the AudioElement component. The AudioElement is in turn rendered in the AudioControlBar component. In breaking out this functionality into multiple files, I aimed to keep my components as light-weight and readable as possible.

Following the idea of building modular components, each button with major functionality has its own component. The play button is particularly versatile. It will render as small, regular, or big, depending on the size prop passed in. Once it is given a track id and track queue position, it can be relied upon to delivery the functionality of toggling play status, updating the play queue, and incrementing the track's play count. Additionally, it keeps track of the elapsed play time of its associated track. With this, users can return to a song and begin where they had once stopped.

Inside play button's handleClick method:
```
const track = tracks[trackId];
let icon, action;
if (playing && (trackId === currentTrackId)) {
  icon = size === 'small' ? "fa fa-pause" : "fa fa-pause-circle";
  action = pauseTrack;
} else {
  icon = size === 'small' ? "fa fa-play" : "fa fa-play-circle";
  action = () => {
    updateQueue(tracks);
    if (track) {
      playTrack(track, this.state.elapsedTime);
      this.addTrackPlay(track);
    }
  };
}
```

![alt text](http://g.recordit.co/boiH4NcFtp.gif "Waveform Gif")

### Waveform

Waveforms are central to the experience of SoundCloud. So they are too for LoudCloud. They provide visually impressive feedback when a song is playing, and they are readily interactive.

Each waveform is a canvas element that is rendered by a **TrackWaveform** component. This component manages the interface with the user. It delegates the drawing of the waveform to a plain javascript Waveform utility class. Upon mounting, the TrackWaveform component instantiates a Waveform object and passes in the canvas element that it has rendered along with the audio buffer and duration of its associated track.

```
componentDidMount () {
  const { track, currentTrack } = this.props;
  const canvas = this.refs[`waveform-canvas-${track.id}`];
  this.waveform = new Waveform({
    canvas,
    duration: track.duration,
    peaks: track.waveform,
    currentTrack
    })

    this.waveform.draw();

    canvas.addEventListener('click', this.handleClick);
  }
  ```

Each time the TrackWaveform re-renders, it will update its waveform and trigger a re-drawing if necessary.

```
update (trackPlaying) {
  const { track, currentTrack } = this.props;

  if (track.id === trackPlaying.id) {
    const newTime = currentTrack.elapsedTime % track.duration;
    this.waveform.currentTime = newTime;
    this.waveform.draw();
  }
}
```

In order to render waveforms quickly, audio buffer and duration is extracted and saved to the database when a new track is uploaded. The audio buffer is saved as an array of floats. These processes take place server-side using included libraries. This information is then passed down when the tracks are requested and used to draw the waveforms.

Waveforms are drawn by first dividing the audio buffer into a number of subsets equal to the number of bars to be rendered. The root mean square is calculated for each subset. These values are then scaled according to the canvas height and used to draw bars of representative heights. The bars are colored depending on their position relative to the current elapsed time of the track.

The waveforms interact with the currentTrack slice of state similarly to the play button and the progress bar.

### Search

The search bar provides access to every track and user on the website. It fetches new search results whenever the user changes the search query. Additionally, it clears itself when the user clicks anywhere outside the search component.

```
update (e) {
  this.setState({
    query: e.currentTarget.value,
    active: !(e.currentTarget.value === '')
  },
    () => { this.props.fetchSearchResults(this.state.query) }
  );
}
```

![alt text](http://g.recordit.co/AIx4P1mnDG.gif "Search Bar Gif")

### Other Features

Other features offered by LoudCloud include:

- Audio and Image Uploading
- Editing and Deleting Tracks
- Multiple Sessions
- Comments
- Track Likes
- Track Plays
- User Profiles

### Features To Implement

Some features I'd like to implement are:

- Following Artists
- User Playlists
- Genres
- Track Recommendations Based on Listening History
