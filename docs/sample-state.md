# Sample State

```javascript
{
  currentUser: {
    email: "loudcloud@gmail.com"
  },

  errors: {
    session: {},
    upload: {}
  },

  currentTrack: {
    id: 112,
    title: "Under Pressure",
    media_url: "http://some.url",
    image_url: "http://some.other.url",
    track_credits: "Feat. Prince",
    user_id: 43
  },

  playQueue: [
    {
      id: 432,
      title: "Life On Mars?",
      media_url: "http://some.url",
      image_url: "http://some.other.url",
      track_credits: "",
      user_id: 67
    },
    {
      id: 147,
      title: "Starman",
      media_url: "http://some.url",
      image_url: "http://some.other.url",
      track_credits: "",
      user_id: 53
    },
    {
      id: 532,
      title: "Moonage Daydream",
      media_url: "http://some.url",
      image_url: "http://some.other.url",
      track_credits: "",
      user_id: 34
    }
  ],

  trackInView: {
    id: 432,
    title: "Life On Mars?",
    media_url: "http://some.url",
    image_url: "http://some.other.url",
    track_credits: "",
    user_id: 67,
    comments: {
      94: {
        body: "My favorite",
        author: {
          name: "Freddie Mercury",
          image_url: "http://some.url"
        }
        time_ago: "1 hour"
      },
      45: {
        body: "RIP Bowie",
        author: {
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
