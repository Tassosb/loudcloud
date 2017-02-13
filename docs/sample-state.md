# Sample State

```javascript
{
  currentUser: {
    id: 4,
    email: "loudcloud@gmail.com",
    name: "LoudCloud User"
  },

  errors: {
    session: {
      sign_in: [],
      login: [],
    },
    upload: [],
    comment: []
  },

  nowPlaying: {
    elapsed_time: 54, //seconds
    track: {
      id: 112,
      duration: 193,
      title: "Under Pressure",
      media_url: "http://some.url",
      image_url: "http://some.other.url",
      artist: {
        id: 67,
        name: "David Bowie"
      }
    }
  },

  tracks: {
    432: {
      title: "Life On Mars?",
      duration: 180,
      media_url: "http://some.url",
      image_url: "http://some.other.url",
      track_credits: "",
      artist: {
        id: 67,
        name: "David Bowie"
      }
    },
    147: {
      title: "Starman",
      duration: 180,
      media_url: "http://some.url",
      image_url: "http://some.other.url",
      track_credits: "",
      artist: {
        id: 67,
        name: "David Bowie"
      }
    },
    532: {
      title: "Moonage Daydream",
      duration: 180,
      media_url: "http://some.url",
      image_url: "http://some.other.url",
      track_credits: "",
      artist: {
        id: 67,
        name: "David Bowie"
      }
    }
  }

  playQueue: [
    {
      id: 432,
      title: "Life On Mars?",
      media_url: "http://some.url",
      image_url: "http://some.other.url",
      track_credits: "",
      artist: {
        id: 67,
        name: "David Bowie"
      }
    },
    {
      id: 147,
      title: "Starman",
      media_url: "http://some.url",
      image_url: "http://some.other.url",
      track_credits: "",
      artist: {
        id: 67,
        name: "David Bowie"
      }
    },
    {
      id: 532,
      title: "Moonage Daydream",
      media_url: "http://some.url",
      image_url: "http://some.other.url",
      track_credits: "",
      artist: {
        id: 67,
        name: "David Bowie"
      }
    }
  ],

  trackInView: {
    id: 432,
    title: "Life On Mars?",
    duration: 180,
    media_url: "http://some.url",
    image_url: "http://some.other.url",
    track_credits: "",
    artist_id: 67,
    comments: {
      94: {
        body: "My favorite",
        author: {
          id: 43,
          name: "Freddie Mercury",
          image_url: "http://some.url"
        }
        time_ago: "1 hour"
      },
      45: {
        body: "RIP Bowie",
        author: {
          id: 75,
          name: "Greg Porter",
          image_url: "http://some.other.url"
        }
        time_ago: "5 days"
      }
    }
  },

  userInView: {
    id: 523,
    name: "David Bowie",
    image_url: "http://some.url",
    location: "London, England"
  }
}

```
